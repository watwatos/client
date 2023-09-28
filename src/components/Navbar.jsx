import React, { useEffect, useState } from 'react'
import MobileNav from './MobileNav'
import {DarkModeSwitch} from 'react-toggle-dark-mode'
import light from '../assets/dark.jpg'
const Navbar = ({darkMode,setDarkMode}) => {


  
  const [scrolled,setScrolled]=useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 50){
        setScrolled(true)
    }else{setScrolled(false)}  }) 
  },[])
  return (

    <div className={`p-5 md:px-20 flex  justify-between md:justify-baseline fixed w-screen top-0 items-center dark:text-white bg-transparent z-50 ${scrolled && 'bg-slate-200 dark:bg-slate-700 dark:bg-opacity-30   bg-opacity-30 backdrop-filter backdrop-blur-lg'} `}> 
    <a href='/' className='font-extrabold text-3xl '>Dropify<span className='text-red-500'>.</span> </a>

    <div className='md:hidden'>
    <MobileNav darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
    <div className='hidden md:flex items-center gap-10 font-bold'>

            <a href="/order" className='opacity-80 hover:opacity-100 bg-black p-3 px-6 rounded-full text-white dark:bg-gray-100 dark:text-black'>Order a delivery</a>
            <a href="/profile"><img src={light} className='max-w-[60px] max-h-[70px] rounded-full' alt="" /></a>

        
            <div >
       <DarkModeSwitch
    onChange={setDarkMode}
    checked={darkMode==='light' ? true : false}
    size={25}
    />


    </div>
       
       </div>
    </div>
  )
}

export default Navbar
