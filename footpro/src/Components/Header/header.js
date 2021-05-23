import React from 'react';
import "./header.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import  logo from '../../Assets/Images/logo.jpeg'
const Header=()=> {
  return (
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/about">About</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/footcare">Footcare </Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/service">OurServices</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
</div>
);
};

export default Header;