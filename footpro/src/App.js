import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

import Aboutus from './Components/About/Aboutus';

import Contact from './Components/Contact/contact';
import Footcare from './Components/Footcare/Footcare';
import Services from './Components/Services/Services';
import Home from  "./Components/Home/home"
import Special from './Components/Home/special';
import Orthoses from './Components/Services/Pages/Orthoses'
import logo from "./Assets/Images/logo.jpeg"
import Pages from './Components/Pages/pages'
import Footer from './Components/Footer/footer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import './navcss.css'
import SvgIcon from '@material-ui/core/SvgIcon';
import CancelIcon from '@material-ui/icons/Cancel';
import Header from './Components/Header/header';
import Routes from './routes';

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
    <Routes/>
    </div>
  );
}
}
export default App;