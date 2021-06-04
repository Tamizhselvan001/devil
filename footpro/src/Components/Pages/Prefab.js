import React from 'react';
import bg from '../../Assets/Images/Wallpaper1.jpg';

const Prefab=()=> {
return (
<div class="row container-fluid mt-3">
  <div class="col-sm-4 justify-content-center">
  <img class="w-100 rounded mt-2" src={bg}/>
  </div>
  <div class="col-sm-8  mt-2 mb-5">
      <h1> PREFAB ARCH SUPPORT EVA FOOTWEAR </h1>
     <p>
     A revolutionary orthopaedic sandal which comes with standard full contact insole.A standard full contact insole consist of arch support which fit the unique condours of your feet and provide you style.This prefab arch support eva footwear combines 3 different material to create Bio-mechanically accurate footwear.
     </p>
     <ol>
        <li>3D printed Standard Orthotics</li>
        <li>Light Weight Outer Sole</li>
        <li>Premium Top Upper</li>
     </ol>
     <p>This footwear Has a Built in custom orthotic footbed that supports the arch and alighs the body from the ground up.Constructed with variable density EVA ,the Footwear cushion the feet and absorbs shock force</p>
    </div>
</div>
);
}


export default Prefab;