import { useState } from 'react'
import { useUser } from '../context/userContext'
import UsersCard from './UsersCard'
export default function RightSideBar() {
  const { users } = useUser()

  return <div className="rightSideBar">
    <div className="filters">
      <button>Trending</button>
      <button>Latest</button>
    </div>
    <div className="suggestions">
      {
        users?.allUsersInDB.length > 0 ?
          users?.allUsersInDB.map(item => {
            return <UsersCard key={item._id}item={item}/>
            
          }) : "No suggestions for now"

      }
    </div>
  </div>

}