import {useEffect, useContext, useState} from "react";
import UserContext from "../context/user";
import { getUserById } from "../services/firebase";
import {getPhotos} from '../services/firebase';


export default function UsePhotos() {


    const [photos, setPhotos] = useState(null);
    const {
        user: {uid: userId=''}
    } = UserContext(UserContext);

    useEffect(()=> {
        async function getPhotosAsync() {

            //we need to get users that the curr user follows --> so we can get their photos 
            const [{followings}] = await getUserById(userId);
            let photos = [];
            if (followings.length > 0) {
                //do smt here 
                photos = await getPhotos(userId, followings);
                setPhotos(photos);
            }
        }
        getPhotosAsync();
    });

    return {photos};
}