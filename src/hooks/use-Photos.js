import {useEffect, useContext, useState} from "react";
import UserContext from "../context/user";
import { getFollowings, getUserById} from "../services/firebase";
import {getPhotos} from '../services/firebase';
import useUser from './useUser';


export default function UsePhotos() {


    const [photos, setPhotos] = useState([]);
    const userContext = useContext(UserContext);

    
    useEffect(()=> {
        async function getPhotosAsync() {
            //we need to get users that the curr user follows --> so we can get their photos 
  
         
            const [followings] = await getFollowings(userContext.uid);
            console.log('el followings', followings);
            let photosarray = [];
            if (followings.length > 0) {
                //do smt here 
                photosarray = await getPhotos(userContext.uid, followings);
                if (photosarray.length === 0) setPhotos([]);
                else setPhotos(photosarray);
            }
        }
    
        getPhotosAsync();
    }, [userContext]);
    
    return {photos}
    
}