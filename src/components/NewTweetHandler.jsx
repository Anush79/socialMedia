import { useState } from 'react';

import { v4 as uuid } from "uuid";

import { useAuth, usePost } from '../'
import { formatDate } from "../backend/utils/authUtils";



export default function TweetForm({ setModalOpen, status, submitHandlerF, postToEdit }) {
  const { currentUser } = useAuth();
  const { createPostFunction } = usePost();
  const postTime = new Date();
  const [newPost, setNewPost] = useState(postToEdit ?? {

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
  });
  console.log(postToEdit, "post")
  console.log(newPost, "new")
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
      submitHandlerF(newPost._id, newPost)
    }
    else {
      createPostFunction(newPost)
    }

    setModalOpen(!status)

  };
  const handleInput = (e) => {
    const { value } = e.target;
    console.log(value);
    setNewPost((prev) => ({ ...prev, _id: prev._id ?? uuid(), content: value }));
  };


  return <form onSubmit={postsubmitHandler}>
    <textarea
      onChange={handleInput}
      className="tweetArea"
      placeholder="What's New"
      rows={10}
      value={newPost.content}
    ></textarea>

    <input
      type="file"
      accept="image/*"
      id="contentImage"
      name="selectedImage"
      onChange={handleImageUpload}

    />
    <button type="submit">Submit</button>
  </form>
}