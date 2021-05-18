import React from 'react';
import Special from '../../special';
import Contact from '../Contact/contact';
import bg from '../../Assets/Images/card-img.png';

const Home=()=>{
    return(
<div>
    <img src={bg} className="w-100"/>
    <Special/>
    <Contact/>
   </div>
    )
};

export default Home;