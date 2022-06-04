//note that useauth gets info out of auth, we need the firebase info too 

//this one puuls out info from firebas e
import {useContext, useEffect, useState} from 'react';

import UserContext from '../context/user'

import { getUserById } from '../services/firebase';

export default function useUser() {
    const[activeUser, setActiveUser] = useState({});
    const user = useContext(UserContext); //this gets the context user --> but it does not actually give the document 

    useEffect(()=> {
        async function getUserObjByUserId() {
            //the best way to qeury user from the firestore is to use the userId
            //we need a function that we can call (firebase service) that gets the user data based on ID
            const [response] = await getUserById(user.uid);  //user is the context we pass down to the componenet tree , here we retrive the document from the
            //userid from the user context
            setActiveUser(response);  
        }


        //we do not just want to call this function because user might be null 
        if (user?.uid) {
            getUserObjByUserId(); //which effectively set the active user here
        }
    },[user])

    return {user:activeUser};

}