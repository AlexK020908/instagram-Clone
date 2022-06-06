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
                    <div className='absolute bg-gray-200 bottom-0 left-0 z-10 justify-evenly w-full h-full items-center bg-black-faded group-hover:flex hidden'>
                        <p className='flex items-center text-white font-bold'>
                        <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-8 mr-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {photo.likes.length}
                  </p>

                  <p className="flex items-center text-white font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-8 mr-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {photo.comments.length}
                        </p>
                    </div>
                </div>
                    )
            ): null
            
            
            
            
            }


            <div className='col-start-2'>
              {!props.photos || (props.photos.length === 0 && <p className='text-center text-2xl'>
                No Post Yet
                </p>)}
               
            </div>
    
        </div>


    </div>

    )
}


Photos.propTypes={
    photos: PropTypes.array.isRequired
}