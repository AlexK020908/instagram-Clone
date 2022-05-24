import Skeleton  from "react-loading-skeleton";
import UsePhotos from "../hooks/use-Photos";
import Post from './post'
export default function Timeline() {

    //first need to get logged in user's photos from fire base --> TODO: need to add photos to fire base   (by using a hook)

    const { photos  }  = UsePhotos();
    console.log('photos', photos);

    //on loading photos, use react sksletong 
    //render photos if they exist (need a post componenet )
    //if user has no photo, ask them to create some photos 
    return (
        <div className="container col-span-3">
            {!photos ? (
                <>
                
                 <Skeleton height={500} count={1} width={400}/>
                
                </>
            ) : photos?.length > 0 ? (
                photos.map((doc)=> 
                    <Post key={doc.docId} content = {doc}/>
                )
            ):  (
                <p className="text-center text-2xl">Follow people to view posts</p>
            )}

        </div>
    );



}