import {useState, useContext} from 'react';
import { formatDistance } from 'date-fns';
import { Link } from 'react-router-dom';
import AddComment from './addComment';

export default function Comments(props) {
    const [comments, setComments] = useState(props.comments);

    //bug in comments, when adding multiple comments --> it overrides sometimes 
    return (
        <>
            <div> 
      
                {comments.map((item)=> {
                    return (
                        <p key={`${item.comment}-${item.displayName}`} className='mb-1'>
                            <Link to={`/p/${item.displayName}`}>
                                <span className='mr-1 text-sm font-bold'> 
                                    {item.displayName}
                                </span>

                            </Link>

                            <span className='text-sm'> 
                                {item.comment}
                            </span>
                        </p>

                    )
                    //need to add dates later 6:50

                })}
            </div>
            <AddComment
                docId = {props.docId}
                comments = {props.comments}
                setComments = {setComments}
                commentInput = {props.commentInput}  
                username = {props.username}
            
            />
        
        </>




    )







}