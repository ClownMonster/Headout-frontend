import React ,{Fragment}from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// component imports

import RegisterRetailer from "./components/auth/RegisterRetailer";
import Dashboardvendor from "./components/dashboard/Dashboardvendor";
import Landing from "./components/layout/Landing"
import VendorOrders from './components/orders/VendorOrder'
import OrderDetail from "./components/orders/OrderDetail"
import PrivateRoute from "./components/routing/PrivateRoute"


function App() {
  return (
    <Router>
    <Fragment>
      <Route exact path='/' component={Landing} />
      <section >
        <Switch>
          <Route exact path="/register-vendor" component={RegisterRetailer} />
          <PrivateRoute exact path="/dashboard-vendor" component={Dashboardvendor} />
          <PrivateRoute exact path="/vendor-orders" component={VendorOrders} />
          <PrivateRoute exact path="/:id" component={OrderDetail} /> 
        </Switch>
      </section>
    </Fragment>
  </Router>
  );
}

export default App;
