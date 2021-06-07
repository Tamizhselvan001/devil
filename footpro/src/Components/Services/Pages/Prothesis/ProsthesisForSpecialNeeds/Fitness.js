import React from 'react'

import bg from '../../../../../Assets/Images/Wallpaper1.jpg';
function Fitness() {
return (
<div className="Pages-font-size">
<h2 class="text-center">Water Proof Prosthesis</h2>
<div class="row container-fluid justify-content-center mt-3">
  <div class="col-sm-4 ">
  <img class="w-100 rounded mt-2" src={bg}/>
  <img class="w-100 rounded mt-2" src={bg}/>
  <img class="w-100 rounded mt-2" src={bg}/>
  </div>
  <div class="col-sm-8  mt-2 mb-5">
     <p>Functionality is superior to aesthetics.<br/>Widely accepted for running ,jumping or any fitness activities.</p>
  </div>
</div>
</div>
)
}

export default Fitness
