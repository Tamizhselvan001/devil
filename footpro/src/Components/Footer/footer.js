import React from 'react';
import './footer.css'
const Services=()=> {
return (
<div>
<div class="bg-dark text-white p-5 	d-none d-sm-block">
    <div class="row">
    <div class="col-sm">
      <h4>About</h4>
      Arise,awake and donot stop until the goal is reached.
    </div>
    <div class="col-sm">
      <h4>Service Offerings</h4>
      Data, Analytics and AI Applications 
    </div>
    <div class="col-sm">
      <h4>Address</h4>
      No 7, Vivekananda Street,
      Dubai main Road,
      Dubai.
    </div>
    </div>
</div>
<div class="container d-block d-sm-none">
<nav class="navbar navbar-light">
  <a class="navbar-brand" id="footer-icons" href="#">
  <i class="fa fa-phone"></i>
  </a>
  <a class="navbar-brand" id="footer-icons" href="#">
  <i class="fa fa-whatsapp"></i>
  </a>
</nav>
</div>
</div>
);
}


export default Services;