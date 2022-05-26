import {useState, useContext} from "react" //need state to show or hide comments , usecontext for user contextr and firebase context to add comments to firebase etc
import PropTypes from "prop-types"
import FirebaseContext from '../../context/firebase'
import UserContext from '../../context/user'
import {doc, updateDoc} from "firebase/firestore";
import { arrayUnion, arrayRemove} from "firebase/firestore";

export default function Action(props) {
    const user = useContext(UserContext);
    const userId = user.uid;
    console.log('userId eh bud ', userId);
    //need to add likes props
    const [toggleLiked, setToogledLiked] = useState(props.likedPhoto);
    const [likes, setLikes] = useState(props.totalLengthOfLikes);
    const {firebase} = useContext(FirebaseContext);
    // function renderLikes() {
    //     if (likes > 0) {
    //         return <p className="text-small content-center"> {likes} likes</p>
    //     } else {
    //         return null;
    //     }

    // }
    const handleToggleLiked = async() => {
        setToogledLiked((toggleLiked) => !toggleLiked);
        // const docRef = doc(firebase, 'USERS', `${docId}`); //this line causing a problem
        // following.push(profileId);
        // // console.log('follwing updated', following)
        // await updateDoc(docRef, {
        //     following: following
        // });

        console.log('props doc id eh bud', props.docId);
        const docRef = doc(firebase, 'photos', `${props.docId}`);
        await updateDoc(docRef, {
            likes:toggleLiked ? arrayRemove(userId) : arrayUnion(userId)
        });

        
        setLikes((likes) => 
            toggleLiked ? likes + 1: likes - 1

        );
    };

    return (
        <>
        <div className="flex justify-between p-4">
            <div className="flex">
                <svg
                    onClick={handleToggleLiked}
                    onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleToggleLiked();
                }
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                tabIndex={0}
                className={`w-8 mr-4 select-none cursor-pointer focus:outline-none ${
                toggleLiked ? 'fill-red-primary' : 'text-black-light'
                }`}
             >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
                    </svg>



           </div>






    </div>
        
        
        
        
        
        </>




    );

}