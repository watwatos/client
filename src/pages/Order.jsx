import React, { useState } from 'react'

import light from '../assets/light.jpg'
import dark from '../assets/dark.jpg'
import {motion as m} from 'framer-motion'
const Order = () => {
    const [orderName,setOrderName]=useState('')
    const [orderWeight,setOrderWeight]=useState('')
    const [fromLoc,setFromLoc]=useState('')
    const [toLoc,setToLoc]=useState('')
  return (
    <div className='bg_light dark:from-slate-700 dark:via-slate-800 dark:to-slate-600 dark:text-white'>
        <div className='h-screen flex flex-col items-center pt-20'>
            <h1 className='text-3xl font-extrabold'>Order a <span className='text_red'>delivery.</span> </h1>

<div className='flex flex-col md:flex-row md:gap-10 items-center md:mt-10 md:justify-between w-full md:px-20 lg:px-40'>
                <div className='my-5 relative  max-w-[280px] md:max-w-[600px] md:min-w-[280px]  hidden dark:block'>
                    <m.img
                    whileInView={{opacity:100}}
                    initial={{opacity:0}}
                    transition={{duration:1,ease:'easeIn'}}
                    src={light} className='rounded-full hidden dark:block' alt="" />
                </div>
                <div className='my-5 relative  max-w-[260px] md:max-w-[580px] dark:hidden'>
                    <m.img
                    whileInView={{opacity:100}}
                    initial={{opacity:0}}
                    transition={{duration:1,ease:'easeIn'}}
                    src={dark} className='rounded-full dark:hidden' alt="" />
                </div>

            <form className=' flex flex-col items-center gap-5 dark:text-black bg-slate-300 dark:bg-slate-700 shadow-lg bg-opacity-30 dark:bg-opacity-20  p-3'>
            <input type="text" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder='Order Name'  onChange={(e)=>setOrderName(e.target.value)}/>
            <input type="number" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder='Order weight (kg)'  onChange={(e)=>setOrderWeight(e.target.value)}/>
            <input type="text" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder='from location'  onChange={(e)=>setFromLoc(e.target.value)}/>
            <input type="text" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder='to location'  onChange={(e)=>setToLoc(e.target.value)}/>
            <button type='button' className='p-2 bg-black dark:bg-slate-100 text-white dark:text-black rounded-3xl px-5 hover:opacity-80'>Submit Order</button>
            

            </form>
        </div>
        </div>
      
    </div>
  )
}

export default Order
