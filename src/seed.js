/* eslint-disable no-plusplus */

import { collection, addDoc } from "firebase/firestore"; 

// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export async function seedDatabase(firebase) { //we pass a firebase object when we call, we only want to run it one time, becuase it will cause 
 
    try 
      {
        const docRef = await addDoc(collection(firebase, "USERS"), {
          userId: 'zEdG5AQC7PMpd8eWEx5WpdLVWUn1',
          username: 'Alex_Kang',
          fullName: 'Alex Kang',
          emailAddress: 'alexkang12345@outlook.com',
          following: ['2'],
          followers: ['2', '3', '4'],
          dateCreated: Date.now()
        });
        console.log("ID", docRef.id);
      } catch(e) {
        console.log("error");
      }


       
    try 
    {
      const docRef = await addDoc(collection(firebase, "USERS"), {
        userId: '2',
        username: 'Jason8408',
        fullName: 'Jason Li ',
        emailAddress: 'jasonli8408@gmail.com',
        following: [],
        followers: ['zEdG5AQC7PMpd8eWEx5WpdLVWUn1'],
        dateCreated: Date.now()
      });
      console.log("ID", docRef.id);
    } catch(e) {
      console.log("error");
    }
  

    try 
    {
      const docRef = await addDoc(collection(firebase, "USERS"), {
        userId: '3',
        username: 'rogercsRoll',
        fullName: 'Roger Zeng',
        emailAddress: 'ROGER1123@gmail.com',
        following: [],
        followers: ['NvPY9M9MzFTARQ6M816YAzDJxZ72'],
        dateCreated: Date.now()
      });
      console.log("ID", docRef.id);
    } catch(e) {
      console.log("error");
    }


    try 
    {
      const docRef = await addDoc(collection(firebase, "USERS"), {
        userId: '4',
        username: 'orwell',
        fullName: 'George Orwell',
        emailAddress: 'george@orwell.com',
        following: [],
        followers: ['NvPY9M9MzFTARQ6M816YAzDJxZ72'],
        dateCreated: Date.now()
      });
      console.log("ID", docRef.id);
    } catch(e) {
      console.log("error");
    }


    
}
  
  
export async function seedDatabasePhotos(firebase) {

  try {
    const docRef = await addDoc(collection(firebase, 'photos'),  {
      userId: 'SKhqw5oJgTNJo1JpLPif57Dprt92',
      likes: [], 
      photoId: 4, 
      imageSrc: '/images/users/roger/4.jpg',
      comments: [
        {
          displayName: "Alex_kang_47",
          comment: "This has been my dream skin ever since I started playing cs and I still yet to come in touch with it !"
        },

        {
          displayName: "Jason",
          comment: "I never played cs, but this seems to have changed my mind"


        }

      ],

      userLatitude: '40.7128°',
      userLongitude: '74.0060°',
      dateCreated: Date.now()


    });
    console.log("ID", docRef.id);



  } catch (e) {
    console.log("error");
  }


  
  try {
    const docRef = await addDoc(collection(firebase, 'photos'),  {
      userId: 'SKhqw5oJgTNJo1JpLPif57Dprt92',
      likes: [], 
      photoId: 2, 
      imageSrc: '/images/users/roger/2.jpg',
      comments: [
        {
          displayName: "Alex_kang_47",
          comment: "Been there last summer!"
        },

      ],

      userLatitude: '40.7128°',
      userLongitude: '74.0060°',
      dateCreated: Date.now()


    });
    console.log("ID", docRef.id);



  } catch (e) {
    console.log("error");
  }




  
  try {
    const docRef = await addDoc(collection(firebase, 'photos'),  {
      userId: 'SKhqw5oJgTNJo1JpLPif57Dprt92',
      likes: [], 
      photoId: 3, 
      imageSrc: '/images/users/roger/3.jpg',
      comments: [

        {
          displayName: "Jason",
          comment: "My favorite type of beast "


        }

      ],

      userLatitude: '40.7128°',
      userLongitude: '74.0060°',
      dateCreated: Date.now()


    });
    console.log("ID", docRef.id);



  } catch (e) {
    console.log("error");
  }




  
  try {
    const docRef = await addDoc(collection(firebase, 'photos'),  {
      userId: 'SKhqw5oJgTNJo1JpLPif57Dprt92',
      likes: [], 
      photoId: 1, 
      imageSrc: '/images/users/roger/1.jpg',
      comments: [
        {
          displayName: "Alex_kang_47",
          comment: "This car makes me motivated to grind so I can afford it in the future "
        },

        {
          displayName: "Jason",
          comment: "nice 4k pic! absolutely majestic"


        }

      ],

      userLatitude: '40.7128°',
      userLongitude: '74.0060°',
      dateCreated: Date.now()


    });
    console.log("ID", docRef.id);



  } catch (e) {
    console.log("error");
  }





}