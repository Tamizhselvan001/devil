import React from 'react'
import bg from '../../Assets/Images/Wallpaper1.jpg';
import './mystyle.css'
import {Link} from "react-router-dom";
function Fcare() {
    return (
        <div class="carereBody container Pages-font-size">
          <div align="center">
            <h1 class="mt-4 mb-3">Footcare</h1>
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
                <p><Link to="/topseparator">TOE SEPARATOR / TOE STOPPER</Link></p>
              </div>
            </div>
            </div>
            <div class="mt-3">
            <h3>TOE SEPARATOR / TOE STOPPER</h3>
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
                <p><Link to="/medicalarchsupport">MEDIAL ARCH SUPPORT</Link></p>   
              </div>
            </div>
            </div>
            <div class="mt-3">
            <h3>MEDIAL ARCH SUPPORT</h3>
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
                <p><Link to="/lateral">LATERAL / MEDIAL WEDGE</Link></p>   
              </div>
            </div>
            </div>
            <div class="mt-3">
            <h3>LATERAL / MEDIAL WEDGE</h3>
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
                <p><Link to="/metartasalbar">METARTASAL BAR / FOREFOOT ROCKER SOLES</Link></p>   
              </div>
            </div>
            </div>
            <div class="mt-3">
            <h3>METARTASAL BAR / FOREFOOT ROCKER SOLES</h3>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Fcare
