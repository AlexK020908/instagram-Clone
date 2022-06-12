import {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import useUser from '../../hooks/useUser'
import {isFollowingProfile, toggleFollow} from '../../services/firebase'
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

export default function Header(props) {
    const [following, setFollow] = useState(false); //prob props here, since private if not following
    //WE NEED hook of user because we want the user that is logged in in auth from firebase 
    const {user} = useUser();
    const activeButtonFollow = user.username && user.username !== props.profile.username


    const handleFollow = async () => {


    console.log('is following right before calling follolw', following);
        props.setFollowerCount({
            followersCount: following ? props.followersCount - 1 :props.followersCount + 1
    })

    
       setFollow(!following);




    await toggleFollow(!following, user.docId, props.profile.docId, props.profile.userId, user.userId, user.following);



    };

    //now we need useEffect here because when the isFollowing state changes, we want ot be able to make the profile private or make it oublic 
    useEffect(()=> {
        const isUserFollowingProfile = async () => {
            const isFollowing = await isFollowingProfile(user.userId, props.profile.userId);
            setFollow(isFollowing);
        }

        //notice that when the hook is called, we wont have the user so we need to check if user exists here 
        if (user.username && props.profile.userId)isUserFollowingProfile();


    }, [user.userId, user.username, props.profile.userId])


    return (
        <div className='grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg'>
            <div className='container flex justify-center'>

                {user.username && (
                <img className='rounded-full h-40 w-40 flex'
                alt = {`${props.profile.username}`} 
                src = {`/images/avatars/${props.profile.username}.png`}>


                </img>
                )}

            </div>
            <div className='flex items-center justify-center flex-col col-span-2'>
               <div className='container flex items-center col-span-1'>
                <p className='text-2xl mr-4'>
                    {props.profile.username}
                </p>
                {activeButtonFollow && (
                    <button
                        className='bg-blue-medium font-bold rounded text-white w-20 h-8 items-center'
                        onClick={handleFollow}
                        >
                    {following ? 'unfollow' : 'follow'}



                    </button>
                
                )}
              </div>

              <div className='container flex mt-4'> 
                    {props.profile === undefined || props.profile.following === undefined ? (
                       <Skeleton count ={1} width= {677} height = {24}></Skeleton>
                    ): (
                        <>
                        <p className='mr-10'>
                            <span className='font-bold'>
                            {props.photosCount}
                            {' '}
                            {props.photosCount <= 1 ? 'post' : 'posts'}
                            </span>
                        </p>


                        <p className='mr-10'> 
                            <span className='font-bold'> 
                            {props.followersCount}
                            {' '}
                            {props.followersCount <= 1 ? 'Follower' : 'Followers'}


                            </span>



                        </p>


                        <p className='mr-10'> 
                            <span className='font-bold'> 
                            {props.following.length}
                            {' '}
                            Following
                        </span>



                        </p>
                        </>



                    )}
                


              </div>

              <div className='container mt-4'> 
                    <p className='font-small text-sm'>
                        {props.profile === undefined ? (
                            <Skeleton count = {1}></Skeleton>
                        ) : (
                            <>      
                                {props.profile.fullName}
                            
                            </>

                            
                        )}
                    
                    
                    
                    </p>


              </div>
            </div>
      

        </div>





    )


    





}

Header.propTypes ={
    photosCount: PropTypes.number.isRequired, 
    profile: PropTypes.object.isRequired, 
    followersCount: PropTypes.number.isRequired,
    setFollowerCount: PropTypes.func.isRequired,
    following : PropTypes.array.isRequired



}