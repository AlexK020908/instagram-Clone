import {createContext} from 'react'; 

//context is used when some data needs to be accesidble by many components at different nesting levels 
const FireBaseContext = createContext(null); //here you get a lot of functions from firebase where u can insert new data
export default FireBaseContext; //export it so others can import it !

