import Proptypes from 'prop-types'
import { useState} from 'react'
import {Link} from 'react-router-dom'
import { doc, documentId, updateDoc } from "firebase/firestore";
import {firebase } from '../lib/firebase'
import {updateProfileFollowing, updateProfileTargetFollowers} from '../services/firebase'

//remeber this is a single suggested profile, that is why we only need a usestate that tracks true of false 
export default function SuggestedProfile(props) {

    const [followed, setFollowed] = useState(false);
    async function handleFollow() {
        setFollowed(true);
        //need to update 
            // my profile (following)
            

            //first let us update myprofile 

        await updateProfileFollowing(props.userDocId, props.profileid, props.following);
        
        
        
        await updateProfileTargetFollowers(props.docId, props.userid);
            


            // followers of the user that have been followed

    }
    return !followed ? (
        //if havent followed yet, render its profile pic  
        <div className='mt-5 flex items-center align-items justify-between flex-row '> 
            <div className='flex items-center justify-between'> 
                <img 
                className='rounded-full w-12 flex mr-3'
                src = {`/images/avatars/${props.username}.png`}
                alt = ''
                />

            <Link to={`/p/${props.username}`}>
                <p className='font-bold text-sm'> {props.username} </p>
            </Link>

            </div>


            
            <button className='text-xs font-bold text-blue-600 mr-4'
                                onClick = {handleFollow}>
                    Follow
            </button>

          
        </div>
    ) : null; 
}


SuggestedProfile.propTypes = {
    username : Proptypes.string, 
    profileId : Proptypes.string, 
    userId: Proptypes.string,
    docId : Proptypes.string
}