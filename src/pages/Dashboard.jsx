import React, { useState } from 'react'

const Dashboard = () => {
    const [status,setStatus]=useState('in progress')
    const [earning,setEarning]=useState()


    

  return (
    <div className='h-full min-h-screen bg_light  dark:from-slate-700 dark:via-slate-800 dark:to-slate-600'>
      <div className='flex flex-col  items-center gap-5 pt-28 pb-10 dark:text-white'>
      <h1 className='text_red text-3xl font-bold'>Dashboard</h1>
      <div className='flex flex-col md:flex-row  gap-5  items-center md:justify-between w-full md:px-8 lg:px-20 xl:px-32'>

     {/**Orders & earnings */}
      <div className='flex gap-10 items-center text-center'>
      <div className='flex flex-col gap-5 items-center'>
        
        <h1 className='text-2xl '>Total Orders:</h1>
        <p className='font-bold text-3xl'>125</p>
        </div>
        <div className='flex flex-col gap-5 items-center'>
        
        <h1 className=' text-2xl '>Total Earnings:</h1>
        <p className='font-bold  text-3xl'>$1250</p>
        </div>

      </div>

       {/**Orders */}


       <div className='flex flex-col gap-3 my-5'>
              <h1 className='text_red text-3xl font-bold text-center'>Orders</h1>

                    <input type="search" className='p-3 outline-none' placeholder='Search for an order by Name' />
              
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
                          <select

                          defaultValue={status}
                          onChange={(e)=>setStatus(e.target.value)}
                          className={`text-black p-2  ${status==='in progress' ?'bg-yellow-200' : 'bg-green-200' }`}>
                            <option  className='bg-green-200'>
                            delivered
                            </option>
                            <option  className='bg-yellow-200' >
                            in progress
                            </option>
                            
                          </select >

                          <input type="number" className='max-w-[50px] p-2 dark:text-black' 
                          min='0' onChange={(e)=>setEarning(e.target.value)} placeholder='$$' />
                        
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
  )
}

export default Dashboard
