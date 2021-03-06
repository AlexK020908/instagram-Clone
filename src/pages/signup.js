
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from 'react';
import FirebaseContext from '../context/firebase';
import {Link} from "react-router-dom"
import * as ROUTES from '../constants/routes';
import { doesUsernameExist } from "../services/firebase";
import { getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 
import { Navigate } from "react-router-dom";

export default function SignUp(props) {
    const history = useNavigate();
    const {firebase} = useContext(FirebaseContext); //now subscribes to the nearest firebase provider

    const [Username, setUserName] = useState('');
    const [Fullname, setFullName] = useState("");
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(''); //if emial address is invalid 
    const isInvalid = password === '' || Email ==='' || Username === '' || Fullname === '';

    //we are also gonna direct users to the succes page after the SignUp is succesulf 
    const handleSignUp = async (e) => {
        e.preventDefault();
        const usernameExsits = await doesUsernameExist(Username);
        console.log(usernameExsits);
        if (usernameExsits) {
            setError("username already exist");
        } else {
            try {
                const auth = getAuth();
                const createdUser = await createUserWithEmailAndPassword(auth, Email, password);

                //authentication within the firebase 
                    //email & password & username(display name)

                await updateProfile(createdUser.user ,{
                    displayName: Username

                });

                //for the firebase 
                await addDoc(collection(firebase, "USERS"), {
                    userId: createdUser.user.uid,
                    username: Username,
                    fullName: Fullname,
                    emailAddress: Email,
                    follower: [],
                    following: [],
                    dateCreated: Date.now()
                  });

                history(ROUTES.DASHBOARD);
            } catch (error) {
                setUserName('');
                setFullName('');
                setEmail('');
                setPassword('');
                setError(error.message);
            }
        }
    }
 
    //note: this is ran after render 
    useEffect(()=> {
        document.title = "SignUp - Instagram";

    }, []);
    //need email address and password 
    if (props.user) {
        return (
            <Navigate to={ROUTES.DASHBOARD}/>
        )
    }
    else return (
        <div style = {
            {
                "width": "100%",
                "display": "flex",
                "alignItems": "center",
                "maxWidth": "768px",
                "height": "100vh",
                "justifyContent": "center"


            }
        }>
            <img style={{"display": "flex", "width":"60%"}} src="./images/iphone-with-profile.jpg" alt="iphone"/>
            <div style={{"display" : "block", "width" : "40%"}}>
            
               <div style={{backgroundColor: "white"}}>
                <h1 style={{"display":"flex","justifyContent":"center", "width": "100%", "height":"100%"}}>
                    <img src="./images/logo.png" alt="ins" style={{"marginTop":"0.5rem", "width": "50%", "marginBottom": "1rem", margin: "10%"}}/>
                </h1>
                {error && <p style={{"marginBottom": "10px", "fontSize": "0.75rem", "lineHeight":"1rem", "color": "red"}}>{error}</p>}


                <form onSubmit={handleSignUp} method="POST" style={{margin: "20px"}}>
                    <input 
                        aria-label = "Enter your UserName"
                        type="text"
                        placeholder="Enter your UserName"
                        style= {{
                            "width": "100%",
                            "color": "gray",
                            "fontSize": "0.875rem",
                            "lineHeight": "2rem",
                           

                        }}
                        onChange={((e)=> {
                            console.log(e.target.value);
                            setUserName(e.target.value);
                        })}

                    
                    
                    />

                    <input
                        aria-label="Full name"
                        type="text"
                        placeholder="Enter Full name"
                        style= {{
                            "width": "100%",
                            "color": "gray",
                            "fontSize": "0.875rem",
                            "lineHeight": "2rem",
                            marginTop:"10px"

                        }}
                        onChange = {((e)=> {

                            setFullName(e.target.value);
                        })}

            
                    />
                    <input 
                        aria-label="Enter your Email address"
                        type="text"
                        placeholder="Email address"
                        style={{
                            "width": "100%",
                            "color": "gray",
                            "fontSize": "0.875rem",
                            "lineHeight": "2rem",
                            marginTop:"10px"
                            
                        }}
                        onChange={({target})=> {
                            setEmail(target.value);
                        }}
                    
                   />

                   <input aria-label="Enter password" placeholder="Password" type="password"
                                                    style={{
                                                        "width": "100%",
                                                        "color": "gray",
                                                        "fontSize": "0.875rem",
                                                        "lineHeight": "2rem",
                                                        marginTop: "10px"
                                                      
                                                    }}
                                                    onChange={({target})=> {
                                                        setPassword(target.value);
                                                    }}
                   >
                   
                   </input>
                   <div style={{


                        "display": "block",
                        "justifyContent": "space-between"

                   }}> 
                    <button type="submit" disabled ={isInvalid}
                    style={{marginTop: "10px", marginBottom:"20px", backgroundColor: "#3B82F6", "color": "white", "width":"100%", "border":"2 px solid black","height": "30px", "fontWeight" : "bold" , opacity: isInvalid ? '0.5' :'1'}}> Sign up </button>
            
                   </div>
                </form>
              

            </div>
            <div>
                <p style={{
                    width : "100%",
                    color: "black",
                    padding: "5px",
                    marginBottom: "10px",
                    marginTop: "10px",
                    backgroundColor: "white",
                    height: "50px",
                    display: "flex",
                    border: "1px solid white",
                    justifyContent: "center",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem" 
            }}> 
            
            Have an account?&nbsp; <Link to="/Login" style={{
                fontWeight: "bold",
                color: "#3B82F6",

                
            }}> Log in </Link>
            
            
            </p>
            </div>
            </div>
        </div>
    
    
    
        )
}


//NOTE USE CONTEXT subscribes to the vlaue of the neareset provider of context
//the component that uses this context will always re render when the value of the context changes 