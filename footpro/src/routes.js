import React from 'react';
import { BrowserRouter as Router,Switch, Route, } from 'react-router-dom';
import Aboutus from './Components/About/Aboutus';

import Contact from './Components/Contact/contact';
import Footcare from './Components/Footcare/Footcare';
import Services from './Components/Services/Services';
import Home from  "./Components/Home/home"
import Special from './special';

import Pages from './Components/Pages/pages'

function Routes() {
    return (
        <div>
          <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
      <Route exact path="/special" component={Special}/>
      <Route exact path="/about" component={Aboutus}/>
      <Route exact path="/footcare" component={Footcare}/>
      <Route exact path="/service" component={Services}/>
      <Route exact path="/pages" component={Pages}/>
      </Switch>
    </Router>
        </div>
      );
    };

    export default Routes;