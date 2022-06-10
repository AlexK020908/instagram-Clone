import './wdyr'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FireBaseContext from './context/firebase';  //since we want to use the context created in firebase.js
import { firebase, FieldValue } from './lib/firebase';
import './styles/app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<FireBaseContext.Provider value={{firebase, FieldValue}}>  
  <App />
</FireBaseContext.Provider>);
//we wrap the app with firebase so the entire app can use the firebase context, like profile dashboard etc 
//we surrounded app component with firebaseContext
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//client side rendered app: react(create react app)
    //-> database is firebase 
    //-> reac-loading-skeleton 
    // tailwind as styling 

//folder struct
  //src
    //-> components, constants, context, helpers, lib(firebase in here), services, styles(tailwind's folder, (app/tailwind))

