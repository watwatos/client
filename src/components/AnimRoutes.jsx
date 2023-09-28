import React from 'react';


import Hero from '../pages/Hero';




import {Routes,Route,useLocation} from 'react-router-dom'
import Profile from '../pages/Profile';
import Order from '../pages/Order';

const AnimRoutes = () => {
    const location = useLocation()
 return  (

    
 <Routes key={location.pathname} location={location}>

 <Route path='/' element={<Hero/>}/>
 <Route path='/profile' element={<Profile/>}/>
 <Route path='/order' element={<Order/>}/>

 
</Routes>

 )
};

export default AnimRoutes;
