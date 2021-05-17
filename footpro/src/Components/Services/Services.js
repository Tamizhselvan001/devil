import React from 'react';
import bg from '../../Assets/Images/card-img.png';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Services=()=> {
        return (
            <div>
      <img src={bg} class="img-fluid w-100" alt="Responsive image"/>
<div class="container">
    <h1 class="text-center">Our Service</h1>
    <div class="row">
        <div class="col text-center mt-3">
            <img class="w-100"  src={bg}  alt="Responsive image"/>
            <h5>German Technology</h5>
        </div>
        <div class="col text-center mt-3">
            <img class="w-100"  src={bg}  alt="Responsive image"/>
            <h5>German Technology</h5>
        </div>
        <div class="col text-center mt-3">
            <img class="w-100"  src={bg}  alt="Responsive image"/>
            <h5>German Technology</h5>
        </div>
        <div class="w-100"></div>
        <div class="col text-center mt-3">
            <img class="w-100"  src={bg}  alt="Responsive image"/>
            <h5>German Technology</h5>
        </div>
        <div class="col text-center mt-3">
            <img class="w-100"  src={bg}  alt="Responsive image"/>
            <h5>German Technology</h5>
        </div>
        <div class="col text-center mt-3">
            <img class="w-100"  src={bg}  alt="Responsive image"/>
            <h5>German Technology</h5>
        </div>
    </div>
</div>
            </div>
        );
    }
export default Services;