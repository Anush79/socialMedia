import {Routes, Route} from 'react-router-dom'
import './App.css';
import {ToastContainer} from 'react-toastify'

import Notification from './components/Notification';
import Login from './pages/landing/login';
import Home from './pages/home/index'


function App() {
  return (
    <div className="App">
     <Notification/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element = {<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
