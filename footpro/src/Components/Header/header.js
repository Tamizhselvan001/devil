import React from 'react';
import "./header.css";
import "fontawesome"
import  logo from '../../Assets/Images/logo.jpeg'
const Header=()=> {
        return (
        <div className="body">
             <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
	  <img src={logo} class="logo"/>
      
      <ul >
        <li><a  href="">Home</a></li>
        <li><a href="">About</a></li>
        <li > <a href="">Footcare</a>
        <ul>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Elements</a></li>
            <li><a href="#">Icons</a></li>
          </ul></li>
        
        <li><a href="">Services</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav><section></section>
        </div>
        );
    };

export default Header;