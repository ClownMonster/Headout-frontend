import React, {useEffect,useState} from "react";
import {Link} from 'react-router-dom';

import './vorder.css'
import vlogo from './vcart.svg'


const VendorOder = ()=>{

  const [result,setResult]  = useState([])
  const [show,setShow] = useState(false)
  

  useEffect( ()=>{
    fetch('http://hackout.herokuapp.com/getAllOrders?vendorId=2334333',{
    }).then(
      res => res.json()
    ).then(data => {
    console.log(data) 
    setResult(data)
    setShow(true) })
    .catch(
      err=> console.error(err)
    )
    },[] )



   
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
  <div className="orderCardBox">{ show && result.length > 0 ? result.map(item => <div className="in">

    <div>order Id: {item.orderId}</div>
    <div>order status: {item.orderProcessed}</div>
    <div>from :{item.orderPhoneNo}</div>

  </div>) : ""}</div>
    </div>
    </div>
  );

}


export default VendorOder;