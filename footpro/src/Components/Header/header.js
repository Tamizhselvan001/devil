  
import React from 'react';
import "./header.css";
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import  logo from '../../Assets/Images/logo.jpeg'
const Header=()=> {
  return (
    <div  class="body">
      <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
	  <img src={logo} class="logo"/>
      
      <ul>
        <li><NavLink id="lin" to="/">Home</NavLink></li>
        <li><NavLink id="lin" to="/about">About</NavLink></li>
        <li><a href="">Services</a></li>
        <li><a href="">Contact</a></li>
        
      </ul>
    </nav>
    <section></section>
        </div>
        );
    };

export default Header;