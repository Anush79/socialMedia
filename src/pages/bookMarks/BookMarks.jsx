import { useAuth, useUser } from "../../";
import TweetCard from "../../components/TweetCard";

export default function BookMarks() {
  const { currentUser } = useAuth();
  const { users } = useUser();
  const bookMarks = users?.userWithId?.bookmarks;

  return (
    <div className="bookMarksContainer">
      <h2 className="header">
        <img src={
              currentUser?.profileAvatar?.length < 1
                ? `https://ui-avatars.com/api/?name=${currentUser.firstName}+${currentUser.lastName}`
                : currentUser?.profileAvatar
            } alt="" width="35px"/>
        BookMarks</h2>
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
