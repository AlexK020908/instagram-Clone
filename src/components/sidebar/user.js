import {Link} from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import PropTypes from 'prop-types'
import {memo} from 'react'
//memo cant wrap function (export defualt function), you have to do it diffirent 


const User = (props) => 

//here we can use props that is passed in
 (!props.username || !props.fullName) ? ( //without the curly braces, we have an implicit return which is what we want !
     <Skeleton count = {1} height={100}/>
     
 ) :(
    <Link to={`/p/${props.username}`} className="grid grid-cols-4 mb-6 items-center">
        <div className="flex items-center justify-between col-span-1">     
            <img className='rounded-full w-16   2 flex mr-3'
                     src={`/images/avatars/${props.username}.png`}
                     alt=""
            />

             <div className='col-span-3'>
                 <p className='font-bold text-sm'> {props.username}</p>
                 <p className='text-sm'> {props.fullName}</p>
            </div>
        </div>
    </Link>
 );

//we can just wrap memo on user below to use memo
//we use memo when a component re-renders often or if the component is really large 

export default memo(User);
User.whyDidYouRender = true;

User.propTypes = { //here we can requires values so if it is not included it lets us know 
    username: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired
};


