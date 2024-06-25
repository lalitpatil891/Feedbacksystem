import { useState } from 'react'
import Home from './Components/Home'
import Login from './Components/Admin/Login'
import SignUp from './Components/Admin/SignUp'
import FeedForm from './Components/FeedForm'
import './App.css'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Adminpage from './Components/Admin/Adminpage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
          {/* <Navbar/> */}
          {/* <Route path="/Navbar" element= { <Navbar/>}/> */}
          <Route path="/" element= { <Home/>}/>
          <Route path="/SignUp" element= { <SignUp/>}/>
          <Route path="/Login" element= { <Login/>}/>
          <Route path="/Feedback" element= { <FeedForm/>}/>
          <Route path="/Adminpage" element= { <Adminpage/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
