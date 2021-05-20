import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

import Aboutus from './Components/About/Aboutus';

import Contact from './Components/Contact/contact';
import Footcare from './Components/Footcare/Footcare';
import Services from './Components/Services/Services';
import Home from  "./Components/Home/home"
import Special from './special';
import Orthoses from './Components/Services/Orthoses/Orthoses'

import Pages from './Components/Pages/pages'
import Footer from './Components/Footer/footer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'

class App extends React.Component {
  render() {
  return (  
    <div>
    <Router>
      <div className="navbar">    
        <div> 
          <div className='navbar  navbar-light bg-light'>
          <NavLink id="app-lin" to="/"> Home </NavLink>
          <NavLink id="app-lin" to="/about">About</NavLink>
          <NavLink id="app-lin" to="/footcare"> Footcare </NavLink>
          <NavLink id="app-lin" to="/service">OurServices</NavLink>
          <NavLink id="app-lin" to="/contact">Contact</NavLink>
          </div>
          </div>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/special" component={Special}/>
      <Route exact path="/about" component={Aboutus}/>
      <Route exact path="/footcare" component={Footcare}/>
      <Route exact path="/service" component={Services}/>
      <Route exact path="/pages" component={Pages}/>
      <Route exact path="/orthotics" component={Orthoses}/>
        </Switch>
      </div>
    </Router>
    <Footer/>
    </div>
  );
}
}
export default App;