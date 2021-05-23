import React from 'react'
import bg from '../../Assets/Images/Wallpaper1.jpg';
import './mystyle.css'
import {Link} from "react-router-dom";
function Fcare() {
    return (
        <div class="carereBody container">
          <div align="center">
        <div class="row w-100">
        <div class="for-mob-fcare"></div>      
            <div class="col mb-5">
            <div class="card">
            <div class="imgBox">
            <img src={bg}/>
            <img src={bg}/>
            </div>
            <div class="details">
              <div class="content">
                <p><Link class="nav-link" to="/topseparator">TOE SEPARATOR / TOE STOPPER</Link></p>
              <p>Web Developer</p>
              </div>
            </div>
            </div>
            </div>      
            <div class="for-mob-fcare"></div>      
            <div class="col mb-5">
            <div class="card">
            <div class="imgBox">
            <img src={bg}/>
            <img src={bg}/>
            </div>
            <div class="details">
              <div class="content">
                <p><Link class="nav-link" to="/medicalarchsupport">MEDIAL ARCH SUPPORT</Link></p>   
              <p>Web Developer</p>
              </div>
            </div>
            </div>
            </div>
            <div class="w-100"></div>
            <div class="for-mob-fcare"></div>      
            <div class="col mb-5" >
            <div class="card">
            <div class="imgBox">
            <img src={bg}/>
            <img src={bg}/>
            </div>
            <div class="details">
              <div class="content">
                <p><Link class="nav-link" to="/lateral">LATERAL / MEDIAL WEDGE</Link></p>   
              <p>Web Developer</p>
              </div>
            </div>
            </div>
            </div>          
            <div class="for-mob-fcare"></div>      
            <div class="col mb-5" >
            <div class="card">
            <div class="imgBox">
            <img src={bg}/>
            <img src={bg}/>
            </div>
            <div class="details">
              <div class="content">
                <p><Link class="nav-link" to="/metartasalbar">METARTASAL BAR / FOREFOOT ROCKER SOLES</Link></p>   
              <p>Web Developer</p>
              </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Fcare
