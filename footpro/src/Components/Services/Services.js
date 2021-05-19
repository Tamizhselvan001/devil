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
<div class=" w-100" class="all-service-css">
<img src={bg} class="img-fluid w-100" id="Head-img-css"  alt="Responsive image"/>
<div class="container mt-4 mb-5">
    <h1 class="text-center">Our Service</h1>
    <div class="row">
        <div class="col text-center m-4 bg-info rounded" id="Service-card-css">
            <a href="/pages"><img class="w-100 rounded mt-2" src={bg1} alt="Image"/></a>
            <h5>Custom made footwears</h5>
        </div>
        <div class="col text-center m-4 bg-info rounded" id="Service-card-css">
            <a href="/pages"><img class="w-100 rounded mt-2" src={bg2} alt="Items"/></a>
            <h5>Mcr and mcp footwears</h5>
        </div>
        <div class="col text-center m-4 bg-info rounded" id="Service-card-css">
            <a href="/pages"><img class="w-100 rounded mt-2" src={bg3} alt="Items"/></a>
            <h5>Prefab arch support eva footwear</h5>
        </div>
        </div>
        <div class="row">
        <div class="col text-center m-4 bg-info rounded" id="Service-card-css">
            <a href="/pages"><img class="w-100 rounded mt-2" src={bg4} alt="Items"/></a>
            <h5>Wound care shoe</h5>
        </div>
        <div class="col text-center m-4 bg-info rounded" id="Service-card-css">
            <a href="/pages"><img class="w-100 rounded mt-2" src={bg5} alt="Items"/></a>
            <h5>Ankle boot</h5>
        </div>
        <div class="col text-center m-4 bg-info rounded" id="Service-card-css">
            <a href="/pages"><img class="w-100 rounded mt-2" src={bg6} alt="Items"/></a>
            <h5>Surgical boot</h5>
        </div>
        </div>
        <div class="row">
        <div class="col text-center m-4 bg-info rounded" id="Service-card-css">
            <a href="/pages"><img class="w-100 rounded mt-2" src={bg6} alt="Items"/></a>
            <h5>Kids care</h5>
        </div>
        <div class="col text-center m-4 bg-info rounded" id="Service-card-css">
            <a href="/pages"><img class="w-100 rounded mt-2" src={bg6} alt="Items"/></a>
            <h5>Prosthetic</h5>
        </div>
        <div class="col text-center m-4 bg-info rounded" id="Service-card-css">
            <a href="/orthotics"><img class="w-100 rounded mt-2" src={bg6} alt="Items"/></a>
            <h5>Orthotics</h5>
        </div>
        </div>
    </div>
</div>      
);
}


export default Services;