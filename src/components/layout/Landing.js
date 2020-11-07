import React from "react";
import { Link } from "react-router-dom";
import './landing.css';
import logo from './landing.svg'

const Landing = () => {
  return (
   <div className="outer">
      <div className="inner">
          <div className="welcomeText">
          <h3>Hello!<br/> Welome to generic</h3>
          <img className="logo" src={logo} alt="Logo" />
          <div className="btns">
           <Link to="/register-customer"><button className="for-customer">For Customer</button></Link>
           <Link to="/register-retailer"><button className="for-vendor">For Vendor</button></Link> 
          </div>
          </div>
      </div>
    </div>
  );
}

export default Landing;
