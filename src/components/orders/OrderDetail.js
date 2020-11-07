import React from "react";
import {Link} from 'react-router-dom';
import './vorder.css'
import vlogo from './vcart.svg'

const OrderDetail = ()=>{
  return (
    <div className="outer">
    <div className="leftBar">
      <div className="name"><h3>Generic</h3></div>
      <div className="dashboardBtn">
        <Link className="h" to='/dashboard-vendor'>
            Dashboard
          </Link>
      </div>
      <div className="ordersBtn">
      <Link className="h" to='/vendor-orders'>
            Orders
          </Link>
      </div>
      <div className="Signout">
       <Link className="h" to='/'>
            Signout
          </Link>
      </div>
    
    </div>
    <div className="mainArea">
        <div className="vlogo"><img src={vlogo}  alt="vlogo" /></div>
    </div>
    </div>
  );

}

export default OrderDetail;