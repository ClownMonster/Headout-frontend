import React ,{Fragment}from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// component imports

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboardvendor from "./components/dashboard/Dashboardvendor";
import Dashboardcustomer from "./components/dashboard/Dashboardcustomer";
import Landing from "./components/layout/Landing"


function App() {
  return (
    <Router>
    <Fragment>
      <Route exact path='/' component={Landing} />
      <section >
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard-vendor" component={Dashboardvendor} />
          <Route exact path="/dashboard-customer" component={Dashboardcustomer} />

        </Switch>
      </section>
    </Fragment>
  </Router>
  );
}

export default App;
