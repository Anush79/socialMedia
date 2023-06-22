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

export const getUserByIdService = async(userId)=>await axios.get(`/api/users/${userId}`)

export const bookMarKPostService = async (postId, authorization) =>
axios.post(
  `/api/users/bookmark/${postId}`,
  {},
  {
    headers: { authorization },
  }
);
