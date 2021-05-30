import React, { Component } from 'react';
import "./contact.css";
import email from "./img/email.png";
import shape from "./img/shape.png";
import location from './img/location.png';
import phone from './img/phone.png';

function Mail(){
return(
  <form action="https://formsubmit.co/sethugopi4@gmail.com" method="POST">
     <input type="text" name="name" required/>
     <input type="email" name="email" required/>
     <button type="submit">Send</button>
</form>
)
}
export default Mail;