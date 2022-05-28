import {Suspense} from 'react'; //allow us to split stuff apart from bundles. code split....
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import * as React from 'react'
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/use-auth-listener';
import UserContext from './context/user'; //we created this context in the context folder very easily, it is just a random context class with a value assigned to the context 

//we want 
const Login = React.lazy(()=>import ('./pages/login'));
const Signup = React.lazy(()=>import('./pages/signup'));
const NotFound = React.lazy(()=>import('./pages/NotFound'));
const Dashboard = React.lazy(()=> import('./pages/dashboard'));
 function App() {
  const {user} = useAuthListener();
//to use the protected route we have to 
  // we just need to wrap routes that wiull be protected --> ex dashboard , and the wrapped contents are called childern 
  return (
    //here we provide a value to the context user so it can used in the tree is wraps around 
  <UserContext.Provider value = {user}>

  <Router> 
    <Suspense fallback={<p>loading...</p>}>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login user ={user}/>}/>
        <Route path = {ROUTES.SIGNUP} element ={<Signup user = {user}/>}/>
        <Route path = {ROUTES.DASHBOARD} element = {<Dashboard user={user}/>}/>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
      
            
    </Suspense>

  </Router>
  </UserContext.Provider>
  
    );
  }

export default App;

//when we want a context to be use in a tree, we can wrap the provider around the tree like we did above