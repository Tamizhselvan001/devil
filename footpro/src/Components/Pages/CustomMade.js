import React from 'react';
import bg from '../../Assets/Images/Wallpaper1.jpg';

const CustomNade=()=> {
return (
<div class="row container-fluid mt-3">
  <div class="col-sm-4 justify-content-center">
  <img class="w-100 rounded mt-2" src={bg}/>
  </div>
  <div class="col-sm-8  mt-2 mb-5">
      <h1>CUSTOM MADE FOOTWEAR </h1>
    <p>
    Our custom made footwear is made accordingly to your foot condtion.based on the condition our footwear insole is modified as per your clinical assesment and footwear strap lengths is made as per your foot size(for swelled legs)<br/>
Also we do 3d scanning of your foot to match foot condour to attain maximum correction with perfection to support your foot with allignment corrction and quicker healing of foot ulcer.<br/>
	We do have advanced digital plantar pressure scan to screen out the alignment and pressure point which helps us to explain each and every customer regading the correction and also this is helpful in ulcer prediction i which we can be causious and can prevent the ulcer at callus stage or even control the formation stage.<br/> 
	We do take care of foot conditions like flat foot,plantarfacsia,pronation&supination,diabetic foot ulcer,chronic wound,charcoat foot and also for major trauma case
       </p> 
  </div>
</div>
);
}


export default CustomNade;