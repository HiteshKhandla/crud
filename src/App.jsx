
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'react-toastify/dist/ReactToastify.css';
import Register from './componennts/Register'
import UserData from './componennts/UserData'

import Demo from './componennts/Demo'

import { ToastContainer } from 'react-toastify'
import Navbar from './componennts/Navbar';
import { Route, Routes } from 'react-router-dom';
import UpdateData from './componennts/UpdateData';



function App() {


  return (
    <>
      <ToastContainer autoClose={1500} />
      <Navbar />
      {/* <Register /> */}
      {/* <Demo /> */}
      {/*
      <UpdateData />
      <UserData /> */}
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/userdata' element={<UserData />} />
        <Route path='/updatedata/:id' element={<UpdateData />} />


      </Routes>



    </>
  )
}

export default App
