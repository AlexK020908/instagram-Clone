import { useRef } from "react";
import PropTypes from 'prop-types'
import Header from './header'
import Pic from './picture'
import Action from "./action";
import user from "../sidebar/user";
//we have mapped posts in the timeline componenet --> so we just need to create one whole post componenet here 
export default function Post(props) {
    //need header with user name and icon
    //image
    //actions --> likes --> comments
    //col-span-4 means that this componenet takes up 4 columns 
    //margin bottom gives the margin between components on the bottom. 
    //also notice that border gray primary gives a very nice gray color
    console.log("post props username", props.content.username);

    const CommentInput = useRef(null);
    const handleFocus = ()=> {
        CommentInput.current.focus();
    }
    return (
        <div className="rounded col-span-2 border bg-white border-gray-primary mb-16"> 
                    <Header username={props.content.username}/>
                    <Pic src = {props.content.imageSrc}/>
                    <Action docId={props.content.docId} userId = {props.content.userId} comments = {props.content.comments} likes = {props.content.likes} 
                    totalLengthOfLikes = {props.content.likes.length} likedPhoto = {props.content.userLikedPhoto} handlefocus = {handleFocus} caption = {props.content.caption}
                    username = {props.content.username} commentInput={CommentInput}/>
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
        docId: PropTypes.string.isRequired,
        userLikedPhoto:PropTypes.bool.isRequired,
        caption: PropTypes.string.isRequired


    })
}