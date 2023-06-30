import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/postCard.css';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import { useAuth, usePost, useUser } from "../";
import Modal from "../utils/Modal";
import { copyLinkToShare, formatDateAgo } from "../utils/utilityFunctions";
import TweetForm from "./NewTweetHandler";
export default function TweetCard({ item, onPostDetails }) {
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
    getUserByIdFunction,
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
  const isBookMarked = isAlreadyBookMarked(item);
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
        <p>{formatDateAgo(createdAt)}</p>
        <img src={mediaURL} alt={mediaAlt} width="300px" />
        <p>{content}</p>
        <p>likes:{likeCount}</p>
        {isLikedByUser ? (
          <span
            onClick={(e) => {
              e.stopPropagation();
              dislikePostHandlerfunction(_id, token);
            }}
          >
            <FavoriteBorderOutlinedIcon />
          </span>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              likePostHandlerfunction(_id, token);
            }}
          >
            {/* <FavoriteBorderOutlined /> */}
          </button>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            copyLinkToShare(`https://tweetopiaa.netlify.app/home/post/${_id}`);
          }}
        >
          <ShareRoundedIcon />
        </button>
        {isBookMarked ? (
          <button
            onClick={(e) => {
              removeFromBookmarkFunction(_id);
              getUserByIdFunction(currentUser._id);
              e.stopPropagation();
            }}
          >
            <ClassOutlinedIcon />
          </button>
        ) : (
          <button
            onClick={(e) => {
              bookMarKPostFunction(_id);
              getUserByIdFunction(currentUser._id);

              e.stopPropagation();
            }}
          >
            <ClassRoundedIcon />
          </button>
        )}
        {username === currentUser.username && (
          <button
            onClick={(e) => {
              e.stopPropagation();

              deletePostFunction(_id, token);
              if (isBookMarked) {
                removeFromBookmarkFunction(_id);
                getUserByIdFunction(currentUser._id);
              }

              if (onPostDetails) navigate("/home");
            }}
          >
            {" "}
            Delete this post
          </button>
        )}
        {username === currentUser.username && (
          <Modal
            status={modalOpen}
            setCloseModal={setModalOpen}
            modalText="Edit Post"
          >
            <TweetForm
              setModalOpen={setModalOpen}
              status={modalOpen}
              submitHandlerF={editPostFunction}
              postToEdit={item}
            />
          </Modal>
        )}
        {<div className="comments">{ }</div>}
      </div>
    </div>
  );
}
