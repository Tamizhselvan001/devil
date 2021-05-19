

import {BrowserRouter as Router, Switch, Route, NavLink, Redirect} from "react-router-dom";
import Routes from "./routes";
function App() {
  return (
    <div>
      <Router>
        <Redirect to="/"/>
    </Router>
    <Routes/>
    </div>
  );
}

export default App;
