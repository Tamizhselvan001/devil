import React from 'react';
import { BrowserRouter as Router,Switch, Route, } from 'react-router-dom';
import Aboutus from './Components/About/Aboutus';

import Footcare from './Components/Footcare/Footcare';
import Services from './Components/Services/Services';
import Home from  "./Components/Home/home"
import Special from './Components/Home/special';
function Routes() {
    return (
        <div>
          <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
      <Route exact path="/special" component={Special}/>
      <Route exact path="/about" component={Aboutus}/>
      <Route exact path="/footcare" component={Footcare}/>
      <Route exact path="/service" component={Services}/>
      </Switch>
    </Router>
        </div>
      );
    };

    export default Routes;