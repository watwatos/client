import React, {   useState } from 'react'
import './app.css';
import Navbar from './components/Navbar';
import AnimRoutes from './components/AnimRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';




const App = () => {

  const [dark,setDark]=useState('light')
   
 
  const toggleTheme=()=>{
      if(dark==='light'){
        setDark('dark')
      }else{setDark('light')}
    localStorage.setItem('theme',dark)
    
  }


  return (


      
    <div className={localStorage.getItem('theme')==='dark'? 'dark' : ''} >
      
      <Router>
        <Navbar darkMode={dark} setDarkMode={toggleTheme}/>
      
        <AnimRoutes/>
        <Footer/>
        </Router>
        
        
    </div>
    

  )
}

export default App
