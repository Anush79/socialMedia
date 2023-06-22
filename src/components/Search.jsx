import { useUser,useAuth } from '../'
import UsersCard from './UsersCard'
export default function Search() {
  const { users } = useUser()
  const {token } = useAuth()

  return <div className="searchContainer">

          <input type="text" name="search" id="search" placeholder="search by name or username " />

    {token && users?.allUsersInDB.length > 0 ?
      users?.allUsersInDB.slice(-4).map(item => {
        return <UsersCard key={item._id}item={item}/> 
      }) : "No suggestions for now"

    }
  </div>
}