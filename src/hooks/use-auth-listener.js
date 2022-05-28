//custom hook 
import {useState , useEffect, useContext} from "react";
import FirebaseContext from '../context/firebase'
import {getAuth,updateProfile } from "firebase/auth"


export default function useAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const {firebase} = useContext(FirebaseContext);
    const auth = getAuth();
    useEffect(()=> { //runs after every render , we pass in a callback that is triggered on change 
        const listener = auth.onAuthStateChanged((authUser) => {
          //if we have a user, we can store the user in local storage 
          if (authUser) {
              localStorage.setItem('authUser', JSON.stringify(authUser)); //converts a javascript object into a JSON string 
              setUser(authUser);

              updateProfile(auth.currentUser, {
                    displayName: "Alex_Kang"
              } ).then(()=> {
                  console.log('success!')
              }).catch(()=> {
                console.log('error');
              })
              
            
          } else {
              //clean local storage 
              localStorage.removeItem('authUser');
              setUser(null);
          }  
        })


        //below we want to clean up 
        return() => listener();
    }, [firebase]);




    return {user};
}