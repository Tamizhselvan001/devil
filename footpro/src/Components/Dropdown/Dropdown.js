import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import "./Dropdown.css"

function Dropdown() {
    return (
        <header>
        <div class="contaner">
            <input type="checkbox" name="" id="check"/>
            
            <div class="logo-container">
                <h3 class="logo">Sethu</h3>
            </div>

            <div class="nav-btn">
                <div class="nav-links">
                    <ul>
                        <li class="nav-link" >
                        <NavLink to="/"> Home </NavLink>
                        </li>
                        <li class="nav-link" >
                            <NavLink to="/service">Services<i class="fas fa-caret-down"></i></NavLink>
                            <div class="dropdown">
                            <ul>
                            <li class="dropdown-link">
                            <NavLink to="/">Custom made footwears</NavLink>
                            </li>
                            <li class="dropdown-link">
                            <NavLink to="/">Mcr and mcp footwears</NavLink>
                            </li>
                            <li class="dropdown-link">
                            <NavLink to="/">Prefab arch support eva footwear </NavLink>
                            </li>
                            <li class="dropdown-link">
                            <NavLink to="/">Wound care shoe</NavLink>
                            </li>
                            <li class="dropdown-link">
                            <NavLink to="/">Ankle boot</NavLink>
                            </li>
                            <li class="dropdown-link">
                            <NavLink to="/">Surgical boot</NavLink>
                            </li>
                            <li class="dropdown-link">
                            <NavLink to="/">Kids care</NavLink>
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
                                                    <NavLink to="/trans-tibil">Trans-tibial</NavLink>
                                                    </li>
                                                    <li class="dropdown-link">
                                                        <NavLink to="/trans-femoral">Trans-femoral</NavLink>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                    </li>
                                    <li class="dropdown-link">
                                        <NavLink to="/">Upper Extremity Prosthesis<i class="fas fa-caret-down"></i></NavLink>
                                            <div class="dropdown second">
                                            <ul>
                                                <li class="dropdown-link">
                                                    <NavLink to="/cosmetic">Cosmetic Prosthesis</NavLink>
                                                    </li>
                                                    <li class="dropdown-link">
                                                        <NavLink to="/mechanical">Mechanical Prosthesis</NavLink>
                                                    </li>
                                                    <li class="dropdown-link">
                                                        <NavLink to="/myoelectric">Myo-Electric Prosthesis</NavLink>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                    </li>
                                    <li class="dropdown-link">
                                        <NavLink to="/">Aesthetic (Silicone) Restoration<i class="fas fa-caret-down"></i></NavLink>
                                            <div class="dropdown second">
                                            <ul>
                                                <li class="dropdown-link">
                                                    <NavLink to="/silicone">Silicone </NavLink>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                    </li>
                                    <li class="dropdown-link">
                                        <NavLink to="/">Prosthesis For Special Needs<i class="fas fa-caret-down"></i></NavLink>
                                            <div class="dropdown second">
                                            <ul>
                                                <li class="dropdown-link">
                                                    <NavLink to="/waterproof">Water Proof Prosthesis</NavLink>
                                                    </li>
                                                    <li class="dropdown-link">
                                                        <NavLink to="/fitness">Fitness Prosthesis</NavLink>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                    </li>
                                        
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown-link">
                            <NavLink to="/contact">Orthotics</NavLink>
                            </li>            
                            
                            </ul>
                            </div>
                        </li>
                        <li class="nav-link" >
                        <NavLink to="/footcare">Footcare</NavLink>
                        </li>
                        <li class="nav-link" >
                        <NavLink to="/about">About</NavLink>
                        </li>
                        <li class="nav-link" >
                        <NavLink to="/contact">Contact</NavLink>
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

export default Dropdown;

