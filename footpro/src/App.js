import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

import Aboutus from './Components/About/Aboutus';
import Contact from './Components/Contact/contact';

import Fcare from './Components/Footcare/Fcare';
import ToeSeparator from './Components/Footcare/Pages/ToeSeparator';
import MetartasalBar from './Components/Footcare/Pages/MetartasalBar';
import MedicalArchSupport from './Components/Footcare/Pages/MedicalArchSupport';
import Lateral from './Components/Footcare/Pages/Lateral';

import Services from './Components/Services/Ourservices'
import Home from  "./Components/Home/home"
import Special from './Components/Home/special';
import Orthoses from './Components/Services/Pages/Orthoses/Orthoses'
import logo from "./Assets/Images/logo.jpeg"
import Pages from './Components/Pages/pages'
import Footer from './Components/Footer/footer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import './navcss.css' 
import Header from './Components/Header/header';
import WebHeader from './Components/Header/WebHeader';
class App extends React.Component {
  render() {
  return (                                                                          
    <div>
    <Router>
      <div className="navbar" id="for-web-nav"><WebHeader/></div>
      <div id="for-mob-nav"><Header/></div>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/special" component={Special}/>
      <Route exact path="/about" component={Aboutus}/>
      <Route exact path="/service" component={Services}/>
      <Route exact path="/pages" component={Pages}/>
      <Route exact path="/orthotics" component={Orthoses}/>
      

      <Route exact path="/footcare" component={Fcare}/>
      <Route exact path="/topseparator" component={ToeSeparator}/>
      <Route exact path="/metartasalbar" component={MetartasalBar}/>
      <Route exact path="/medicalarchsupport" component={MedicalArchSupport}/>
      <Route exact path="/lateral" component={Lateral}/>
      </Switch>
    <Footer/>
    </Router>
    </div>
  );
}
}
export default App;