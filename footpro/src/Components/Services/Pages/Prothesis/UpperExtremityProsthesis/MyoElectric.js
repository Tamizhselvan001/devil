import React from 'react'

import bg from '../../../../../Assets/Images/Wallpaper1.jpg';
function MyoElectric() {
return (
<div className="Pages-font-size">
<h2 class="text-center">Myo Electric</h2>
<div class="row container-fluid justify-content-center mt-3">
  <div class="col-sm-4 ">
  <img class="w-100 rounded mt-2" src={bg}/>
  <img class="w-100 rounded mt-2" src={bg}/>
  <img class="w-100 rounded mt-2" src={bg}/>
  </div>
  <div class="col-sm-8  mt-2 mb-5">
  </div>
</div>
</div>
  )
}

export default MyoElectric
