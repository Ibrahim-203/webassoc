// import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/navbar';
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
      <Route path='/' element=''/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
