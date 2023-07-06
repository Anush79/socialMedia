import { NavLink } from "react-router-dom";

export default function ErrorPage(){
  return <>
  
  <h3>Something is not right</h3>
  <h5>Please go back</h5>
  <NavLink to='/home/feed'>🔙</NavLink>
  </>
}