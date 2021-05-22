import React from 'react';
import Special from './special';
import Contact from '../Contact/contact';
import Slider from './slider'
import Header from '../Header/header';
const Home=()=>{
    return(
    <div class="w-100">
    
    <Header/>
    <Special/>
    <Contact/>
   </div>
    )
};

export default Home;