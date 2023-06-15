import { ToastContainer } from 'react-toastify';
export default function Notification(){
  return    <ToastContainer
  position="top-center"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  />
}