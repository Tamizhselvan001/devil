import React, { Component } from 'react';
import "./contact.css";
import email from "./img/email.png";
import shape from "./img/shape.png";
import location from './img/location.png';
import phone from './img/phone.png';
const Contact=()=>{
    const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
        return (
            <div class="contain">
           
            <img src={shape} class="square" alt="" />
            <div class="form">
              <div class="contact-info">
                <h3 class="title">Let's get in touch</h3>
                <p class="text">
                  John and team is the best developer team with new ideas and techniques.John is great.
                </p>
      
                <div class="info">
                  <div class="information">
                  
                    <img src={location}class="icon" alt="" />
                    <p>3/26 Sri Sakthi Nagar</p>
                  </div>
                  <div class="information">
                    <img src={email} class="icon" alt="" />
                    <p>sethugopi4@gmail.com</p>
                  </div>
                  <div class="information">
                    <img src={phone} class="icon" alt="" />
                    <p>9710902659</p>
                  </div>
                </div>
      
                <div class="social-media">
                  <p>Connect with us :</p>
                  <div class="social-icons">
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
      
              <div class="contact-form">
                
      
                <form >
                  <h3 class="title">Contact us</h3>
                  <div class="input-contain">
                    <input type="text" name="name" class="input" />
                    <label for="">Username</label>
                    <span>Username</span>
                  </div>
                  <div class="input-contain">
                    <input type="email" name="email" class="input" />
                    <label for="">Email</label>
                    <span>Email</span>
                  </div>
                  <div class="input-contain">
                    <input type="tel" name="phone" class="input" />
                    <label for="">Phone</label>
                    <span>Phone</span>
                  </div>
                  <div class="input-contain textarea">
                    <textarea name="message" class="input"></textarea>
                    <label for="">Message</label>
                    <span>Message</span>
                  </div>
                  <input type="submit" value="Send" class="bt" />
                </form>
              </div>
            </div>
          </div>
      
        );
    }



export default Contact;