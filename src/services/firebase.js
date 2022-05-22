
import {firebase, FieldValue} from '../lib/firebase'
import { collection, query, where, getDocs,doc, getDoc} from "firebase/firestore";
import { data } from 'autoprefixer';
import {updateDoc} from 'firebase/firestore'


export async function doesUsernameExist(username) {
    //networkd call to firebase

    if (username !== undefined) {
        const res = query(collection(firebase, "USERS"), where("username", "==", username));
        let i = 0;
        console.log(res);
        const snapshot = await getDocs(res);
         snapshot.forEach(()=> i++);
         console.log(i);
         return i > 0;
    } else 
    return 0;
    

    
}


export async function getUserById(id) { //we are getting user info by using its ID 
    
    const result = query(collection(firebase, "USERS"), where("userId", "==", id));
    const docs = await getDocs(result);
    //docs.forEach((doc)=> console.log("doc data", doc.data())); --> we know that this works , so something is wrong with our map 
    let user = [];
    docs.forEach((doc)=> { //item is a document 
        //for each item we are going to be storing it in data 
        user.push({...doc.data(), docId: doc.id}); //add the data for the doc  in the user variable  (the final result )
    
    });

    console.log('user', user);
    return user;
    

}


export async function getSuggestedProfiles(id, following) {
    

    const allDocs = await getDocs(collection(firebase, 'USERS'));
    let profiles = [];
    allDocs.forEach((doc)=> {
        profiles.push({...doc.data(), DocId:doc.id})});
    
//each profile is a doc

    profiles = profiles.filter((doc) => {
  
       return doc.userId !== id && !following.includes(doc.userId);
    }
    
    );



    return profiles;
    

}

export async function updateProfileFollowing(docId, profileId, following) {
    const docRef = doc(firebase, 'USERS', `${docId}`); //this line causing a problem
    following.push(profileId);
    console.log('follwing updated', following)
    await updateDoc(docRef, {
        following: following
    });

}


export async function updateProfileTargetFollowers(docId, profileId) {

    //update target's followers 
    //first get a ref to the doc with the same doc id 
    console.log('profile id' , profileId);
    const docRef = doc(firebase, "USERS", `${docId}`);
    //then we update the followers tab
    const snapshot = await getDoc(docRef);
    const temp = snapshot.get('followers');
    temp.push(profileId);
    console.log('temp final', temp);
    await updateDoc(docRef, {
        followers: temp
    });


}