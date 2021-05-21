import React from 'react';
import Special from './special';
import Contact from '../Contact/contact';
import Slider from './slider'
const Home=()=>{
    return(
    <div class="w-100">
    <Slider/>
    <Special/>
    <Contact/>
   </div>
    )
};

export default Home;