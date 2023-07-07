import { Outlet } from "react-router-dom";
import LeftSideBar from "../../components/LeftSideBar";
import RightSideBar from "../../components/RightSideBar";
import Loader from "../../components/Loader";
import './home.css'
export default function Home() {
  return (
    <div className="homePage">
      <LeftSideBar />
      <div className="displayPages">
        {
          <Loader/> && 
          <Outlet/>
        }
        {/* <Outlet /> */}
      </div>
      <RightSideBar />
    </div>
  );
}
