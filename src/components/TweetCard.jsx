import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/postCard.css";

import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import ClassRoundedIcon from "@mui/icons-material/ClassRounded";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useAuth, usePost, useUser } from "../";
import Modal from "../utils/Modal";
import { copyLinkToShare, formatDateAgo } from "../utils/utilityFunctions";
import TweetForm from "./NewTweetHandler";

export default function TweetCard({ item, onPostDetails }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openComment, setCommentOpen] = useState(false);
  const [comment, setComment] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const {
    getPostByIdFunction,
    likePostHandlerfunction,
    dislikePostHandlerfunction,
    deletePostFunction,
    editPostFunction,
    getAllUserPostsHandlerFunction,
    addCommentFunction,
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
  const location = useLocation();

  function goBack() {
    if (location?.state?.from?.pathname)
      navigate(location?.state?.from?.pathname);
    else navigate("/home/feed", { replace: true });
  }
  const {
    _id,
    content,
    mediaURL,
    mediaAlt,
    createdAt,
    likes: { likeCount, likedBy },
    username,
  } = item;
  const openUserProfile = (item) => {
    getUserByIdFunction(item._id);
    getAllUserPostsHandlerFunction(item.username);
    navigate(`/home/profile/${item.username}/${item._id}`, {
      state: { from: location },
    });
  };
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
        <div className="cardTop clickableIcon">
          <h3
            className="clickableIcon"
            onClick={(e) => {
              e.stopPropagation();
              openUserProfile(postCreator);
            }}
          >
            {" "}
            <img
              src={postCreator.profileAvatar}
              className="dp"
              alt="Random image"
              loading="lazy"
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
          {username === currentUser.username && (
            <MoreHorizIcon
              aria-describedby={"Current User car Menu item"}
              onClick={handleClick}
            />
          )}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose} className="clickableIcon ">
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  setModalOpen(true);
                }}
                className="clickableIcon cardMenuItem"
                role="button"
                title="Edit this post"
              >
                <EditNoteRoundedIcon /> Edit
              </span>
            </MenuItem>
            <MenuItem onClick={handleClose} className="clickableIcon ">
              {" "}
              <span
                className="clickableIcon cardMenuItem"
                role="button"
                title="Delete this Post"
                onClick={(e) => {
                  e.stopPropagation();

                  deletePostFunction(_id, token);
                  if (isBookMarked) {
                    removeFromBookmarkFunction(_id);
                    getUserByIdFunction(currentUser._id);
                  }

                  if (onPostDetails) goBack();
                }}
              >
                <DeleteForeverRoundedIcon /> Delete
              </span>
            </MenuItem>
          </Menu>
        </div>
        <p className="timeOfPost">{formatDateAgo(createdAt)}...</p>
        {mediaURL?.length > 0 && (
          <img src={mediaURL} alt={mediaAlt} className="postImage" />
        )}
        <p>{content}</p>
        <p className="likesCount">likes:{likeCount}</p>
        <div className="iconsOnPostCard">
          {isLikedByUser ? (
            <span
              title="Dislike"
              role="button"
              className="clickableIcon filledIcon"
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
              title="Like "
              role="button"
              className="clickableIcon "
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
            title="comment"
            role="button"
            onClick={(e) => {
              navigate(`/home/post/${_id}`);
              setCommentOpen(!openComment);
            }}
          >
            <CommentIcon />
          </span>
          <span
            className="clickableIcon"
            role="button"
            title="Share"
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
              className="clickableIcon filledIcon"
              role="button"
              title="Remove from bookmark"
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
              className="clickableIcon "
              role="button"
              title="Add to bookmark"
              onClick={(e) => {
                bookMarKPostFunction(_id);
                getUserByIdFunction(currentUser._id);

                e.stopPropagation();
              }}
            >
              <ClassOutlinedIcon />
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

        {onPostDetails && (
          <div className="NewCommentSection">
            <img
              src={
                currentUser?.profileAvatar?.length < 1
                  ? `https://ui-avatars.com/api/?name=${currentUser.firstName}+${currentUser.lastName}`
                  : currentUser?.profileAvatar
              }
              alt="avatar"
            />
            <input
              type="text"
              placeholder=" write your comment here..."
              name="comment"
              id="comment"
              value={comment}
              onClick={(e) => {
                e.stopPropagation();
              }}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                comment.trim().length > 0
                  ? addCommentFunction(_id, comment)
                  : toast.warn("Please write something");

                  setComment("")
              }}
            >
              Comment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
