import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import  logo from '../../Assets/Images/logo.jpeg'
const WebHeader=()=> {
  return (
<div>
    <div id="mar">
        <div className='logo'>
          <img  src={logo} alt="Logo"/>        
        </div>  
        <div className='Lin'>
        <NavLink id="lin" to="/"> Home </NavLink>
        <NavLink id="lin" to="/about">About</NavLink>
        <NavLink id="lin" to="/footcare"> Footcare </NavLink>
        <NavLink id="lin" to="/service">OurServices</NavLink>
        <NavLink id="lin" to="/contact">Contact</NavLink>
        </div>
    </div>
</div>
);
};
export default WebHeader;