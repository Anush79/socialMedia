import { NavLink } from "react-router-dom"
import { useAuth } from "../../"

export default function Profile(){
  const {currentUser, token   } = useAuth()
  console.log(currentUser )
  return <div className="ProfileContainer">
    <h2>Profile page</h2>
    <div className="profileHeader">
      <img src={currentUser?.backgroundImage} alt="" width={"100%"} height={"300px"} />
      <img src={currentUser?.profileAvatar} alt="" width={"100px"} />
      <h3>{currentUser?.firstName}</h3>
      <h4>{currentUser?.bio}</h4>
      <h5><NavLink to={currentUser?.website}target="_blank">{currentUser?.website}</NavLink></h5>
    </div>
  </div>
}