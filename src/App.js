import { Routes, Route } from "react-router-dom";
import "./App.css";

import { useAuth } from "./";

import Notification from "./components/Notification";
import Login from "./pages/landing/login";
import Home from "./pages/home/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./pages/profile/index";
import TweetsSection from "./components/TweetsSection";
import Search from "./components/Search";
import SingleTweet from "./components/SingleTweetPage";
import RequiresAuth from "./components/RequiresAuth";
import BookMarks from "./pages/bookMarks/BookMarks";
import Explore from "./pages/explore";
import ErrorPage from "./pages/errorPage/Error";

function App() {
  const { token } = useAuth();
  return (
    <div className="App">
      <Header />
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
            <Route path="" element={<TweetsSection />} />
            <Route path="search" element={<Search />} />
            <Route path="post/:id" element={<SingleTweet />} />
            <Route path = 'bookmarks' element={<BookMarks/>}/>
            <Route path="explore" element={<Explore/>}/>
            <Route path="profile/:username" element={<Profile />} />
            <Route path='*' element={<ErrorPage/>}/>
          </Route>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
