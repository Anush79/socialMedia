export default function UsersCard ({item}){
  return <>
  <div key={item._id} className='suggestedProfile'>
              <p><img src={item.profileAvatar} alt="avatar" width="50px" /></p>
              <div>{item.firstName} {item.lastName}
                <p><small>@{item.username}</small></p>
              </div>
              <p> <button>Follow</button></p>

            </div>
  </>
}