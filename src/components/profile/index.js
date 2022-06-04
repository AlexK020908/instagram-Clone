import PropTypes from 'prop-types'
import Header from './header'
import { useReducer, useEffect } from 'react'
import {getUserByUsername, getPhotosByUsername} from '../../services/firebase'
import Photos from './photos.js'
import user from '../sidebar/user'
export default function Profile(props) {
    //need some initial state 

    const reducer = (state, newState) => ({...state, ...newState});
    const initialState = {
        profile: {},
        photosCollections: [], 
        followersCount:0
    };
    const [{profile, photosCollection, followersCount}, dispatch] = useReducer(reducer, initialState);

    //it is safe to not include dispatch in the dependency list

    useEffect(()=> {
        async function getProfileInfoAndPhotos() {
            const [user] = await getUserByUsername(props.username);
            const photos =  await getPhotosByUsername(user);
            console.log('photos returned in profile index', photos);
            console.log('user usernmae', props.username)
            dispatch({profile: user, photosCollection: photos, followersCount: user.followers.length});
        }


        getProfileInfoAndPhotos();




    }, [props.username]);


    return (
        <>
            <Header photosCount ={photosCollection ? photosCollection.length : 0}
                    profile={profile}
                    following={profile.following}
                    followersCount = {followersCount}
                    setFollowerCount = {dispatch}
            />
            <Photos photos= {photosCollection}/>
        
        </>
    );





}


Profile.propTypes = {
    username: PropTypes.string.isRequired
}