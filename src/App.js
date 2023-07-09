import "./App.css";
import Mockman from 'mockman-js'
import { Route, Routes } from 'react-router-dom';
import { Main } from "./Pages/main/Main";
import Bookmark from "./Pages/bookmark/Bookmark";
import Explore from "./Pages/explore/Explore";
import Login from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup";
import Error from "./Pages/error/Error";
import PrivatePage from './Pages/privatePage/PrivatePage';
import { ToastContainer } from 'react-toastify';
import Welcome from './Pages/welcome/Welcome';
// import SinglePost from "./Pages/singlePost/SinglePost";
import UserProfile from "./Pages/userProfile/UserProfile";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>

        <Route element={<PrivatePage />} >
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/' element={< Main />} />
        </Route>

        <Route path='/mockman' element={<Mockman />} />
        <Route path='/bookmark' element={<Bookmark />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route path='/singlepost/:id' element={<SinglePost />} /> */}
        <Route path='/userprofile/:username' element={<UserProfile />} />
        <Route path='*' element={<Error />} />

      </Routes>

    </>
  )
}

export default App;
