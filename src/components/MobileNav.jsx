
import React,{useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import {MdDarkMode} from 'react-icons/md'

import {BsFillSunFill} from 'react-icons/bs'


const MobileNav = ({darkMode,setDarkMode}) => {
    const [open,setOpen]=useState(false)
  return (
    <div onClick={()=>setOpen(!open)} className='text-3xl text-black '>

        <div className='dark:text-white cursor-pointer'>
        {!open ?<GiHamburgerMenu/> : <AiOutlineClose/>}
        </div>

        <div className={` ${open?'flex shadow-lg absolute p-5 px-10 flex-col gap-4 right-0 m-2 items-center   text-[18px] bg-slate-300 dark:bg-slate-700 dark:text-white': 'hidden'} `}>
        <div className='absolute bg-slate-300 dark:bg-slate-700 h-6 w-6 -top-1 right-0 mr-4 rotate-[42deg] '/>
           <a href="/profile" className='font-bold text-red-500'>Profile</a>
           <a href="/order" >Order a delivery</a>
           <a href="/about">About</a>
           
           
           <div className='pt-4 text-2xl'>
            {darkMode==='dark' ? <button onClick={setDarkMode}><MdDarkMode/></button>: <button onClick={setDarkMode}><BsFillSunFill/></button>}

            </div>
           
        </div>
        
      
    </div>
  )
}

export default MobileNav
