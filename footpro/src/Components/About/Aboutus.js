import React from 'react';
import '../../App.css'
import './about.css'
import bg from '../../Assets/Images/About-img.jpg';

const Aboutus=()=>{
    return(
        <div className="Pages-font-size">
        <div class="container-fluid w-100">
        <div class="row w-100">
        <div class="col-sm-4">
        <img src={bg} class="img-fluid rounded mb-2 " id="About-img-css"  alt="Responsive image"/>
        </div>
        <div class="col-sm-8 container text-justify mt-2">
               <h2>About Us</h2>
               <p>We @RR Orthocare serving the foot and ankle community since the past few years rr ortho is dedicated to being the leading provider of diabetic, orthopetic, cumsom made computerized insoles and wound care solutions to the foot and ankle community beyond the manufacture and sale of various products and services.</p>
               <p>We are dedicated to work on new product developments and support with great r and d to meet the requirements of the end user of the product in making them cost effective and long lasting we strive to bring the latest in technology, skill and innovations in the field of prosthetics and orthotics our mission is to provide a complete quality foot care to each and every patient in india at an affordable price.</p>
               <p>We offer state-of-the-art technology, quality and service to patients through the use of advanced digitizing systems, latest machineries and a world class gait training area.</p>
               <p>Our clinicians are highly trained, qualified and are american board certified who pay special attention to a patient’s needs and their concerns. </p>
               <p>Through research and education we strive to advance the field of foot and ankle community. </p>
            </div>
        </div>
        </div>  
        </div>
    )
}
export default Aboutus;
