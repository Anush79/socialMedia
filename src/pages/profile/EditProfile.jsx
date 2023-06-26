import { useState } from "react";

export default function EditProfile({ user }) {
  const [selectedImg, setSelectedImage] = useState(
    `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}`
  );

  const handleAvatar = (e) => {
    setSelectedImage(e.target.src);
  };

  return (
    <>
      <div className="editProfile">
        <div className="avatars">
          <div className="row1">
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
          <div className="row2">
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
          <div className="row3">
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
        </div>
        <div className="dataToChange">
          <form action="">
            <label htmlFor="selectImage">
              Profile Image: <img src={selectedImg} width="100px" />
            </label>
            <div>
              <label htmlFor="firstName">First Name: </label>
              <input type="text" name="firstName" />
              <label htmlFor="lastName">Last Name: </label>
              <input type="text" name="lastName" />
            </div>

            <label htmlFor="website">Website</label>
            <input type="url" name="website" />
            <label htmlFor="bio">Bio</label>
            <textarea name="bio" id="bio" cols="10" rows="5"></textarea>
            <button type="submit">Submit changes</button>
          </form>
        </div>
      </div>
    </>
  );
}
