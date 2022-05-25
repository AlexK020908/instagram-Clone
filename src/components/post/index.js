import { userRef } from "react";
import PropTypes from 'prop-types'
import Header from './header'
import Pic from './picture'

//we have mapped posts in the timeline componenet --> so we just need to create one whole post componenet here 
export default function Post(props) {
    //need header with user name and icon
    //image
    //actions --> likes --> comments
    //col-span-4 means that this componenet takes up 4 columns 
    //margin bottom gives the margin between components on the bottom. 
    //also notice that border gray primary gives a very nice gray color
    console.log("post props username", props.content.username);
    return (
        <div className="rounded col-span-2 border bg-white border-gray-primary mb-16"> 
                    <Header username={props.content.username}/>
                    <Pic src = {props.content.imageSrc}/>
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