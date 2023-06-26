import { useEffect } from "react";
import { useUser, useAuth, usePost } from "../";
import UsersCard from "./UsersCard";
import { actionTypes } from "../utils/constants";
export default function RightSideBar() {
  
  const { users, getSuggestedUsersArray } = useUser();
  const { postDispatch } = usePost()
   
      const { SORT_LATEST_POSTS,TRENDING_POSTS } = actionTypes

  useEffect(() => { getSuggestedUsersArray(); }, [])
  return (
    <div className="rightSideBar">
      <div className="filters">
        <button onClick={() => {
          postDispatch({ type: TRENDING_POSTS, payload: "" });
        }}>Trending</button>
        <button onClick={() => {
          postDispatch({ type: SORT_LATEST_POSTS, payload: "" });
        }}>Latest</button>
      </div>

      <div className="suggestions">
        {users?.suggestedUsers.length > 0
          ? users?.suggestedUsers.slice(0,6).map((item) => {
            return <UsersCard key={item._id} item={item} />;
          })
          : "No suggestions for now"}
      </div>
    </div>
  );
}
