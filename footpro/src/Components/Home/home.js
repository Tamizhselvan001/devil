import React from 'react';

import Contact from '../Contact/contact';
import bg from '../../Assets/Images/card-img.png';


import Header  from "../Header/header";
import slide1 from "./slider/1.jpg";
import slide2 from "./slider/2.jpg";
import slide3 from "./slider/3.jpg";
import slide4 from "./slider/4.jpg";
import Special from '../Special/special';
import Footer from '../Footer/Footer';
import Header2 from '../Header/header';
const Home=()=>{
    return(
<div>
    <Header/>
    
    <Special/>
    <Header2/>
    <Contact/>
    <Footer/>
   </div>
    )
};

export default Home;