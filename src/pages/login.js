
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from 'react';
import FirebaseContext from '../context/firebase';
import {Link} from "react-router-dom"
import * as ROUTES from '../constants/routes';
import { getAuth, signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { getUserById } from "../services/firebase";

export default function Login() {
    const history = useNavigate();
    const {firebase} = useContext(FirebaseContext); //now subscribes to the nearest firebase provider

    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(''); //if emial address is invalid 
    const isInvalid = password === '' || Email ==='';

    //we are also gonna direct users to the succes page after the login is succesulf 
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth();

            await signInWithEmailAndPassword(auth ,Email,password);
            //if everything ok
          
            history(ROUTES.DASHBOARD);
        } catch(error) {
            setEmail("");
            setPassword("");
            setError("invalid email or password, please sign up or recheck your information");
        }
    }
 
    //note: this is ran after render 
    useEffect(()=> {
        document.title = "login - Instagram";

    }, []);
    //need email address and password 
    return (
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


                <form onSubmit={handleLogin} method="POST" style={{margin: "20px"}}>
                    <input 
                        aria-label="Enter your Email address"
                        type="text"
                        placeholder="Email address"
                        style={{
                            "width": "100%",
                            "color": "gray",
                            "fontSize": "0.875rem",
                            "lineHeight": "2rem",
                            
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
                    style={{marginTop: "10px", marginBottom:"20px", backgroundColor: "#3B82F6", "color": "white", "width":"100%", "border":"2 px solid black","height": "30px", "fontWeight" : "bold" , opacity: isInvalid ? '0.5' :'1'}}> Log in </button>
            
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
            
            Don't have an account?&nbsp; <Link to="/signup" style={{
                fontWeight: "bold",
                color: "#3B82F6",

                
            }}> sign up </Link>
            
            
            </p>
            </div>
            </div>
        </div>
    
    
    
        )
}


//NOTE USE CONTEXT subscribes to the vlaue of the neareset provider of context
//the component that uses this context will always re render when the value of the context changes 