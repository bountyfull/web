import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";


const App = () =>
  <Router>
    <div>    
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} /> 
      </Switch>
    </div>
  </Router>;

export default App;