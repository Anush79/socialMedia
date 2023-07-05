import { NavLink, useNavigate } from "react-router-dom";
import { useUser, usePost } from "..";

export default function UsersCard({ item }) {
  const {
    followUserFunction,
    isAlreadyFollowing,
    unFollowUserFunction,
    getUserByIdFunction,
  } = useUser();

  const { getAllUserPostsHandlerFunction } = usePost();
  const check = isAlreadyFollowing(item._id);
  const navigate = useNavigate();

  const openUserProfile = (item) => {
    getUserByIdFunction(item._id);
    getAllUserPostsHandlerFunction(item.username);
    navigate(`/home/profile/${item.username}/${item._id}`);
  };

  return (
    <>
      <div
        key={item._id}
        onClick={() => {
          openUserProfile(item);
        }}
        className="suggestedProfile"
      >
        <p className="userPP">
          <NavLink to={`/home/profile/${item.username}/${item._id}`}>
            <img
              src={
                item?.profileAvatar?.trim().length < 1
                  ? `https://ui-avatars.com/api/?name=${item.firstName}+${item.lastName}`
                  : item?.profileAvatar
              }
              alt="avatar"
            />
          </NavLink>
        </p>
        <div className="userNameSuggestion">
          <p className="clickableIcon">
            {item.firstName}{" "}
          {(item?.lastName?.length + item?.firstName?.length) > 13
            ? item?.lastName?.slice(0, 2) + "..."
            : item?.lastName}
          </p>
          
        
            <small className="smallUserName">@{item.username}</small>
          
        </div>
        <p>
          {check ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                unFollowUserFunction(item._id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                followUserFunction(item._id);
              }}
            >
              Follow
            </button>
          )}
        </p>
      </div>
    </>
  );
}
