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
  const  navigate= useNavigate();

  const openUserProfile = (item) => {
    getUserByIdFunction(item._id);
    getAllUserPostsHandlerFunction(item.username);
    navigate(`/home/profile/${item.username}/${item._id}`); 
  };
console.log(item)
  return (
    <>
      <div
        key={item._id}
        onClick={() => {
          openUserProfile(item);
        }}
        className="suggestedProfile"
      >
        <p>
          <NavLink to={`/home/profile/${item.username}/${item._id}`}>
            <img src={item.profileAvatar} alt="avatar" width="50px" />
          </NavLink>
        </p>
        <div>
          {item.firstName} {item.lastName}
          <p>
            <small>@{item.username}</small>
          </p>
        </div>
        <p>
          {check ? (
            <button
              onClick={(e) => {
                e.stopPropagation()
                unFollowUserFunction(item._id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation()
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
