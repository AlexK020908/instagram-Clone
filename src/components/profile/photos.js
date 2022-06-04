//just need to render photos out 
import Skeleton from "react-loading-skeleton";
import PropTypes from  'prop-types'


export default function Photos(props) {

    console.log('required photos in profile photos', props.photos);

    return null;
}


Photos.propTypes={
    photos: PropTypes.array.isRequired
}