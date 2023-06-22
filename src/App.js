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
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
