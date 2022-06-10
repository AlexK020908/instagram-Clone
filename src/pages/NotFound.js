import { useEffect } from "react"
import Header from '../components/header'

export default function NotFound() {
    useEffect(()=> {
        document.title = 'Page Not Found';
    }, []);
    return (
        
        <div style={{
            position: "absolute",
            width: "100%",
            height: "100%",
      

        }}>
            <Header/>
            <div style = {{
                display: "flex",
                justifyContent: "center"
            }}> 
                <p> Not Found!</p>
            </div>

        </div>

    );



}