import React from 'react';
import Special from '../../special';
import Contact from '../Contact/contact';
import bg from '../../Assets/Images/card-img.png';


import Header  from "../Header/header";
import slide1 from "./slider/1.jpg";
import slide2 from "./slider/2.jpg";
import slide3 from "./slider/3.jpg";
import slide4 from "./slider/4.jpg";
const Home=()=>{
    return(
<div>
    <Header/>
    <img src={bg}/>
    <Special/>
    <Contact/>
   </div>
    )
};

export default Home;