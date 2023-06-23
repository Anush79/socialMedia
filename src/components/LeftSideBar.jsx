import {NavLink} from 'react-router-dom'
import { useAuth , usePost, useUser} from '../'
import Modal from '../utils/Modal'
import { useState } from 'react'

export default function LeftSideBaar() {
  const { logOutFunction, currentUser } = useAuth()
  const {getAllUserPostsHandlerFunction}= usePost()
  const [modalOpen, setModalOpen]=useState(false)

    return <div className="leftSideBar">

    <div className="feed"><NavLink to='/home'>Feed</NavLink></div>
    <div className="search"><NavLink to='/home/search'>Search</NavLink></div>
    <div className="explore">Explore</div>
    <div className="bookMarks" ><NavLink to="/home/bookmarks">Bookmarks</NavLink></div>
    <div className="profile" onClick={()=>{getAllUserPostsHandlerFunction(currentUser.username)}}><NavLink to="/home/profile">Profile</NavLink></div>

    <div className="addTweet"><Modal status={modalOpen} setCloseModal={setModalOpen} modalText={"New Tweet"}>
    <form>
          <textArea className = "tweetArea"placeholder="What's New" rows={10}></textArea>
          <button type="submit">Submit</button>
        </form>
      </Modal></div>

    <button onClick={logOutFunction}>Logout</button>
  </div>
}