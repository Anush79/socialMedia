import { useAuth, usePost, useUser } from "../";
import { useNavigate } from "react-router-dom";
export default function TweetCard({ item }) {
  const {
    getPostByIdFunction,
    likePostHandlerfunction,
    dislikePostHandlerfunction,
    
  } = usePost();
const {bookMarKPostFunction} = useUser()
  const { token, currentUser } = useAuth();
  const navigate = useNavigate();
  const {
    _id,
    content,
    mediaURL,
    mediaAlt,
    createdAt,
    likes: { likeCount, likedBy, dislikedBy },
    username,
    comments,
  } = item;
 

  const isLikedByUser = likedBy.find((item) => {
    return item.username === currentUser.username});
  
  return (
    <div key={_id} className="tweetCard">
      <div
        onClick={(e) => {
          e.stopPropagation();
          getPostByIdFunction(_id);
          navigate(`/home/post/${_id}`);
        }}
        className="heading"
      >
        <h3>{username}</h3>
        <p>{createdAt}</p>
        <img src={mediaURL} alt={mediaAlt} width="300px" />
        <p>{content}</p>
        <p>likes:{likeCount}</p>
        {isLikedByUser ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              dislikePostHandlerfunction(_id, token);
            }}
          >
            Dislike
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              likePostHandlerfunction(_id, token);
            }}
          >
            Like
          </button>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          share
        </button>
        <button onClick={(e)=>{    e.stopPropagation();bookMarKPostFunction(_id, token)}}>BookMark</button>
        {<div className="comments">{}</div>}
      </div>
    </div>
  );
}
