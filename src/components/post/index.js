import { userRef } from "react";
import PropTypes from 'prop-types'

export default function Post(props) {
    console.log("content", props.content);
    return (
        <div> 




            
        </div>




    )
       



}


Post.propTypes = {
    content: PropTypes.shape({
        username:PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired, 
        photoId: PropTypes.number.isRequired,
        comments: PropTypes.array.isRequired, 
        dateCreated: PropTypes.number.isRequired,
        userId: PropTypes.string.isRequired,
        likes: PropTypes.array.isRequired,
        docId: PropTypes.string.isRequired


    })
}