import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
const ProfilePopup = ({setShow,setName,setEmail,setAddress}) => {
    
    
  return (
    <div className='fixed top-0 left-0 h-screen  w-full bg-slate-700 bg-opacity-40 flex items-center justify-center '>

        <div className='bg-slate-200 dark:bg-slate-800 max-w-[400px] h-auto p-5 opacity-100  rounded-lg shadow-lg bg-opacity-30 backdrop-filter backdrop-blur-lg dark:bg-opacity-30'>
            <div className='relative top-0 left-0 cursor-pointer text-xl ' onClick={()=>setShow(false)}><AiOutlineClose/></div>
            <form className=' flex flex-col items-center gap-5 dark:text-black dark:bg-opacity-20  p-3'>
            <input type="text" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder='New Name'  onChange={(e)=>setName(e.target.value)}/>

            <input type="text" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder='New Email'  onChange={(e)=>setEmail(e.target.value)}/>
           
            <input type="text" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder='New Address'  onChange={(e)=>setAddress(e.target.value)}/>


            <button type='button' className='p-2 bg-black dark:bg-slate-100 text-white dark:text-black rounded-3xl px-5 hover:opacity-80'>Submit changes</button>
            

            </form>

        </div>
      
    </div>
  )
}

export default ProfilePopup
