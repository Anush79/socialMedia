import { useAuth } from "../../"

export default function Profile(){
  const {currentUser, token   } = useAuth()
  console.log(currentUser )
  return <div className="ProfileContainer">
    <h2>Profile page</h2>
    <div className="profileHeader">
      <img src={currentUser.profileAvatar} alt="" />
      <h3>{currentUser.firstName}</h3>
    </div>
  </div>
}