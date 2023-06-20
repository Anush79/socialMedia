import { useLocation, Navigate } from "react-router-dom";
import {toast} from 'react-toastify'

export default function RequiresAuth({children, token}){
  const location = useLocation();
  
  return<>
  {
    token? children : <><Navigate to='/' state={{from : location}} /></>
  }
  </>
}