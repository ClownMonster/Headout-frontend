import React, { useEffect ,useState} from "react";
import {Link} from 'react-router-dom';
import './orderdetails.css'
import axios from "axios"
import vlogo from './vcart.svg'

const OrderDetail = ({match})=>{
  const [order,setOrder ] = useState({})
  const [show,setShow] = useState(false)

  const order_id = match.params.id
  

  useEffect(async ()=>{
    try{
      const url  = `https://hackout.herokuapp.com/specificOrder?orderId=${order_id}&vendorId=2334333`
      const res  = await axios.get(url)
      setOrder(res.data)
      setShow(true)
    }catch(err){
      console.error(err)
    }
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
        <div className="orderDetailCard">{show ?  <div className="cd">
        <div><h1 className="tt">Order Id : {order.orderId}</h1></div>
        <div><h1 className="tt">Address : {order.orderAddress}</h1></div>
        <div><h1 className="tt">Phone Number : {order.orderPhoneNo}</h1></div>
        { order.orderProcessed === false && <div><h1 className="tt">Status: Not Processed</h1></div>}
        { order.orderProcessed === true && <div><h1 className="tt">Status: Processed</h1></div> }
        <div><h1 className="tt"></h1></div>



        </div> 
        
        
        : <h1>Fetching</h1>}
        
        </div>
       
    </div>
    </div>
  );

}

export default OrderDetail;