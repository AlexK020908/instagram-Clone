import {useState, useEffect} from "react"
import PropTypes from 'prop-types';
import {getSuggestedProfiles} from '../../services/firebase'
import Skeleton from "react-loading-skeleton";
import SuggestedProfile from '../suggestedProfile'

export default function Suggestions(props) {
    //we need to filter the profiles that will be stored in there 
    const [profiles, setProfiles] = useState(null);

    //we have the ID so we can get user with ID's suggested profiles, when the state changes. the page re-renders and the useEffect runs 
    useEffect(()  => {
        async function getUserSuggestedProfiles() {

            //now we get the suggested profiles 
            const response = await getSuggestedProfiles(props.userId, props.following);
            setProfiles(response);
        }

        //we call that function here
        getUserSuggestedProfiles();


    },[props.userId]); 

    console.log('profiles', profiles);

    return !profiles ? <Skeleton count={1} height={100} className="mt-5"/>
    : profiles.length > 0 ? (
        <div className="rounded flex flex-col">
            <div> 
                <p className="font-bold text-gray text-sm"> Suggestions </p>
            </div>


            <div className="mt-4 grid gap-5"> 
               {profiles.map((profile) => 
                (
                    <SuggestedProfile
                         username = {profile.username}
                         profileid = {profile.userId}
                         userid = {props.userId}
                         key = {profile.docId}
                         docId = {profile.DocId}
                         userDocId = {props.docId}
                         following = {props.following}
                    />
        
               ))}


            </div>
        </div>
    ) : null



    
}


Suggestions.prototype = {
    userId: PropTypes.string.isRequired
}