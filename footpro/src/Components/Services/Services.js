import React, { Component } from 'react';
import bg from "../../Assets/Images/Backround.jpeg";
import card from "../../Assets/Images/card-img.png";
import card1 from "../../Assets/Images/card-img1.png";
import card2 from "../../Assets/Images/card-img2.jpg";
const Services=()=> {
        return (
            <div>
<img src={bg} class="img-fluid w-100" alt="Responsive image"/>
<div class="container">
    <h1 class="text-center">Our Service</h1>
    <div class="row">
        <div class="col text-center mt-3">
            <img class="w-100" src={card}/>
            <h5>German Technology</h5>
        </div>
        <div class="col text-center mt-3">
            <img class="w-100" src={card1}/>
            <h5>German Technology</h5>
        </div>
        <div class="col text-center mt-3">
            <img class="w-100" src={card2}/>
            <h5>German Technology</h5>
        </div>
        <div class="col text-center mt-3">
            <img class="w-100" src={card}/>
            <h5>German Technology</h5>
        </div>
        <div class="col text-center mt-3">
            <img class="w-100" src={card1}/>
            <h5>German Technology</h5>
        </div>
        <div class="col text-center mt-3">
            <img class="w-100" src={card2}/>
            <h5>German Technology</h5>
        </div>
    </div>
</div>
            </div>
        );
    }


export default Services;