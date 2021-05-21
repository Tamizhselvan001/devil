import React from 'react';

import "./special.css";
import icon1 from "../../Assets/Images/f1.png"
import icon2 from "../../Assets/Images/f2.png"
import icon3 from "../../Assets/Images/f3.png"
import icon4 from "../../Assets/Images/f4.png"
import icon5 from "../../Assets/Images/f5.png"
import icon6 from "../../Assets/Images/f6.png"

const Special=()=> {
return (
<div className="mt-5 container">
<div class="col text-center "><h1>Why is it Special</h1></div>
    <div class="row">
        <div class="col text-center mt-5 ">
            <img class="img w-15" src={icon1} alt="Card-Image"/>
            <h5 class="mt-5">German Technology</h5>
            <p class="mt-4">with 3D foot scanning and Milling of insoles on EVA blank</p>
        </div>
        <div class="col text-center mt-5">
            <img class="img w-15" src={icon2} alt="Card-Image"/>
            <h5 class="mt-5">German Technology</h5>
            <p class="mt-4">with 3D foot scanning and Milling of insoles on EVA blank</p>
        </div>
        <div class="col text-center mt-5">
            <img class="img w-15" src={icon3} alt="Card-Image"/>
            <h5 class="mt-5">German Technology</h5>
            <p class="mt-4">with 3D foot scanning and Milling of insoles on EVA blank</p>
        </div>
    </div>

    <div class="row">
        <div class="col text-center mt-5 ">
            <img class="img w-15" src={icon4} alt="Card-Image"/>
            <h5 class="mt-5">German Technology</h5>
            <p class="mt-4">with 3D foot scanning and Milling of insoles on EVA blank</p>
        </div>
        <div class="col text-center mt-5">
            <img class="img w-15" src={icon5} alt="Card-Image"/>
            <h5 class="mt-5">German Technology</h5>
            <p class="mt-4">with 3D foot scanning and Milling of insoles on EVA blank</p>
        </div>
        <div class="col text-center mt-5">
            <img class="img w-15" src={icon6} alt="Card-Image"/>
            <h5 class="mt-5">German Technology</h5>
            <p class="mt-4">with 3D foot scanning and Milling of insoles on EVA blank</p>
        </div>
            </div>
            </div>
        )
    }
export default Special;