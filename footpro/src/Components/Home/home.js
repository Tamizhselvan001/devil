import React from 'react';
import Special from './special';
import Contact from '../Contact/contact';
import Slider from './slider'
import Dropdown from '../Dropdown/Dropdown';
const Home=()=>{
    return(
    <div class="w-100">
    {/* <Dropdown/> */}
    <Slider/>
    <Special/>
    <Contact/>
   </div>
    )
};

export default Home;