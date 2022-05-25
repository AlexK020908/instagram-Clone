import {Link} from 'react-router-dom'

export default function Header(props) {
    console.log('username profile pic' , props.username);
    //border-b gives a bottom border on the div, py controls vertical padding --> top and bottom --> below we wanted some top and bottom paddings between any componenets in the div 
    
    return (
        <div className="flex border-b border-gray-primary h-4 p-4 py-8 items-center">
            <div className="flex items-center">
                <Link to={`/p/${props.username}`} className="flex items-center"/>

                <img src={`/images/avatars/${props.username}.png`} className='rounded-full h-8 w-8 flex mr-3' alt ="Profile">
                    
                </img>
                
            </div> 


            <p className='font-bold text-sm'> {props.username}</p>




        </div>



    )
}