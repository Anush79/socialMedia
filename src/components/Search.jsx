import { useState } from "react";
import { useUser, useAuth } from "../";
import UsersCard from "./UsersCard";
export default function Search() {
  const { users } = useUser();
  const { currentUser } = useAuth();

  const [searchResult, setSearchResult] = useState(
    users?.allUsersInDB.slice(-4)
  );

  const searchHandler = (e) => {
    const { value } = e.target;
    console.log(value);
    const searchFinder = users?.allUsersInDB?.filter(
      (item) =>
        item.username.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.firstName.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.lastName.toLowerCase().includes(value.toLowerCase().trim())
    );
    setSearchResult(() => [...searchFinder]);
  };
  return (
    <div className="searchContainer">
      <h2 className="header">
        <img src={
              currentUser?.profileAvatar?.length < 1
                ? `https://ui-avatars.com/api/?name=${currentUser.firstName}+${currentUser.lastName}`
                : currentUser?.profileAvatar
            } alt="" width="35px"/>
        Search People</h2>
      <input
        type="text"
        name="search"
        id="search"
        onChange={searchHandler}
        placeholder="search by name or username "
      />
      
      
      <div className="suggestionsInSearch">
        {searchResult.length > 0 ? (
          searchResult.map((item) => {
            return <UsersCard key={item._id} item={item} />;
          })
        ) : (
          <div> “ No User found for now, try again with another name "</div>
        )}
      </div>
    </div>
  );
}
