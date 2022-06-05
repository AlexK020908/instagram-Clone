//just need to render photos out 
import Skeleton from 'react-loading-skeleton'
import PropTypes from  'prop-types'
import "react-loading-skeleton/dist/skeleton.css";


export default function Photos(props) {
    return (
    
    
    <div className="h-16 border-t border-gray-primary mt-12 p-4">
        <div className=" grid grid-cols-3 gap-8 mt-4 mb-12">
            {!props.photos ? (
                <>
                    <Skeleton count={12} width={300} height={400} className="col-span-1"/>
                
                </>
            ) : props.photos.length > 0 ? (
                props.photos.map((photo)=>  
                <div key ={photo.docId} className='relative group'>
                <img src={photo.imageSrc} alt={photo.caption} style={{
                        width: "100%",
                        height:'250px'
                    }}></img>
                    
                    
                </div>
                    )
            ): null}
    
        </div>


    </div>

    )
}


Photos.propTypes={
    photos: PropTypes.array.isRequired
}