import React from 'react';
import bg from '../../Assets/Images/card-img.png';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Specials from './special'
const Home=()=>{
    return(
    <div>
    <img src={bg} class="img-fluid" alt="Responsive image"/>
    <Specials/>

    </div>
    )
};

export default Home;