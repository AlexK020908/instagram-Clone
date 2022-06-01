
import {firebase, FieldValue} from '../lib/firebase'
import { collection, query, where, getDocs,doc, getDoc, deleteDoc, connectFirestoreEmulator} from "firebase/firestore";
import { data } from 'autoprefixer';
import {updateDoc} from 'firebase/firestore'
import user from '../components/sidebar/user';


export async function doesUsernameExist(username) {
    //networkd call to firebase

    if (username !== undefined) {
        const res = query(collection(firebase, "USERS"), where("username", "==", username));
        let i = 0;
        // console.log(res);
        const snapshot = await getDocs(res);
         snapshot.forEach(()=> i++);
        //  console.log(i);
         return i > 0;
    } else 
    return 0;
    

    
}


export async function getUserByUsername(username) {
    //networkd call to firebase
    const user = [];
    if (username !== undefined) {
        const res = query(collection(firebase, "USERS"), where("username", "==", username));
        // console.log(res);
        const snapshot = await getDocs(res);
    
         snapshot.forEach((doc)=> user.push({...doc.data(), docId: doc.id}));
        //console.log('user before return to profile', user);
        

    }

    return user
    

    
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

    
    
    return user;
    

}


export async function getFollowings(id) {
    const result = query(collection(firebase, "USERS"), where("userId", "==", id));
    const docs = await getDocs(result);
    //docs.forEach((doc)=> console.log("doc data", doc.data())); --> we know that this works , so something is wrong with our map 
    let followings = [];
    docs.forEach((doc)=> { //item is a document 
        //for each item we are going to be storing it in data 
        followings.push(doc.get("following")); //add the data for the doc  in the user variable  (the final result )
    
    });

    
    return followings;
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
    // console.log('follwing updated', following)
    await updateDoc(docRef, {
        following: following
    });

}


export async function updateProfileTargetFollowers(docId, profileId) {

    //update target's followers 
    //first get a ref to the doc with the same doc id 
    // console.log('profile id' , profileId);
    const docRef = doc(firebase, "USERS", `${docId}`);
    //then we update the followers tab
    const snapshot = await getDoc(docRef);
    const temp = snapshot.get('followers');
    temp.push(profileId);
    // console.log('temp final', temp);
    await updateDoc(docRef, {
        followers: temp
    });


}

export async function getPhotos(userId, followings) {

    const snapshotPhotos = query(collection(firebase, "photos"), where("userId", 'in', followings));

    const docs = await getDocs(snapshotPhotos);
  
    const res = [];

    docs.forEach((doc) => {
        res.push({...doc.data(), docId:doc.id});
    });


    //here we are loggin the likes 

    const resWithDetails = await Promise.all(
        res.map(async (photoDoc) => {
            let userLikedPhoto = false;
            if (photoDoc.likes.includes(userId)) userLikedPhoto = true;


            //now add this info to data 
            return {...photoDoc, userLikedPhoto};


        })
    )

    console.log(resWithDetails);
    
    return resWithDetails;



}


export async function getPhotosByUsername(user, username) {
    // console.log('user passed into getphotos', user);
    const id = user.userId;
    // console.log('uid' , user.userId);
    //now you can get the phpotos 
    const result = query(collection(firebase, "photos"), where("userId", "==", id));
    const docSnapShots = await getDocs(result);
    //now we can add to photos arra 
    const photos = [];
    docSnapShots.forEach((doc)=> {
        // console.log('photo data', doc.data());
        // console.log('log doc id', doc.id);
        photos.push({...doc.data() , docId: doc.id});

    });


    return photos;






}

