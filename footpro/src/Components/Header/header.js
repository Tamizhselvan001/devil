  
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
        <li>
          <div class="dropdown">
            <a>Footcare</a>
            <div class="dropdown-content">
            <a href="#">Our Service</a>
            <a href="#">Custom made footwears</a>
            <a href="#">Mcr and mcp footwears</a>
            <a href="#">Prefab arch support eva footwear</a>
            <a href="#">Wound care shoe</a>
            <a href="#">Ankle boot</a>
            <a href="#">Surgical boot</a>
            <a href="#">Kids care</a>
            <a href="#">Prosthetics</a>
            <a href="#">Orthotics</a>
            </div>
          </div>
        </li>
        <li><a href="/service">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      
    </nav>
        </div>
        );
    };

export default Header;