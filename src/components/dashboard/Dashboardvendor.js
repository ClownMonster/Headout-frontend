import React from "react";
// import Navbar from '../layout/Navbar'
import './vendor.css';
import dashLogo from './dashboard.svg';



const Dashboardvendor = () => {
  
  return (
    <div className="outer">
    <div className="leftBar">
      <div className="name"><h3>Generic</h3></div>
      <div className="dashboardBtn">
        <h3 onclick={} >Dashboard</h3>
      </div>
      <div className="ordersBtn">
      <h3>Orders</h3>
      </div>
      <div className="Signout">
      <h3>Signout</h3>
      </div>
    
    </div>
    <div className="mainArea">
      <div className="welcomeHeadText">
        <h3>Hello! Mohan Welcome </h3>
      </div>
      <div className="dashlogo"><img src={dashLogo} alt="dashLogo" /></div>
      <div className="cards">
        <div className="orderCard">
          <h3>Number of Oders Waiting : </h3>
          <h3>20</h3>
        </div>
        <div className="orderProcessed">
          <h3>Number of Oders Processed : </h3>
          <h3>18</h3>
        </div>
        <div className="orderdecline">
          <h3>Number of Oders Rejected : </h3>
          <h3>8</h3>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboardvendor;
