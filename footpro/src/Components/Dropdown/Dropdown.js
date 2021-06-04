import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import "./Dropdown.css"
// import Logo from '../../Assets/Images/Logo.jpg';

class Dropdown extends React.Component {
constructor(props) {
super(props);
this.state = {showWarning: true};
this.handleToggleClick = this.handleToggleClick.bind(this);
}
handleToggleClick() {
this.setState(state => ({
  showWarning: !state.showWarning
  }));
}
render() { 
return (
        <header>
        <div class="contaner">
            {this.state.showWarning ? 
            <input type="checkbox" name="" id="check"/> 
            : <><input type="checkbox" name="" id="check"/></>}
            <div class="logo-container m-1">
                {/* <img src={Logo}   width="100%"  alt="Logo"/> */}
            </div>
            <div class="nav-btn ">
                <div class="nav-links">
                    <ul class=" mt-3">
                        <li class="nav-link" >
                        <NavLink to="/"  onClick={this.handleToggleClick}> Home </NavLink>
                        </li>
                        <li class="nav-link" >
                            <NavLink to="">Services<i class="fas fa-caret-down"></i></NavLink>
                            <div class="dropdown">
                            <ul>
                            <li class="dropdown-link">
                            <NavLink to="/custom" onClick={this.handleToggleClick}>Custom made footwears</NavLink>
                            </li>
                            <li class="dropdown-link">
                            <NavLink to="/mcp" onClick={this.handleToggleClick}>Mcr and mcp footwears</NavLink>
                            </li>
                            <li class="dropdown-link">
                            <NavLink to="/prefab" onClick={this.handleToggleClick}>Prefab arch support eva footwear </NavLink>
                            </li>
                            <li class="dropdown-link">
                            <NavLink to="/woundcare" onClick={this.handleToggleClick}>Wound care shoe</NavLink>
                            </li>
                            <li class="dropdown-link">
                            <NavLink to="/ankle" onClick={this.handleToggleClick}>Ankle boot</NavLink>
                            </li>
                            <li class="dropdown-link">
                            <NavLink to="/" onClick={this.handleToggleClick}>Surgical boot</NavLink>
                            </li>
                            <li class="dropdown-link">
                            <NavLink to="/" onClick={this.handleToggleClick}>Kids care</NavLink>
                            </li>                    
                            <li class="dropdown-link">
                            <NavLink to="/">Prosthetic<i class="fas fa-caret-down"></i></NavLink>
                                <div class="dropdown second">
                                    <ul>
                                    <li class="dropdown-link">
                                        <NavLink to="/">Lower Extremity Prosthesis<i class="fas fa-caret-down"></i></NavLink>
                                            <div class="dropdown second">
                                            <ul>
                                                <li class="dropdown-link">
                                                    <NavLink to="/trans-tibil" onClick={this.handleToggleClick}>Trans-tibial</NavLink>
                                                    </li>
                                                    <li class="dropdown-link">
                                                        <NavLink to="/trans-femoral" onClick={this.handleToggleClick}>Trans-femoral</NavLink>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                    </li>
                                    <li class="dropdown-link">
                                        <NavLink to="/">Upper Extremity Prosthesis<i class="fas fa-caret-down"></i></NavLink>
                                            <div class="dropdown second">
                                            <ul>
                                                <li class="dropdown-link">
                                                    <NavLink to="/cosmetic" onClick={this.handleToggleClick}>Cosmetic Prosthesis</NavLink>
                                                    </li>
                                                    <li class="dropdown-link">
                                                        <NavLink to="/mechanical" onClick={this.handleToggleClick}>Mechanical Prosthesis</NavLink>
                                                    </li>
                                                    <li class="dropdown-link">
                                                        <NavLink to="/myoelectric" onClick={this.handleToggleClick}>Myo-Electric Prosthesis</NavLink>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                    </li>
                                    <li class="dropdown-link">
                                        <NavLink to="/">Aesthetic (Silicone) Restoration<i class="fas fa-caret-down"></i></NavLink>
                                            <div class="dropdown second">
                                            <ul>
                                                <li class="dropdown-link">
                                                    <NavLink to="/silicone" onClick={this.handleToggleClick}>Silicone </NavLink>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                    </li>
                                    <li class="dropdown-link">
                                        <NavLink to="/">Prosthesis For Special Needs<i class="fas fa-caret-down"></i></NavLink>
                                            <div class="dropdown second">
                                            <ul>
                                                <li class="dropdown-link">
                                                    <NavLink to="/waterproof" onClick={this.handleToggleClick}>Water Proof Prosthesis</NavLink>
                                                    </li>
                                                    <li class="dropdown-link">
                                                        <NavLink to="/fitness" onClick={this.handleToggleClick}>Fitness Prosthesis</NavLink>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                    </li>
                                        
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown-link">
                            <NavLink to="/orthotics" onClick={this.handleToggleClick}>Orthotics</NavLink>
                            </li>            
                            </ul>
                            </div>
                        </li>
                        <li class="nav-link" >
                        <NavLink to="/footcare" onClick={this.handleToggleClick}>Footcare</NavLink>
                        </li>
                        <li class="nav-link" >
                        <NavLink to="/about" onClick={this.handleToggleClick}>About</NavLink>
                        </li>
                        <li class="nav-link" >
                        <NavLink to="/contact" onClick={this.handleToggleClick}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="hamburger-menu-container">
                <div class="hamburger-menu">
                    <div></div>
                </div>
            </div>
        </div>
    </header>
    );
}
}
export default Dropdown;