import { useState } from "react";
import Popover from "@mui/material/Popover";
import { v4 as uuid } from "uuid";
import EmojiPicker from "emoji-picker-react";

import { useAuth, usePost } from "../";
import { formatDate } from "../backend/utils/authUtils";
import { EmojiEmotions, EmojiEmotionsOutlined } from "@mui/icons-material";

export default function TweetForm({
  setModalOpen,
  status,
  submitHandlerF,
  postToEdit,
}) {
  const [openEmoji, setOpenEmoji] = useState(false);
  const handleCloseEmoji = () => {
    setOpenEmoji(null);
  };

  const { currentUser } = useAuth();
  const { createPostFunction } = usePost();

  const postTime = new Date();

  const [newPost, setNewPost] = useState(
    postToEdit ?? {
      content: "",
      mediaURL: "",
      likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },
      comments: [],
      username: currentUser.username,
      createdAt: postTime,
      updatedAt: formatDate(),
    }
  );
  function onClickEmoji(e) {
    const { emoji } = e;
    setNewPost((prev) => ({
      ...prev,
      _id: prev._id ?? uuid(),
      content: prev?.content + emoji,
    }));
  }

  const handleImageUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageSrc = e.target.result;
      setNewPost((prevData) => ({
        ...prevData,
        mediaURL: imageSrc,
      }));
      localStorage.setItem("selectedImage", imageSrc);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const postsubmitHandler = (e) => {
    e.preventDefault();
    if (submitHandlerF) {
      submitHandlerF(newPost._id, newPost);
    } else {
      createPostFunction(newPost);
    }

    setModalOpen(!status);
  };
  const handleInput = (e) => {
    const { value } = e.target;
    setNewPost((prev) => ({
      ...prev,
      _id: prev._id ?? uuid(),
      content: value,
    }));
  };

  return (
    <form onSubmit={postsubmitHandler}>
      <textarea
        onChange={(e) => {
          handleInput(e);
        }}
        className="tweetArea"
        placeholder="What's New"
        rows={10}
        value={newPost.content}
      ></textarea>
      <span
        className="clickableIcon"
        onClick={() => {
          setOpenEmoji(!openEmoji);
        }}
      >
        <small> 😊 Pick Emoji</small>
      </span>
      <Popover
        id={"Popover for emoji icons"}
        open={openEmoji}
        anchorEl={openEmoji}
        onClose={handleCloseEmoji}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <EmojiPicker onEmojiClick={onClickEmoji}></EmojiPicker>
      </Popover>

      <input
        type="file"
        accept="image/*"
        id="contentImage"
        name="selectedImage"
        onChange={handleImageUpload}
      />
      <small>* Video files are not supported for now</small>
      <button type="submit">Submit</button>
    </form>
  );
}
