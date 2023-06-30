import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/postCard.css";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import ClassRoundedIcon from "@mui/icons-material/ClassRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

import { useAuth, usePost, useUser } from "../";
import Modal from "../utils/Modal";
import { copyLinkToShare, formatDateAgo } from "../utils/utilityFunctions";
import TweetForm from "./NewTweetHandler";
import { SpeakerNotes } from "@mui/icons-material";
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
    getUserByUsername,
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

  const postCreator = getUserByUsername(username);

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
        <h3>
          {" "}
          <img
            src={postCreator.profileAvatar}
            className="dp"
            alt="Random image"
          />
          <span className="nameOfUserInPost">
            <span>
              {" "}
              {postCreator.firstName} {postCreator.lastName}
            </span>
            <span>
              <small>@{postCreator.username}</small>
            </span>
          </span>
        </h3>
        <p className="timeOfPost">{formatDateAgo(createdAt)}...</p>
        {mediaURL?.length > 0 && (
          <img src={mediaURL} alt={mediaAlt} wi className="postImage" />
        )}
        <p>{content}</p>
        <p className="likesCount">likes:{likeCount}</p>
        <div className="iconsOnPostCard">
          {isLikedByUser ? (
            <span
              className="clickableIcon"
              onClick={(e) => {
                e.stopPropagation();
                dislikePostHandlerfunction(_id, token);
              }}
            >
              {" "}
              <FavoriteOutlinedIcon /> 
            </span>
          ) : (
            <span
              className="clickableIcon"
              onClick={(e) => {
                e.stopPropagation();
                likePostHandlerfunction(_id, token);
              }}
            >
              <FavoriteBorderOutlinedIcon />
            </span>
          )}
          <span
            className="clickableIcon"
            onClick={(e) => {
              e.stopPropagation();
              copyLinkToShare(
                `https://tweetopiaa.netlify.app/home/post/${_id}`
              );
            }}
          >
            <ShareRoundedIcon />
          </span>
          {isBookMarked ? (
            <span
              className="clickableIcon"
              onClick={(e) => {
                removeFromBookmarkFunction(_id);
                getUserByIdFunction(currentUser._id);
                e.stopPropagation();
              }}
            >
              <ClassRoundedIcon />
            </span>
          ) : (
            <span
              className="clickableIcon"
              onClick={(e) => {
                bookMarKPostFunction(_id);
                getUserByIdFunction(currentUser._id);

                e.stopPropagation();
              }}
            >
              <ClassOutlinedIcon />
            </span>
          )}
          
          {username === currentUser.username && (
            <span
              onClick={(e) => {
                e.stopPropagation();
                setModalOpen(true);
              }}
              className="clickableIcon"
            >
              <EditNoteRoundedIcon />
            </span>
          )}
          {username === currentUser.username && (
            <span
              className="clickableIcon"
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
              <DeleteForeverRoundedIcon />
            </span>
          )}
          {modalOpen && (
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
        </div>
      </div>
    </div>
  );
}
