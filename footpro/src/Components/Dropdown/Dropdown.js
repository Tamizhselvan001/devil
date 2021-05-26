import React from 'react';
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
                            <a href="#">Home</a>
                        </li>
                        <li class="nav-link" >
                            <a href="#">Menu<i class="fas fa-caret-down"></i></a>
                            <div class="dropdown">
                                <ul>
                                    <li class="dropdown-link">
                                        <a href="#">Link 1</a>
                                    </li>
                                    <li class="dropdown-link">
                                        <a href="#">Link 2</a>
                                    </li>
                                    <li class="dropdown-link">
                                        <a href="#">Link 3<i class="fas fa-caret-down"></i></a>
                                        <div class="dropdown second">
                                            <ul>
                                                <li class="dropdown-link">
                                                    <a href="#">Link 1</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="#">Link 2</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="#">Link 3</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="#">More<i class="fas fa-caret-down"></i></a>
                                                    <div class="dropdown second">
                                                        <ul>
                                                            <li class="dropdown-link">
                                                                <a href="#">Link 1</a>
                                                            </li>
                                                            <li class="dropdown-link">
                                                                <a href="#">Link 2</a>
                                                            </li>
                                                            <li class="dropdown-link">
                                                                <a href="#">Link 3</a>
                                                            </li>
                                                            <div class="arrow"></div>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <div class="arrow"></div>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="dropdown-link">
                                        <a href="#">Link 4</a>
                                    </li>
                                    <div class="arrow"></div>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-link" >
                            <a href="#">Services<i class="fas fa-caret-down"></i></a>
                            <div class="dropdown">
                                <ul>
                                    <li class="dropdown-link">
                                        <a href="#">Link 1</a>
                                    </li>
                                    <li class="dropdown-link">
                                        <a href="#">Link 2</a>
                                    </li>
                                    <li class="dropdown-link">
                                        <a href="#">Link 3<i class="fas fa-caret-down"></i></a>
                                        <div class="dropdown second">
                                            <ul>
                                                <li class="dropdown-link">
                                                    <a href="#">Link 1</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="#">Link 2</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="#">Link 3</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="#">More<i class="fas fa-caret-down"></i></a>
                                                    <div class="dropdown second">
                                                        <ul>
                                                            <li class="dropdown-link">
                                                                <a href="#">Link 1</a>
                                                            </li>
                                                            <li class="dropdown-link">
                                                                <a href="#">Link 2</a>
                                                            </li>
                                                            <li class="dropdown-link">
                                                                <a href="#">Link 3</a>
                                                            </li>
                                                            <div class="arrow"></div>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <div class="arrow"></div>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="dropdown-link">
                                        <a href="#">Link 4</a>
                                    </li>
                                    <div class="arrow"></div>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-link" >
                            <a href="#">About</a>
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