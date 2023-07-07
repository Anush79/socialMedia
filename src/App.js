import { Route, Routes } from "react-router-dom";
import "./App.css";

import { useAuth } from "./";


import Notification from "./components/Notification";
import RequiresAuth from "./components/RequiresAuth";
import Search from "./components/Search";
import SingleTweet from "./components/SingleTweetPage";
import TweetsSection from "./components/TweetsSection";
import BookMarks from "./pages/bookMarks/BookMarks";
import ErrorPage from "./pages/errorPage/Error";
import Explore from "./pages/explore";
import Home from "./pages/home/index";
import Login from "./pages/landing/login";
import Profile from "./pages/profile/index";

function App() {
  const { token } = useAuth();
  return (
    <div className="App">
    
      <div className="main">
        <Notification />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <RequiresAuth token={token}>
                <Home />
              </RequiresAuth>
            }
          >
            <Route path="feed" element={<TweetsSection />} />
            <Route path="search" element={<Search />} />
            <Route path="post/:id" element={<SingleTweet />} />
            <Route path = 'bookmarks' element={<BookMarks/>}/>
            <Route path="explore" element={<Explore/>}/>
            <Route path="profile/:username/:_id" element={<Profile />} />
            <Route path='*' element={<ErrorPage/>}/>
          </Route>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </div>
  
    </div>
  );
}

export default App;
