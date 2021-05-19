import React from 'react';
import Special from '../../special';
import Contact from '../Contact/contact';
import bg from '../../Assets/Images/Wallpaper4.jpg';

const Home=()=>{
    return(
<div>
    <img src={bg} id="Head-img-css" className="w-100"/>
    <Special/>
    <Contact/>
   </div>
    )
};

export default Home;