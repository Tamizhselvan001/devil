import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

import Aboutus from './Components/About/Aboutus';

import Contact from './Components/Contact/contact';
import Footcare from './Components/Footcare/Footcare';
import Services from './Components/Services/Services';
import Home from  "./Components/Home/home"
import Special from './special';
import Orthoses from './Components/Services/Orthoses/Orthoses'
import logo from "./Assets/Images/logo.jpeg"
import Pages from './Components/Pages/pages'
import Footer from './Components/Footer/footer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import './navcss.css'
import SvgIcon from '@material-ui/core/SvgIcon';
import CancelIcon from '@material-ui/icons/Cancel';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: false};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }
  render() {
  return (  
    <div>
    <Router>
      <div className="navbar">  
      <div id="mar">
        <div className='logo'>
          <img  src={logo} alt="Logo"/>        
        </div>  
         
          <div className='Lin'>
          <NavLink id="lin" to="/"> Home </NavLink>
          <NavLink id="lin" to="/about">About</NavLink>
          <NavLink id="lin" to="/footcare"> Footcare </NavLink>
          <NavLink id="lin" to="/service">OurServices</NavLink>
          <NavLink id="lin" to="/contact">Contact</NavLink>
          </div>
          </div>
          <div className="app-menu">
        <button onClick={this.handleToggleClick}>{this.state.showWarning ? 
        <CancelIcon fontSize="large"/>
        : 
        <SvgIcon color="primary" fontSize="large"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></SvgIcon>
        }</button>
        </div>        
        <div>
          {this.state.showWarning ? 
          <div className='app-lin'>
           <NavLink id="app-lin" to="/"> Home </NavLink>
          <NavLink id="app-lin" to="/about">About</NavLink>
          <NavLink id="app-lin" to="/footcare"> Footcare </NavLink>
          <NavLink id="app-lin" to="/service">OurServices</NavLink>
          <NavLink id="app-lin" to="/contact">Contact</NavLink>
          </div>  
          : <> </>}
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
    <Footer/>
    </Router>
    </div>
  );
}
}
export default App;