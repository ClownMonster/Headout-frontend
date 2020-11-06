import React from "react";
import './landing.css';

const Landing = () => {
  return (
   <div className="outer">
      <div className="inner">
          <div className="welcomeText">
          <h3>Hello!<br/> Welome to generic</h3>
          <div className="btns">
            <button className="for-customer">For Customer</button>
            <button className="for-vendor">For Vendor</button>
          </div>
          
          </div>
      </div>
    </div>
  );
}

export default Landing;
