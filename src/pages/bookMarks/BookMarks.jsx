import { useAuth, useUser } from "../../";
import TweetCard from "../../components/TweetCard";

export default function BookMarks() {
  const { currentUser } = useAuth();
  const { users } = useUser();
  const bookMarks = users?.userWithId?.bookmarks;

  return (
    <div className="bookMarksContainer">
      <h3>BookMarks</h3>
      <h6>{currentUser?.username}</h6>
      <div className="tweetSection">
        {bookMarks && bookMarks.length > 0
          ? bookMarks.map((item) => {
            console.log(item);
              return <TweetCard key={item.id}  item={item} inBookmark={true}/>;
            })
          : "No post available"}
      </div>
    </div>
  );
}
