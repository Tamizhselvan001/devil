  
import React from 'react';
import "./header.css";
import "fontawesome"
import  logo from '../../Assets/Images/logo.jpeg'
const Header=()=> {
  return (
    <div  class="body">
      <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
	    <img src={logo} class="logo"  alt="logo"/>  
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/footcare">Footcare</a></li>
        <li><a href="/service">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      </nav>
      </div>
      );
    };

export default Header;