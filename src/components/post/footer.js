import PropTypes from 'prop-types'


export default function Footer(props) {

    return (
        <div>
            <span className='mr-1 mb-1 text-sm font-bold'> 
                {props.username}
            </span>
            <span className = "text-sm">
                {props.caption} 

            </span>
        </div>


    )




}