import { useNavigate } from "react-router-dom";
import {useState} from 'react'

import Modal from "../utils/Modal";
import TweetForm from "./NewTweetHandler";
import { useAuth, usePost, useUser } from "../";
import { copyLinkToShare } from '../utils/utilityFunctions'
export default function TweetCard({ item, inBookmark, onPostDetails }) {
  
  const [modalOpen, setModalOpen] = useState(false);
  const {
    getPostByIdFunction,
    likePostHandlerfunction,
    dislikePostHandlerfunction,
    deletePostFunction,
    editPostFunction,
  } = usePost();
  const {
    bookMarKPostFunction,
    removeFromBookmarkFunction,
    isAlreadyBookMarked,
  } = useUser();
  const { token, currentUser } = useAuth();
  const navigate = useNavigate();
  const {
    _id,
    content,
    mediaURL,
    mediaAlt,
    createdAt,
    likes: { likeCount, likedBy },
    username,

  } = item;

  const isLikedByUser = likedBy.find((item) => {
    return item.username === currentUser.username;
  });
  const isBookMarked = isAlreadyBookMarked(item)
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
            copyLinkToShare(`https://tweetopiaa.netlify.app/home/post/${_id}`)
          }}
        >
          share
        </button>
        {isBookMarked ? (
          <button
            onClick={(e) => {
              removeFromBookmarkFunction(_id, token);

              e.stopPropagation();
            }}
          >
            remove bookmark
          </button>
        ) : (
          <button
            onClick={(e) => {
              bookMarKPostFunction(_id, token);

              e.stopPropagation();
            }}
          >
            BookMark
          </button>
        )}
        {
          (username === currentUser.username) &&
          <button onClick={(e) => {

            e.stopPropagation();

            deletePostFunction(_id, token)
   
       if(onPostDetails) navigate("/home")
          }}> Delete this post</button>
        }
         {
          (username === currentUser.username) &&
         
          <Modal status={modalOpen} setCloseModal={setModalOpen} modalText="Edit Post">
          <TweetForm setModalOpen={setModalOpen} status={modalOpen} submitHandlerF={editPostFunction}postToEdit={item}/>
        </Modal>
        }
        {<div className="comments">{ }</div>}
      </div>
    </div>
  );
}
