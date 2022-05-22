import useUser from '../../hooks/useUser'
import User from './user';
import Suggestions from './suggestions'
import {firebase} from '../../lib/firebase'
import { getUserById } from '../../services/firebase';
export default function Sidebar() {
    const {
      user:  {docId, fullName, username, userId, following}
     } = useUser();

     //iterate through all the docs, the one with the same userId, we get the id!
    //  const [doc] = await getUserById(userId);
    //  const docId = doc.docId;
    // console.log(docId);
     //username and fullname in the User component are props 
     console.log('top of tree docId',docId ) //problem is docId is not defined here otherwise, everythig would work 
return (
    <div>
        
    <User  username ={username} fullName = {fullName}/>
    <Suggestions userId = {userId} following={following} docId = {docId}/>

    </div>
)


}