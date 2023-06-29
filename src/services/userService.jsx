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

export const getAllBookmarksService = async( authorization)=>{
  try{
    const response = await axios.get(
      `/api/users/bookmark`,
      {},
      {
        headers: { authorization },
      }
    );
    console.log(response)
    return response
  }catch(error){
    console.error(error)
  }
}
export const removeBookmarkService = async(postId, authorization) => await
  axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization },
    }
  );

export const followUserService = async(followUserId, authorization) => await axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    { headers: { authorization } }
  );
  export const unfollowUserService =async (followUserId, authorization) =>await axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    { headers: { authorization } }
  );

  export const editUserProfileService = async(userData, authorization)=>await axios.post(`/api/users/edit`,{userData},{ headers: { authorization } } )