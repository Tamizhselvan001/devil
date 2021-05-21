import React from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import '../../App.css'

function Menu() {
return (
<div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
              <NavLink id="app-lin" to="/"> Home </NavLink><br/>
              <NavLink id="app-lin" to="/about">About</NavLink><br/>
              <NavLink id="app-lin" to="/footcare"> Footcare </NavLink><br/>
              <NavLink id="app-lin" to="/service">OurServices</NavLink><br/>
              <NavLink id="app-lin" to="/contact">Contact</NavLink><br/>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
    )
}

export default Menu
