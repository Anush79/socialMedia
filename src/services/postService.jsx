import axios from 'axios';
import { toast } from "react-toastify";
export const getEveryPostService = async ()=>{
  try{
    const response = await axios.get('/api/posts')
    console.log(response)
    return response
  }
  catch(err){
    toast.error(err.message)
  }

}