import React from 'react';
import bg from '../../Assets/Images/Wallpaper3.jpg';
import bg1 from '../../Assets/Images/Wallpaper6.jpg';
import bg2 from '../../Assets/Images/Wallpaper1.jpg';
import bg3 from '../../Assets/Images/Wallpaper12.jpg';
import bg4 from '../../Assets/Images/Wallpaper9.jpg';
import bg5 from '../../Assets/Images/Wallpaper8.jpg';
import bg6 from '../../Assets/Images/Wallpaper7.jpg';

const Services=()=> {
        return (
            <div>
<img src={bg} class="img-fluid w-100" alt="Responsive image"/>
<div class="container mt-4">
    <h1 class="text-center">Our Service</h1>
    <div class="row">
        <div class="col text-center mt-3">
            <a href="/pages"><img class="w-100 rounded" src={bg1} alt="Image"/></a>
            <h5>German Technology</h5>
        </div>
        <div class="col text-center mt-3">
            <a href="/pages"><img class="w-100 rounded" src={bg2} alt="Items"/></a>
            <h5>German Technology</h5>
        </div>
        <div class="col text-center mt-3">
            <a href="/pages"><img class="w-100 rounded" src={bg3} alt="Items"/></a>
            <h5>German Technology</h5>
        </div>
        <div class="w-100"></div>
        <div class="col text-center mt-3">
            <a href="/pages"><img class="w-100 rounded" src={bg4} alt="Items"/></a>
            <h5>German Technology</h5>
        </div>
        <div class="col text-center mt-3">
            <a href="/pages"><img class="w-100 rounded" src={bg5} alt="Items"/></a>
            <h5>German Technology</h5>
        </div>
        <div class="col text-center mt-3">
            <a href="/pages"><img class="w-100 rounded" src={bg6} alt="Items"/></a>
            <h5>German Technology</h5>
        </div>
    </div>
</div>
</div>
        );
    }


export default Services;