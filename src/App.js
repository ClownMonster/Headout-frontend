import React ,{Fragment}from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// component imports

import RegisterRetailer from "./components/auth/RegisterRetailer";
import Dashboardvendor from "./components/dashboard/Dashboardvendor";
import Landing from "./components/layout/Landing"
import VendorOrders from './components/orders/VendorOrder'
import OrderDetail from "./components/orders/OrderDetail"


function App() {
  return (
    <Router>
    <Fragment>
      <Route exact path='/' component={Landing} />
      <section >
        <Switch>
          <Route exact path="/register-vendor" component={RegisterRetailer} />
          <Route exact path="/dashboard-vendor" component={Dashboardvendor} />
          <Route exact path="/vendor-orders" component={VendorOrders} />
          <Route exact path="/:id" component={OrderDetail} /> 
        </Switch>
      </section>
    </Fragment>
  </Router>
  );
}

export default App;
