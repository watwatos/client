import React from 'react';


import Hero from '../pages/Hero';


import { AnimatePresence } from 'framer-motion'


import {Routes,Route,useLocation} from 'react-router-dom'
import Profile from '../pages/Profile';
import Order from '../pages/Order';
import Dashboard from '../pages/Dashboard';

const AnimRoutes = () => {
    const location = useLocation()
 return  (

    <AnimatePresence initial={true} mode='wait'>
 <Routes key={location.pathname} location={location}>

 <Route path='/' element={<Hero/>}/>
 <Route path='/profile' element={<Profile/>}/>
 <Route path='/order' element={<Order/>}/>
 <Route path='/dashboard' element={<Dashboard/>}/>

 
</Routes>
</AnimatePresence>
 )
};

export default AnimRoutes;
