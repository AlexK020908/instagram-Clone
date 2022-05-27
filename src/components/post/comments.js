import {useState, useContext} from 'react';
import { formatDistance } from 'date-fns';
import { Link } from 'react-router-dom';
import AddComment from './addComment';

export default function Comments(props) {
    const [comments, setComment] = useState(props.comments);

    return (
        <>
            <div> 
                {props.comments.length >= 2 && (
                    <p className = 'text-sm text-gray-700 mb-1 cursor-pointer' > 
                          view all {props.comments.length} comments
                          
                    </p>
                )}
      
                {props.comments.slice(0,1).map((item)=> {
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
                setComment = {setComment}
                commentInput = {props.commentInput}  
            
            />
        
        </>




    )







}