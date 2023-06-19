import { useAuth } from '../'
export default function WhatsNew() {
  const { currentUser } = useAuth();

  const handleTweetSubmit = (e) => {
    e.preventDefault();
    console.log("tweeted")
  }


  return <div className="whatsNewSection">
    <form onSubmit={handleTweetSubmit} >
      <img src={currentUser.profileAvatar} alt="" width="50px" />
      <input type="text" name="newTweet" id="" placeholder="What's New" required />
    
      <div>
        <button type='submit' >Post Tweet</button>
      </div>
    </form>


  </div>
}