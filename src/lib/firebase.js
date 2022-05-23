import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// import seed file 
// import {seedDatabasePhotos} from '../seed';
import { getFirestore } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBZfDrQplGKuTHmzNjxftBjnf3BEdW0j4A",
    authDomain: "instagram-8ee02.firebaseapp.com",
    projectId: "instagram-8ee02",
    storageBucket: "instagram-8ee02.appspot.com",
    messagingSenderId: "1024925559200",
    appId: "1:1024925559200:web:fae3ad4667b9605e495cc5"
};



const app = initializeApp(config);

const firebase = getFirestore(app);

const FieldValue = firebase.firestore;

//call the seed file 
//seedDatabasePhotos(firebase); //initally passed in firebase

export { firebase, FieldValue };
