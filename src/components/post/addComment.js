
import {useState, useContext} from 'react'
import FireBaseContext from '../../context/firebase'
import UserContext from '../../context/user'
import { arrayUnion, arrayRemove, updateDoc} from "firebase/firestore";
import PropTypes from 'prop-types'
import { collection, query, where, getDocs,doc, getDoc} from "firebase/firestore";



export default function AddComment(props) {
    //need docId comments setComments commentInput 
    const [comment, setComment] = useState('');
    const {firebase} = useContext(FireBaseContext);
    

    const user = useContext(UserContext);
    const name = user.displayName;

    const handleSubmit = async (e) => {
        console.log('currrent comments', props.comments);
        e.preventDefault();
        //already set comment here 
        props.setComments([...props.comments, {comment, name}]);
        //then here make a call to firebase and update that field

        const docRef = doc(firebase, 'photos', `${props.docId}`);
        await updateDoc(docRef, {
            comments: arrayUnion({comment, name}),
        })
    

        setComment('');
        //store in fire base using field value !
       

    }
    return (
        <div className="flex border-t border-gray-primary">
            <form className='flex justify-between pl-0 pr-5'
            method = 'POST'
            onSubmit={(e) => props.comment.length >= 1  ? handleSubmit(e) : e.preventDefault()}
            />

            <input aria-label='add a comment' placeholder='Enter your comment...'
            autoComplete='off' type="text" className='text-gray-base w-full py-5'
            ref = {props.commentInput} onChange={({target})=> setComment(target.value)}>
                


            </input>
            <button className='text-sm font-bold text-blue-700 cursor-pointer' disabled= {!comment ? true : false}
            style={{
                opacity: !comment ? '0.5' :'1'
            }}
            onClick={handleSubmit}> 

                post
            </button>

        </div>
    )


}



AddComment.propTypes = {
    docId: PropTypes.string.isRequired, 
    comments: PropTypes.array.isRequired,
    setComment: PropTypes.func.isRequired,
    commentInput: PropTypes.object.isRequired,

}