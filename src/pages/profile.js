import {useParams , useNavigate, useSearchParams} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { async } from '@firebase/util';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from "../constants/routes"
import Header from '../components/header'
import UserProfile from '../components/profile'
//use params can make us use the username as a parameter 
export default function Profile() {
    const {username} = useParams (); //use params gives you the URL parameters as key value pairs (user name is the username!)

    const [userExist, setUserExist] = useSearchParams(false);
    const nav = useNavigate();
    //use effect is ran after every side effect on the state
    const [user, setUser] = useState(null);
    useEffect(()=> {
        //after the userExist state changes --> we want to run useEffect to check if the user exist
        async function checkUserExists() {

        
        const [userreturned] = await getUserByUsername(username);
        
        if (userreturned) {
            setUser(userreturned);
            console.log('user in useEfect', user)
            setUserExist(true);
        } else 

            nav(ROUTES.NOTFOUND);

            
        }


        checkUserExists();


        //if you have user in the dependency --> will render infinitely 
        //dependcy array tells us to only trigger an event when any of the following changes 
    },[username, nav]);

    console.log('user after useEffect', user);



    return ( userExist ? (
        
        <div className='bg-gray-background'>
            <Header />
            <div className='mx-auto max-w-screen-lg'>
               {username}
               


            </div>



        </div>





        ): null
    )
}