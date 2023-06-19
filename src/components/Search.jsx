import { useUser } from '../'
export default function Search() {
  const { users } = useUser()

  return <div className="searchContainer">
    <input type="text" name="search" id="search" placeholder="search by name or username " />
    { users.length >0 ?
    users.slice(0, 6).map(item => {
      return <div key={item._id} className='suggestedProfile'>
        <p><img src={item.profileAvatar} alt="avatar" width="50px" />{item.firstName} {item.lastName}</p>
        <p><small>@{item.username}</small> <button>Follow</button></p>

      </div>
    }):"No suggestions for now"

   }
  </div>
}