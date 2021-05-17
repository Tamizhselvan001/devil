import React from 'react'
import bg from '../../Assets/Images/card-img.png';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Header() {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">
               <img src={bg} width="50" height="45" class="rounded" alt=""/>
            </a>
            <div>
            <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/Footcare">Footcare</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/service">Our Services</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
          </div>
        </nav>
        </div>
    )
}

export default Header
