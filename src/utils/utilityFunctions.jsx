import {toast} from 'react-toastify'

export const copyLinkToShare =async (currentPostlink)=>{
   try{
    const response = await navigator.clipboard.writeText(currentPostlink)
    toast.success("link copied, share anywhere")
   }catch(error){
    toast.error("Sorry, something went wrong")
    console.error(error)
   }
}