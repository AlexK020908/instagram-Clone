
import {useState, useContext} from 'react'
import FireBaseContext from '../../context/firebase'
import UserContext from '../../context/user'
import { arrayUnion, arrayRemove} from "firebase/firestore";
import PropTypes from 'prop-types'


export default function AddComment(props) {
    //need docId comments setComments commentInput 
    const [comment, setComment] = useState('');
    const {firebase} = useContext(FireBaseContext);

    const {
        user 
    } = useContext(UserContext);


    const handleSubmit = (e) => {
        e.preventDefault();


        //return smt here 
        return null;

    }
    return (
        <div className="border-t border-gray-primary">
            <form className='flex justify-between pl-0 pr-5'
            method = 'POST'
            onSubmit={(e) => props.comment.length >= 1  ? handleSubmit(e) : e.preventDefault()}
            />

            <input aria-label='add a comment' placeholder='Enter your comment...'
            autoComplete='off' type="text" className='text-gray-base w-full py-5'>



            </input>

        </div>
    )


}



AddComment.propTypes = {
    docId: PropTypes.string.isRequired, 
    comments: PropTypes.array.isRequired,
    setComment: PropTypes.func.isRequired,
    commentInput: PropTypes.object.isRequired,

}