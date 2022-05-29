import {useParams , Navigate, useSearchParams} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { async } from '@firebase/util';
//use params can make us use the username as a parameter 
export default function Profile() {
    const {username} = useParams (); //use params gives you the URL parameters as key value pairs (user name is the username!)

    const [userExist, setUserExist] = useSearchParams(false);

    //use effect is ran after every side effect on the state

    useEffect(()=> {
        //after the userExist state changes --> we want to run useEffect to check if the user exist
        async function checkUserExists() {
            const doesUserExist = 




        }

        //if exists --> go there , otherwise redirect s



    },[]);





    return <p> profile </p>
}