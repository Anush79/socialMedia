export default function TweetCard({item}){
  const {id, content, mediaURL, mediaAlt, createdAt, likes:{likeCount, likedBy, dislikedBy}, username, comments}= item
  return <div key={id} className="tweetCard">
       <div className="heading">
        <h3>{username}</h3>
        <p>{createdAt}</p>
        <img src={mediaURL} alt={mediaAlt} width="300px" />
        <p>{content}</p>
        <p>likes:{likeCount}</p>
        <button>Like</button> 
        <button >share</button>
       </div>
  </div>
}