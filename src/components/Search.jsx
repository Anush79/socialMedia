import { useState } from "react";
import { useUser, useAuth } from "../";
import UsersCard from "./UsersCard";
export default function Search() {
  const { users } = useUser();
  const { token } = useAuth();

  const [searchResult, setSearchResult] = useState(
    users?.allUsersInDB.slice(-4)
  );

  const searchHandler = (e) => {
    const { value } = e.target;
    console.log(value);
    const searchFinder = users?.allUsersInDB?.filter((item) =>
      item.username.toLowerCase().includes(value.toLowerCase().trim())||
      
      item.firstName.toLowerCase().includes(value.toLowerCase().trim())||
      
      item.lastName.toLowerCase().includes(value.toLowerCase().trim())
    );
    console.log(searchFinder);
    setSearchResult(()=>[...searchFinder])

  };
  return (
    <div className="searchContainer">
      <input
        type="text"
        name="search"
        id="search"
        onChange={searchHandler}
        placeholder="search by name or username "
      />

      {searchResult.length > 0
        ? searchResult.map((item) => {
            return <UsersCard key={item._id} item={item} />;
          })
        : <div> “ No User found for now, try again with another name "</div>}
    </div>
  );
}
