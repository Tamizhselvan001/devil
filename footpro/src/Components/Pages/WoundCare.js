import React from 'react';
import bg from '../../Assets/Images/Wallpaper1.jpg';

const WoundCare=()=> {
return (
<div class="row container-fluid mt-3">
  <div class="col-sm-4 justify-content-center">
  <img class="w-100 rounded mt-2" src={bg}/>
  </div>
  <div class="col-sm-8  mt-2 mb-5">
      <h1> Wound care shoe </h1>
      <p>
      The WCS Insoles provides Platar pressurte relief through the easy task of adapting the Four Layer Insole System.The Four Layer System Consist of EVA,MCP,MCR and Poron.Each Differs Through Varying grades stiffness and elastic recovery.The FLIS absorbs shock with different grades of material and push back with goosebump effect for the pleasure walking for the patient
      </p>
      <ol>
         <li>Off-loads areas of the foot while patient remains ambulatory</li>
         <li>Four multi density insoles allow for customization in precisely targeted off-loading</li>
         <li>Deep rocker sole for easy ambulation</li>
         <li>Easy hook and Loop Closures</li>
         <li>Treatement and management of diabetic foot syndrome</li>
         <li>Treatment for healing of open wounds,ulcer and ulcerations</li>
         <li>Postoperative phase after toe,forefoot and mid footsurgical procedures</li>
         <li>Select customizable pressure relief</li>
      </ol>
 </div>
</div>
);
}


export default WoundCare;