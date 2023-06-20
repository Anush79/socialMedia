import { useState } from 'react'
import { useUser } from '../context/userContext'
export default function RightSideBar() {
  const { users } = useUser()

  return <div className="rightSideBar">
    <div className="filters">
      <button>Trending</button>
      <button>Latest</button>
    </div>
    <div className="suggestions">
      {
        users.length > 0 ?
          users.map(item => {
            return <div key={item._id} className='suggestedProfile'>
              <p><img src={item.profileAvatar} alt="avatar" width="50px" /></p>
              <div>{item.firstName} {item.lastName}
                <p><small>@{item.username}</small></p>
              </div>
              <p> <button>Follow</button></p>

            </div>
          }) : "No suggestions for now"

      }
    </div>
  </div>

}