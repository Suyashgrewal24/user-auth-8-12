
// import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Register from './Components/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/' element={<Login />} />


        </Routes>
      </Router>
      <ToastContainer/>


    </>
  )
}

export default App
