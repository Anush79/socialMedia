import { useState } from "react";
import { useUser } from "../../context/userContext";
import { usePost } from "../../context/postContext";
export default function EditProfile({ user, setModalOpen }) {
  const [selectedImg, setSelectedImage] = useState(
    user.profileAvatar.length < 1
      ? `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}`
      : user.profileAvatar
  );
  const [userDetailsToUpdate, setUserDetailsToUpdate] = useState(user);
  const { editUserProfileFunction, getUserByIdFunction } = useUser();
  const { getAllUserPostsHandlerFunction } = usePost();
  const handleAvatar = (e) => {
    setSelectedImage(e.target.src);
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserDetailsToUpdate((prev) => ({ ...prev, [name]: value }));
  };
  const handleImageUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageSrc = e.target.result;
      setSelectedImage( imageSrc);
      localStorage.setItem("selectedProfileImage", imageSrc);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    editUserProfileFunction({
      ...userDetailsToUpdate,
      profileAvatar: selectedImg,
    });
    getAllUserPostsHandlerFunction(user.username);

    getUserByIdFunction(user._id);

    setModalOpen(false);
  };

  return (
    <>
      <div className="editProfileBox">
        <div className="avatars">
          <div className="row0">
            <label htmlFor="selectImage">
              <img src={selectedImg} width="100px" />
            </label>
          </div>
          Choose avatar :
          <div className="row1 row clickableIcon">
            <img
              src="\assets\avataaar1.png"
              alt=""
              width="50px"
              onClick={handleAvatar}
            />
            <img
              src="\assets\avataaar9.png"
              width="50px"
              onClick={handleAvatar}
              alt=""
            />
            <img
              src="\assets\avataaar2.png"
              width="50px"
              onClick={handleAvatar}
              alt=""
            />
          </div>
          <div className="row2 row clickableIcon">
            <img
              src="\assets\avataaar8.png"
              alt=""
              width="50px"
              onClick={handleAvatar}
            />
            <img
              src="\assets\avataaar3.png"
              width="50px"
              onClick={handleAvatar}
              alt=""
            />
            <img
              src="\assets\avataaar7.png"
              width="50px"
              onClick={handleAvatar}
              alt=""
            />
          </div>
          <div className="row3 row clickableIcon">
            <img
              src="\assets\avataaar4.png"
              alt=""
              width="50px"
              onClick={handleAvatar}
            />
            <img
              src="\assets\avataaar6.png"
              width="50px"
              onClick={handleAvatar}
              alt=""
            />
            <img
              src="\assets\avataaar5.png"
              width="50px"
              onClick={handleAvatar}
              alt=""
            />
          </div>
          <small className="clickableIcon">
      <label htmlFor="contentImage">
          Upload Image 📸
      </label>
    
      <input
        type="file"
        accept="image/*"
        id="contentImage"
        name="selectedImage"
        onChange={handleImageUpload}
        className="inputImageSelect"
      />
     </small>
        </div>
        <div className="dataToChange">
          <form onSubmit={handleEditSubmit}>
            <div className="nameInputforEdit">
              <div className="labelForNames">
                <label htmlFor="firstName">First Name: </label>
                <input
                  type="text"
                  name="firstName"
                  value={userDetailsToUpdate.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="labelForNames">
                <label htmlFor="lastName">Last Name: </label>
                <input
                  type="text"
                  name="lastName"
                  value={userDetailsToUpdate.lastName}
                  onChange={handleChange}
                />
              
              </div>
            </div>

            <label htmlFor="website">Website</label>
            <input
              type="url"
              name="website"
              value={userDetailsToUpdate.website}
              onChange={handleChange}
            />
            <label htmlFor="bio">Bio</label>
            <textarea
              name="bio"
              id="bio"
              cols="10"
              rows="5"
              value={userDetailsToUpdate.bio}
              onChange={handleChange}
            />
            <button type="submit">Submit changes</button>
          </form>
        </div>
      </div>
    </>
  );
}
