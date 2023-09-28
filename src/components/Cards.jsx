import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Cards = () => {
  return (
    <div  className='flex flex-col items-center md:flex-row  gap-8 pt-20 md:pt-10 md:gap-[20px] lg:gap-[100px] md:ml-[100px] dark:text-white'>

             
                    <a className='flex flex-col max-w-[200px] items-center bg-slate-400 p-5 gap-2 rounded-3xl bg-opacity-30 hover:scale-105 transition-all duration-200 hover:opacity-90 cursor-pointer'>
                            <h1 className=' text-2xl font-bold flex gap-1 items-center '>About us <div className='text-red-500'><AiOutlineArrowRight/></div></h1>
                            <p className=' '>Dropify is a shipping company , we deliver your orders anywhere at anytime, click for more. </p>
                    </a>
                    <a href='/order' className='flex flex-col max-w-[200px] items-center bg-slate-400 p-5 gap-2 rounded-3xl bg-opacity-30 hover:scale-105 transition-all duration-200 hover:opacity-90 cursor-pointer'>
                            <h1 className='text-2xl font-bold flex gap-1 items-center '>Order now 
                           <div className='text-red-500 '><AiOutlineArrowRight/></div></h1>
                            <p className=''>Place an order for a delivery request , we will contact you to confirm your order </p>
                    </a>
                    <a className='flex flex-col max-w-[200px] items-center bg-slate-400 p-5 gap-2 rounded-3xl bg-opacity-30 hover:scale-105 transition-all duration-200 hover:opacity-90 cursor-pointer'>
                            <h1 className='text-2xl font-bold flex gap-1 items-center '>Careers <div className='text-red-500 '><AiOutlineArrowRight/></div></h1>
                            <p> working for dropify is amazing , click here to check available opportunities  </p>
                    </a>
                    
                    
            </div>
  )
}

export default Cards
