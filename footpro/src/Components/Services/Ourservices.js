import React from 'react';
import {Link} from "react-router-dom";
import './service.css'
import bg from '../../Assets/Images/Wallpaper1.jpg';

function Ourservices() {
    return (
        <div class="ser-container">
       
        <div class="ser-card">
            <div class="ser-imgBX">
                <img src={bg} height="200px"/>
            </div>
            <div class="ser-content">
                <Link to={'/orthotics'}>
                <h5 className="w-100">Custom made footwears</h5>
                <p>Lorem ipsum dolor sit amet,consectetr adipisicing minim venim.</p>
                </Link>
            </div>
        </div>
        <div class="ser-card">
            <div class="ser-imgBX">
                <img src={bg} height="200px"/>
            </div>
            <div class="ser-content">
                <Link to={'/orthotics'}>
                <h5 className="w-100">Mcr and mcp footwears</h5>
                <p>Lorem ipsum dolor sit amet,consectetr adipisicing minim venim.</p>
                </Link>
            </div>
        </div>
        <div class="ser-card">
            <div class="ser-imgBX">
                <img src={bg} height="200px"/>
            </div>
            <div class="ser-content">
                <Link to={'/orthotics'}>
                <h5 className="w-100">Prefab arch support eva footwear</h5>
                <p>Lorem ipsum dolor sit amet,consectetr adipisicing minim venim.</p>
                </Link>
            </div>
        </div>

       
        <div class="ser-card">
            <div class="ser-imgBX">
                <img src={bg} height="200px"/>
            </div>
            <div class="ser-content">
                <Link to={'/orthotics'}>
                <h5 className="w-100">Wound care shoe</h5>
                <p>Lorem ipsum dolor sit amet,consectetr adipisicing minim venim.</p>
                </Link>
            </div>
        </div>
        <div class="ser-card">
            <div class="ser-imgBX">
                <img src={bg} height="200px"/>
            </div>
            <div class="ser-content">
                <Link to={'/orthotics'}>
                <h5 className="w-100">Ankle boot</h5>
                <p>Lorem ipsum dolor sit amet,consectetr adipisicing minim venim.</p>
                </Link>
            </div>
        </div>
        <div class="ser-card">
            <div class="ser-imgBX">
                <img src={bg} height="200px"/>
            </div>
            <div class="ser-content">
                <Link to={'/orthotics'}>
                <h5 className="w-100">Surgical boot</h5>
                <p>Lorem ipsum dolor sit amet,consectetr adipisicing minim venim.</p>
                </Link>
            </div>
        </div>

       
        <div class="ser-card">
            <div class="ser-imgBX">
                <img src={bg} height="200px"/>
            </div>
            <div class="ser-content">
                <Link to={'/orthotics'}>
                <h5 className="w-100">Kids care</h5>
                <p>Lorem ipsum dolor sit amet,consectetr adipisicing minim venim.</p>
                </Link>
            </div>
        </div>
        <div class="ser-card">
            <div class="ser-imgBX">
                <img src={bg} height="200px"/>
            </div>
            <div class="ser-content">
                <Link to={'/orthotics'}>
                <h5 className="w-100">Prosthetic</h5>
                <p>Lorem ipsum dolor sit amet,consectetr adipisicing minim venim.</p>
                </Link>
            </div>
        </div>
        <div class="ser-card">
            <div class="ser-imgBX">
                <img src={bg} height="200px"/>
            </div>
            <div class="ser-content">
                <Link to={'/orthotics'}>
                <h5 className="w-100">Orthotics</h5>
                <p>Lorem ipsum dolor sit amet,consectetr adipisicing minim venim.</p>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Ourservices
