import React from 'react';
import { BrowserRouter as Router,Switch, Route, } from 'react-router-dom';
import Aboutus from './Components/About/Aboutus';

import Contact from './Components/Contact/contact';
import Fcare from './Components/Footcare/Fcare';
import Services from './Components/Services/Services';
import Home from  "./Components/Home/home"


import Footer from './Components/Footer/footer'
import Pages from './Components/Pages/pages'
import Header from './Components/Header/header';
import Orthoses from './Components/Services/Pages/Orthoses';
import Special from './Components/Home/special';

function Routes() {
    return (
        <div>
      <Router>
      <Header/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/special" component={Special}/>
      <Route exact path="/about" component={Aboutus}/>
      <Route exact path="/footcare" component={Fcare}/>
      <Route exact path="/service" component={Services}/>
      <Route exact path="/pages" component={Pages}/>
      <Route exact path="/orthotics" component={Orthoses}/>
      </Switch>
      <Footer/>
      </Router>
        </div>
      );
    };

    export default Routes;