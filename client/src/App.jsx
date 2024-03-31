 import './index.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// Pages
import Home from './pages/Home'
import About from './pages/About'
import Activity from './pages/Activity'
import Contact from './pages/Contact'
import Event from './pages/Event'
import Login from './pages/Login'
import Admin from './pages/Admin'
// bibliothèque de routage
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  
  

  const [listOfUsers, setListOfUsers] = useState ([])
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    
    axios.get("http://localhost:3001/users").then((response)=>{
      setListOfUsers(response.data);
    })
  },[])

  
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/activity' element={<Activity/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/event' element={<Event/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin' element={<Admin/>}/>
      {/* Pour n'importe quel liens qui n'est pas définie au dessus */}
      <Route path='*' element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
