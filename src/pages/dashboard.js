import { useEffect } from "react";
import Header from '../components/header'
import Sidebar from "../components/sidebar"
import Timeline from "../components/timeline";
import '../styles/app.css';
import { Navigate } from "react-router-dom";
import * as ROUTES from '../constants/routes'


export default function Dashboard(props) {
    useEffect(()=> {
        document.title = 'Instagram'
    }, []);

    if (!props.user) {
        return (
        <Navigate to={ROUTES.LOGIN} replace/>
        );
    }
    else return (
        <div className="bg-gray-background">
            <Header/>
            <div className="grid flex grid-cols-4 gap-4 justify-between mx-auto max-w-screen-lg"> 
                <Timeline/>
                <Sidebar/>
            </div>

        </div>
    )

}