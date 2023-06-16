import "./App.css";
import Mockman from 'mockman-js'
import { Route, Router, Routes } from 'react-router-dom';
import { Main } from "./Pages/main/Main";
import Bookmark from "./Pages/bookmark/Bookmark";
import Favourite from "./Pages/favourite/Favourite";
import Explore from "./Pages/explore/Explore";
import Login from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup";
import Error from "./Pages/error/Error";
// import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      
      {/* <ToastContainer /> */}
      <Routes>
        <Route path='/mockman' element={<Mockman />} />
        <Route path='/' element={< Main />} />
        <Route path='/bookmark' element={<Bookmark />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<Error/>} />

      </Routes>

    </>
  )
}

export default App;
