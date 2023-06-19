import axios from 'axios'
import {toast} from 'react-toastify'
export const getAllUsersService=async ()=>{
  try{
      const response = await axios.get('/api/users')
      return response
  }catch(error){
toast.error(error)
  }
}
