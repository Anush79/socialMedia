import { useUser,useAuth } from '../'
export default function Search() {
  const { users } = useUser()
  const {token } = useAuth()

  return <div className="searchContainer">
    <input type="text" name="search" id="search" placeholder="search by name or username " />
    {token && users.length > 0 ?
      users.slice(-4).map(item => {
        return<div key={item._id} className='suggestedProfile'>
        <p><img src={item.profileAvatar} alt="avatar" width="50px" /></p>
        <div>{item.firstName} {item.lastName}
          <p><small>@{item.username}</small></p>
        </div>
        <p> <button>Follow</button></p>

      </div>
      }) : "No suggestions for now"

    }
  </div>
}