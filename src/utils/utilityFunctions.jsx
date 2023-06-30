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


export const formatDateAgo=(dateString) =>{
   const currentDate = new Date();
   const targetDate = new Date(dateString);
   const timeDifference = currentDate.getTime() - targetDate.getTime();
 
   const millisecondsPerSecond = 1000;
   const millisecondsPerMinute = 60 * millisecondsPerSecond;
   const millisecondsPerHour = 60 * millisecondsPerMinute;
   const millisecondsPerDay = 24 * millisecondsPerHour;
   const millisecondsPerMonth = 30 * millisecondsPerDay;
 
   const monthsAgo = Math.floor(timeDifference / millisecondsPerMonth);
   const daysAgo = Math.floor(timeDifference / millisecondsPerDay);
   const hoursAgo = Math.floor(timeDifference / millisecondsPerHour);
   const minutesAgo= Math.floor(timeDifference/millisecondsPerMinute)
   const secondsAgo= Math.floor(timeDifference/millisecondsPerSecond)
 
   let result = '';
   if (monthsAgo > 0) {
     result = `${monthsAgo} month${monthsAgo > 1 ? 's' : ''} ago`;
   } else if (daysAgo > 0) {
     result = `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
   } else if (hoursAgo > 0) {
     result = `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
   }else if (minutesAgo > 0) {
      result = `${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`;
    } 
    else if (secondsAgo > 0) {
      result = `${secondsAgo} second${secondsAgo > 1 ? 's' : ''} ago`;
    } 
   else {
     result = 'Less than an hour ago';
   }
 
   return result;
 }
 