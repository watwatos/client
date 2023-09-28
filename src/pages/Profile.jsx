import React, { useState } from 'react'
import ProfilePopup from '../components/ProfilePopup'
import img from '../assets/deliveryGuy.png'
import {motion as m} from 'framer-motion'
const Profile = () => {

    const [name,setName]=useState('ss')
    const [email,setEmail]=useState('email')
    const [address,setAddress]=useState('asds')
    const [show,setShow]=useState(false)

  return (
    <m.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    transition={{duration:0.8,ease:'easeIn'}}
    exit={{opacity:0}}
    className='bg_light dark:from-slate-700 dark:via-slate-800 dark:to-slate-600 dark:text-white'>
      <div className='h-full md:h-screen dark:text-white'>

      <div className='flex flex-col md:flex-row pt-28 items-center md:px-10 lg:px-20 md:justify-between'>

        {/**Profile */}



          <div className='flex flex-col items-center gap-3'>
              <h1 className='text_red text-3xl font-bold'>Profile</h1>
              <div className='shadow-lg py-5 px-10 flex flex-col gap-4 '>
                  <p><span className='font-bold'>name:</span> {name}</p>
                  <p><span className='font-bold'>email:</span> {email}</p>
                  <p><span className='font-bold'>address:</span> {address}</p>
                  <button type='button' className='p-2 bg-black dark:bg-slate-100 text-white dark:text-black rounded-3xl px-5 hover:opacity-80' onClick={()=>(setShow(true))}>Change info</button>
              </div>
              <div>
                {show ?<ProfilePopup setShow={setShow} setAddress={setAddress} setName={setName}  setEmail={setEmail}/> : ''}
                
              </div>
          </div>

            <img src={img} className='hidden md:block max-w-[220px] lg:max-w-[400px] xl:max-w-[450px]' alt="" />

        {/**Orders */}


          <div>
            <div className='flex flex-col gap-3 my-5'>
              <h1 className='text_red text-3xl font-bold text-center'>Orders</h1>

              
                  <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-scroll">

                      <div className='bg-slate-50 dark:bg-slate-600 p-4 rounded-lg shadow-lg'>
                        <div className='flex items-center space-x-2 text-sm'>

                          <p className='text-red-500'>
                            #10231
                          </p>
                          <p className='font-bold'>
                            white shirt
                          </p>
                          <p className='text-sm font-light'>
                            10/12/2020
                          </p>
                          <p className='bg-green-200 text-black p-2'>
                            Delivered
                          </p>
                        
                        </div>
                        <div className='flex flex-col gap-2'>
                        <p>
                            from location: beirut
                        </p>
                        <p>
                          to location : saida
                        </p>
                        <p>
                          price : 100$
                        </p>
                        </div>
                      </div>
                      <div className='bg-slate-50 dark:bg-slate-600 p-4 rounded-lg shadow-lg'>
                        <div className='flex items-center space-x-2 text-sm'>

                          <p className='text-red-500'>
                            #10231
                          </p>
                          <p className='font-bold'>
                            white shirt
                          </p>
                          <p className='text-sm font-light'>
                            10/12/2020
                          </p>
                          <p className='bg-yellow-200 text-black p-2'>
                            in Process
                          </p>
                        
                        </div>
                        <div className='flex flex-col gap-2'>
                        <p>
                            from location: beirut
                        </p>
                        <p>
                          to location : saida
                        </p>
                        <p>
                          price : 100$
                        </p>
                        </div>
                      </div>
                      <div className='bg-slate-50 dark:bg-slate-600 p-4 rounded-lg shadow-lg'>
                        <div className='flex items-center space-x-2 text-sm'>

                          <p className='text-red-500'>
                            #10231
                          </p>
                          <p className='font-bold'>
                            white shirt
                          </p>
                          <p className='text-sm font-light'>
                            10/12/2020
                          </p>
                          <p className='bg-yellow-200 text-black p-2'>
                            in Process
                          </p>
                        
                        </div>
                        <div className='flex flex-col gap-2'>
                        <p>
                            from location: beirut
                        </p>
                        <p>
                          to location : saida
                        </p>
                        <p>
                          price : 100$
                        </p>
                        </div>
                      </div>
                      <div className='bg-slate-50 dark:bg-slate-600 p-4 rounded-lg shadow-lg'>
                        <div className='flex items-center space-x-2 text-sm'>

                          <p className='text-red-500'>
                            #10231
                          </p>
                          <p className='font-bold'>
                            white shirt
                          </p>
                          <p className='text-sm font-light'>
                            10/12/2020
                          </p>
                          <p className='bg-yellow-200 text-black p-2'>
                            in Process
                          </p>
                        
                        </div>
                        <div className='flex flex-col gap-2'>
                        <p>
                            from location: beirut
                        </p>
                        <p>
                          to location : saida
                        </p>
                        <p>
                          price : 100$
                        </p>
                        </div>
                      </div>
                      <div className='bg-slate-50 dark:bg-slate-600 p-4 rounded-lg shadow-lg'>
                        <div className='flex items-center space-x-2 text-sm'>

                          <p className='text-red-500'>
                            #10231
                          </p>
                          <p className='font-bold'>
                            white shirt
                          </p>
                          <p className='text-sm font-light'>
                            10/12/2020
                          </p>
                          <p className='bg-yellow-200 text-black p-2'>
                            in Process
                          </p>
                        
                        </div>
                        <div className='flex flex-col gap-2'>
                        <p>
                            from location: beirut
                        </p>
                        <p>
                          to location : saida
                        </p>
                        <p>
                          price : 100$
                        </p>
                        </div>
                      </div>

                  </div>

            </div>
          </div>
      </div>

      </div>
      
    </m.div>
  )
}

export default Profile
