import React from 'react';
import Special from './special';
import Contact from '../Contact/contact';
import Slider from './slider'
import './home.css'
const Home=()=>{
    return(
    <div class="w-100">
    <Slider/>
    <Special/>
    <Contact/>
    <a href="https://wa.me/919710902659" class="whatsapp_float" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
   </div>
    )
};

export default Home;