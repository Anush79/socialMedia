import {Routes, Route} from 'react-router-dom'
import './App.css';
import {ToastContainer} from 'react-toastify'

import Notification from './components/Notification';
import Login from './pages/landing/login';
import Home from './pages/home/index'
import Header from './components/Header'
import Footer from './components/Footer';
import Profile from './pages/profile/index'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main'>
        <Notification/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element = {<Home/>}/>
        <Route path= '/profile' element= {<Profile/>}/>
      </Routes>
      </div>
      <Footer/>
     
    </div>
  );
}

export default App;
