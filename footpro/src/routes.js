import React from 'react';
import { BrowserRouter as Router,Switch, Route, } from 'react-router-dom';
import Aboutus from './Components/About/Aboutus';

import Contact from './Components/Contact/contact';
import Home from  "./Components/Home/home"


import Footer from './Components/Footer/footer'
import Pages from './Components/Pages/pages'
import Special from './Components/Home/special';
import Dropdown from './Components/Dropdown/Dropdown';

import Fcare from './Components/Footcare/Fcare';
import ToeSeparator from './Components/Footcare/Pages/ToeSeparator';
import MetartasalBar from './Components/Footcare/Pages/MetartasalBar';
import MedicalArchSupport from './Components/Footcare/Pages/MedicalArchSupport';
import Lateral from './Components/Footcare/Pages/Lateral';



import Services from './Components/Services/Ourservices'

import Orthoses from './Components/Services/Pages/Orthoses/Orthoses'

import Silione from './Components/Services/Pages/Prothesis/Aesthetic(Silicone)Restoration/Silicon'
import TransFemorl from './Components/Services/Pages/Prothesis/LowerExtremityProsthesis/TransFemoral'
import TransTibil from './Components/Services/Pages/Prothesis/LowerExtremityProsthesis/TransTibil'
import Fitness from './Components/Services/Pages/Prothesis/ProsthesisForSpecialNeeds/Fitness'
import WaterProof from './Components/Services/Pages/Prothesis/ProsthesisForSpecialNeeds/WaterProof'
import Cosmetic from './Components/Services/Pages/Prothesis/UpperExtremityProsthesis/Cosmetic'
import Mechanical from './Components/Services/Pages/Prothesis/UpperExtremityProsthesis/Mechanical'
import MyoElectric from './Components/Services/Pages/Prothesis/UpperExtremityProsthesis/MyoElectric'

function Routes() {
    return (
        <div>
      <Router>      
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/special" component={Special}/>
      <Route exact path="/about" component={Aboutus}/>
      <Route exact path="/pages" component={Pages}/>
      <Route exact path="/orthotics" component={Orthoses}/>
      
      <Route exact path ="/drop" component={Dropdown}/>
      <Route exact path="/footcare" component={Fcare}/>
      <Route exact path="/topseparator" component={ToeSeparator}/>
      <Route exact path="/metartasalbar" component={MetartasalBar}/>
      <Route exact path="/medicalarchsupport" component={MedicalArchSupport}/>
      <Route exact path="/lateral" component={Lateral}/>

      <Route exact path="/service" component={Services}/>
      <Route exact path ="/silicone" component={Silione}/>
      <Route exact path="/trans-femoral" component={TransFemorl}/>
      <Route exact path="/trans-tibil" component={TransTibil}/>
      <Route exact path="/fitness" component={Fitness}/>
      <Route exact path="/waterproof" component={WaterProof}/>
      <Route exact path="/cosmetic" component={Cosmetic}/>
      <Route exact path="/mechanical" component={Mechanical}/>
      <Route exact path="/myoelectric" component={MyoElectric}/>

      </Switch>
      </Router>
        </div>
      );
    };

    export default Routes;