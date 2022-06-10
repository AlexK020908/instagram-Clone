/* eslint-disable react/jsx-no-comment-textnodes */
import { useContext } from "react";
import FireBaseContext from "../context/firebase"; //we need firebase context because it gives us the functions, we want to be able to sign out using firebase 
import * as ROUTE from '../constants/routes';
import {Link, Routes} from 'react-router-dom';
import '../styles/app.css';
import { getAuth } from "firebase/auth";
import useUser from '../hooks/useUser'

export default function Header() {
    const {user} = useUser();
    const auth = getAuth();
    



    return (
        //first we want to use the firebase context so we can use its functions 

       <header className="h-16 bg-white border-b mb-8">  
           <div className="container mx-auto max-w-scree-lg h-full">
              <div className="flex justify-between h-full"> 
                <div className="text-gray-700 text-center flex items-center allign-items cursor-pointer">
                    <div style={{color:"#374151", display: "flex", textAlign:"center", alignItems:"center"}}>
                        <h1 style={{display: "flex", justifyContent: "center", width:"100%"}}>
                            <Link to = {ROUTE.DASHBOARD}>
                                <img src= "/images/logo.png"  alt="Instagram" style={{marginTop:"0.5rem", width:"50%"}}/>

                            </Link>


                        </h1>
                    </div>




                </div>
                <div className="text-gray-700 text-center flex items-center align-items"> 
                    {user? (

                        <>
                        
                        <Link to = {ROUTE.DASHBOARD} artia-label = "Dashboard">
                        <svg
                            className="w-8 mr-6 text-black-light cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        > 
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>

                        </Link>


                        <button title="sign out"
                                onClick={()=> auth.signOut()}
                                onKeyDown={(e)=> {
                                    if (e.key === "Enter") {
                                        auth.signOut();
                                    }
                                }}
                        
                        
                        > 
                         <svg
                            className="w-8 mr-6 text-black-light cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                           
                            />
                           
                        </svg>
                        
                        </button>
        
                        <div className = "flex items-ceter cursor-pointer">
                            <Link to={`/p/${user.username}`}>
                                <img className="rounded-full h-8 w-8 flex"
                                src = {`/images/avatars/${user.username}.png`}
                                alt = "profile"/>



                            </Link>


                        </div>
                        
                        </>
                    ) : (
                        <>


                        <Link to={ROUTE.LOGIN}>
                            <button
                            className="font-bold bg-blue-700 text-white mx-5 w-20 h-8 rounded"> Log In</button>
                        </Link>
                        <Link to={ROUTE.SIGNUP}>
                            <button
                            className = "font-bold rounded mx-5  "> Sign up </button>
                        </Link>
                        
                        
                        
                        </>

                    )
                    
                
                
                
                }
                    


                </div>


              </div>
            </div>


       </header>

    );
}
