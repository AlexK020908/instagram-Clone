import {useState, useContext} from 'react';
import { formatDistance } from 'date-fns';
import { Link } from 'react-router-dom';

export default function Comments(props) {
    const [comment, setComment] = useState(props.comments);
    let toggleShowComments = false;

    function showAllComments() {
        toggleShowComments = true;


    }
    return (
        <>
            <div> 
                {props.comments.length >= 2 && (
                    <p className = 'text-sm text-gray-700 mb-1 cursor-pointer' onClick={toggleShowComments}> 
                          view all {props.comments.length} comments
                          
                    </p>
                )}
                {toggleShowComments && (
                   props.comments.map((item)=> {
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



                })
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



                })}
            </div>
        
        
        
        
        </>




    )







}