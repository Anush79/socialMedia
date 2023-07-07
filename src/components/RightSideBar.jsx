import { useEffect } from "react";
import { useUser } from "../";
import UsersCard from "./UsersCard";
export default function RightSideBar() {
  const { users, getSuggestedUsersArray } = useUser();

  useEffect(() => {
    getSuggestedUsersArray();
  }, []);
  return (
    <div className="rightSideBar">
      <h2>Who to Follow</h2>

      <div className="suggestions">
        {users?.suggestedUsers.length > 0
          ? users?.suggestedUsers.slice(0, 6).map((item) => {
              return <UsersCard key={item._id} item={item} />;
            })
          : "No suggestions for now"}
      </div>
    </div>
  );
}
