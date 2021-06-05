import React from 'react';
import './footer.css'
import {Link} from "react-router-dom";
const Services=()=> {
  let said ="";
  let Current=new Date();
  Current=Current.getHours();


if (Current >= 1 && Current < 18) {
return (
<div class="morning-css">
<div class="text-white p-5 	d-none d-sm-block">
    <div class="row text-center" id="footer-css">
    <div class="col-sm">
      <h4>About</h4>
      Arise,awake and donot stop until the goal is reached.
    </div>
    <div class="col-sm" >
      <h4>RR Leather </h4>
      <Link to={'/about'} id="f-link-css">About</Link><br/>
      <Link to={'/footcare'} id="f-link-css">Footcare</Link><br/>
      <Link to={'/service'} id="f-link-css">Services</Link><br/>
      <Link to={'/contact'} id="f-link-css">Contact</Link><br/>
    </div>
    <div class="col-sm">
      <h4>Contact</h4>
      <p>
      All types of Shoes and Sandals<br/>
      No 26, 6st Adem Nager,<br/>
      Nagalkeni,<br/>
      Chennai-600044<br/>
      </p>
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
else{
return (
<div  class="night-css">
<div class="text-white p-5 	d-none d-sm-block">
    <div class="row text-center" id="footer-css">
    <div class="col-sm">
      <h4>About</h4>
      Arise,awake and donot stop until the goal is reached.
    </div>
    <div class="col-sm" >
      <h4>RR Leather </h4>
      <Link to={'/about'} id="f-link-css">About</Link><br/>
      <Link to={'/footcare'} id="f-link-css">Footcare</Link><br/>
      <Link to={'/service'} id="f-link-css">Services</Link><br/>
      <Link to={'/contact'} id="f-link-css">Contact</Link><br/>
    </div>
    <div class="col-sm">
      <h4>Contact</h4>
      <p>
      All types of Shoes and Sandals<br/>
      No 26, 6st Adem Nager,<br/>
      Nagalkeni,<br/>
      Chennai-600044<br/>
      </p>
    </div>
    </div>
</div>
<div class="container d-block d-sm-none">
<nav class="navbar navbar-light">
  <a class="navbar-brand" id="footer-icons" href="tel:9360655122">
  <i class="fa fa-phone"></i>
  </a>
  <a class="navbar-brand" id="footer-icons" href="https://wa.me/919710902659" target="_blank">
  <i class="fa fa-whatsapp"></i>
  </a>
</nav>
</div>
</div>
);
}


}


export default Services;