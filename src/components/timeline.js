import Skeleton  from "react-loading-skeleton";
import UsePhotos from "../hooks/use-Photos";
import Post from './post'
import "react-loading-skeleton/dist/skeleton.css";
export default function Timeline() {

    //first need to get logged in user's photos from fire base --> TODO: need to add photos to fire base   (by using a hook)

    const { photos  }  = UsePhotos();
    console.log('photos', photos);

    //on loading photos, use react sksletong 
    //render photos if they exist (need a post componenet )
    //if user has no photo, ask them to create some photos 
    return (
        <div className="container col-span-2 col-start-1 col-end-3">
            {!photos ? (
                <>
                 <Skeleton height={640} count={4} width={500} className="mb-5"/>
                
                </>
            ) : photos?.length > 0 ? (
                photos.map((doc)=> 
                    <Post className="content-center" key={doc.docId} content = {doc}/>
                )
            ):  (
                <p className="text-center text-2xl">Follow people to view posts</p>
            )}

        </div>
    );



}