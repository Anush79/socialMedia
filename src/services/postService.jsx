import axios from 'axios';
import { toast } from "react-toastify";
export const getEveryPostService = async ()=>{
  try{
    const response = await axios.get('/api/posts')
    return response
  }
  catch(err){
    toast.error(err.message)
  }

}

export const getPostByIdService = async (id)=>{
  try{
    const response = axios.get(`/api/posts/${id}`)
    return response 
  }
  catch(error){
    toast.error(error.message)
  }
}

export const getAllUserPostsHandlerService = async (username) =>{
  try {
    const response = axios.get(`/api/posts/user/${username}`)
    return response;
  }catch(error){
    toast.error(error.message)
  }
}

export const likePostHandlerService = async(postId, authorization)=>{
  try{
    const response = await axios.post(`/api/posts/like/${postId}`, {}, { headers: { authorization } });
   return response;
  }catch(err){
    toast.error(err.response.data.errors[0]);
  }
}
export const dislikePostService = async(postId, authorization)=>await axios.post(`/api/posts/dislike/${postId}`, {}, {headers: {authorization}})    

export const deletePostHandlerService =  (postId, authorization) =>
axios.delete(`/api/posts/${postId}`, { headers: { authorization } });

