import React, {useEffect,useState} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import './vorder.css'
import vlogo from './vcart.svg'
import Axios from "axios";

const VendorOder = ()=>{

  const {order,setOrder}  = useState ([])

  useEffect(async ()=>{
  //   const config = {
  //     headers: {
  //         'Content-Type': 'application/json',
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  //     }
  // }
  //   const res = await axios.get("https://hackout.herokuapp.com/getAllOrders?vendorId=2334333",config);
    fetch('https://hackout.herokuapp.com/getAllOrders?vendorId=2334333', {
      method: 'GET', 
      headers: { 'Content-Type': 'application/json' }, 
      mode: 'cors'
    }).then(
      res => console.log(res)
    ).catch(
      err=> console.error(err)
    )
    },[])



   
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

export default VendorOder;