import { NavLink ,useNavigate} from 'react-router-dom';
import {useAuth, usePost, useUser} from '../'

export default function Header (){
  const {currentUser}= useAuth()
  const {getAllUserPostsHandlerFunction}=usePost();
  const {getUserByIdFunction}=useUser();

  const navigate =useNavigate()
  const openUserProfile = (item) => {
    getUserByIdFunction(item._id);
    getAllUserPostsHandlerFunction(item.username);
    navigate(`/home/profile/${item.username}/${item._id}`); 
  };
  return <>
  <div className="headSection hideInMobile">
      <h2 className="logo ">Tweetopia</h2>
       {/* <img src={currentUser?.profileAvatar} alt="" width="45px" className='clickableLink ' onClick={openUserProfile} /> */}
  </div>


  </>

}