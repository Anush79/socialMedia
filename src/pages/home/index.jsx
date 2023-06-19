import LeftSideBar from '../../components/LeftSideBar'
import RightSideBar from '../../components/RightSideBar'
import TweetsSection from '../../components/TweetsSection'
export default function Home(){
  return (
    <div className="homePage">
     
     <LeftSideBar/>
     <TweetsSection/>
     <RightSideBar/>
      
    </div>
  )
}