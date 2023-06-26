import { NavLink } from "react-router-dom";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import { useAuth, usePost, useUser } from "../";
import Modal from "../utils/Modal";
import { formatDate } from "../backend/utils/authUtils";

export default function LeftSideBaar() {
  const { logOutFunction, currentUser } = useAuth();
  const { getAllUserPostsHandlerFunction ,createPostFunction} = usePost();
  const [modalOpen, setModalOpen] = useState(false);

  const postTime = new Date();
  const [newPost, setNewPost] = useState({
    _id: uuid(),
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
  const handleInput = (e) => {
    const { value } = e.target;
    console.log(value);
    setNewPost((prev) => ({ ...prev, _id: uuid(), content: value }));
  };
  const handleImageUpload = (event) => {
    event.preventDefault();
    alert("imageUploader");
    // const file = event.target.files[0];
    // const reader = new FileReader();

    // reader.onload = (e) => {
    //   const imageSrc = e.target.result;
    //   setNewUserData((newUserData) => ({
    //     ...newUserData,
    //     selectedImage: imageSrc,
    //   }));
    //   localStorage.setItem("selectedImage", imageSrc);
    // };

    // if (file) {
    //   reader.readAsDataURL(file);
    // }
  };
  const postsubmitHandler = (e) => {
e.preventDefault();
    console.log(" post created", newPost);
    createPostFunction(newPost)
    setModalOpen(!modalOpen)

  };

  return (
    <div className="leftSideBar">
      <div className="feed">
        <NavLink to="/home">Feed</NavLink>
      </div>
      <div className="search">
        <NavLink to="/home/search">Search</NavLink>
      </div>
      <div className="explore">   <NavLink to="/home/explore">Explore</NavLink></div>
      <div className="bookMarks">
        <NavLink to="/home/bookmarks">Bookmarks</NavLink>
      </div>
      <div
        className="profile"
        onClick={() => {
          getAllUserPostsHandlerFunction(currentUser.username);
        }}
      >
        <NavLink to="/home/profile">Profile</NavLink>
      </div>

      <div className="addTweet">
        <Modal
          status={modalOpen}
          setCloseModal={setModalOpen}
          modalText={"New Tweet"}
        >
          <form onSubmit={postsubmitHandler}>
            <textArea
              onChange={handleInput}
              className="tweetArea"
              placeholder="What's New"
              rows={10}
            ></textArea>

            <input
              type="file"
              accept="image/*"
              id="contentImage"
              name="selectedImage"
              onChange={handleImageUpload}
            />
            <button type="submit">Submit</button>
          </form>
        </Modal>
      </div>

      <button onClick={logOutFunction}>Logout</button>
    </div>
  );
}
