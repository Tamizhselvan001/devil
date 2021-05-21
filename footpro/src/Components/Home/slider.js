import React from 'react';
import '../../App.css'
import SlideImg0 from '../../Assets/Images/Wallpaper1.jpg';
import SlideImg1 from '../../Assets/Images/Wallpaper2.jpg';
import SlideImg2 from '../../Assets/Images/Wallpaper3.jpg';
import SlideImg3 from '../../Assets/Images/Wallpaper4.jpg';
import SlideImg4 from '../../Assets/Images/Wallpaper5.jpg';

const Slider=()=> {
return (
<div class="Slider-css">
<div id="demo" class="carousel slide" data-ride="carousel">

  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
    <li data-target="#demo" data-slide-to="3"></li>
    <li data-target="#demo" data-slide-to="4"></li>
  </ul>
  
  <div class="carousel-inner bg-dark">
    <div class="carousel-item active">
    <img  src={SlideImg0} class="w-100" alt="Slider"/>
    </div>
    <div class="carousel-item">
      <img  src={SlideImg1} class="w-100" alt="Slider"/>
    </div>
    <div class="carousel-item">
      <img  src={SlideImg2} class="w-100" alt="Slider"/>
    </div>
    <div class="carousel-item">
      <img  src={SlideImg3} class="w-100" alt="Slider"/>
    </div>
    <div class="carousel-item">
      <img  src={SlideImg4} class="w-100" alt="Slider"/>
    </div>
  </div>
  
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
</div>
);
}


export default Slider;
