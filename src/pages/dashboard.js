import { useEffect } from "react";
import Header from '../components/header'
import Sidebar from "../components/sidebar"
import Timeline from "../components/timeline";
import '../styles/app.css';



export default function Dashboard() {
    useEffect(()=> {
        document.title = 'Instagram'
    }, []);


    return (
        <div className="bg-gray-background">
            <Header/>
            <div className="grid flex grid-cols-4 gap-4 justify-between mx-auto max-w-screen-lg"> 
                <Timeline/>
                <Sidebar/>
            </div>

        </div>
    )

}