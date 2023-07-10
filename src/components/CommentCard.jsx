
import {useAuth, usePost, useUser} from '../'
import { useNavigate } from "react-router-dom"
import '../styles/comment.css'
import {formatDateAgo} from '../utils/utilityFunctions'
import UsersCard from "./UsersCard"
import { DeleteForever } from '@mui/icons-material'
export default function CommentCard({item}){
const {
text,
updatedAt,
username,
_id,
} = item
const {
  followUserFunction,
  isAlreadyFollowing,
  unFollowUserFunction,
  getUserByIdFunction,
} = useUser();
const {currentUser} = useAuth()

const { getAllUserPostsHandlerFunction,deleteCommentFunction } = usePost();
const check = isAlreadyFollowing(item._id);
const navigate = useNavigate();

const openUserProfile = (item) => {
  getUserByIdFunction(item._id);
  getAllUserPostsHandlerFunction(item.username);
  navigate(`/home/profile/${item.username}/${item._id}`);
};

const {getUserByUsername}= useUser()
const commentWriter = getUserByUsername(username)
  return <div key={_id} className="commentContainer">
     <div
        key={commentWriter._id}
        onClick={() => {
          openUserProfile(commentWriter);
        }}
        className="commenterProfile"
      >
        <div className="left">
           <p className="userPP clickableIcon">
        
            <img
              src={
                commentWriter?.profileAvatar?.trim().length < 1
                  ? `https://ui-avatars.com/api/?name=${commentWriter.firstName}+${commentWriter.lastName}`
                  : commentWriter?.profileAvatar
              }
              alt="avatar"
            />
         
        </p>
        <div className="nameofCommenter">
          <span className="clickableIcon">
            {commentWriter.firstName} {commentWriter.lastName}
           </span>
          
        
            <small className="smallUserName">@{commentWriter.username}</small>
          
        </div>
        </div>
       
       <div className="right">
        {
           currentUser.username === username && <DeleteForever onClick ={deleteCommentFunction}/> 
        }
       </div>
      </div>
    <p className="commentPart">
 <span className="timeOfPost">{formatDateAgo(updatedAt)}...</span>
    <span className="commentText">
      {text}
    </span>
    </p>
   
  </div>
}