import { useUser } from "..";
export default function UsersCard({ item }) {
  const { followUserFunction, isAlreadyFollowing, unFollowUserFunction } =
    useUser();
  const check = isAlreadyFollowing(item._id);
  return (
    <>
      <div key={item._id} className="suggestedProfile">
        <p>
          <img src={item.profileAvatar} alt="avatar" width="50px" />
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
              onClick={() => {
                unFollowUserFunction(item._id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => {
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
