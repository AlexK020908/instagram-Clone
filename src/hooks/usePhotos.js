import {useEffect, useContext, useState} from "react";
import UserContext from "../context/user";



export default function userPhotos() {


    const [photos, setPhotos] = useState(null);
    const {
        user: {uid: userId=''}
    } = UserContext(UserContext);

    useEffect(()=> {
        async function getPhotos() {

            //we need to get users that the curr user follows --> so we can get their photos 
            const followingUserIds = 
        }
    });

    return {photos};
}