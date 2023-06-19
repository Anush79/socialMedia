import { Outlet } from 'react-router-dom'
import LeftSideBar from '../../components/LeftSideBar'
import RightSideBar from '../../components/RightSideBar'
import TweetsSection from '../../components/TweetsSection'


export default function Home(){
  return (
    <div className="homePage">
     
     <LeftSideBar/>
     <div className="displayPages">
        <Outlet/>
     </div>
   
     <RightSideBar/>
      
    </div>
  )
}