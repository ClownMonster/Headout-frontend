import React, { useEffect ,useState} from "react";
import {Link} from 'react-router-dom';
import './vorder.css'
import axios from "axios"
import vlogo from './vcart.svg'

const OrderDetail = ({match})=>{
  const [order,setOrder ] = useState({})
  const [show,setShow] = useState(false)

  const order_id = match.params.id
  const url = 
  
  useEffect(async ()=>{
    try{

      const url  = `https://hackout.herokuapp.com/specificOrder?orderId=${order_id}&vendorId=2334333`
      const res  = await axios.get(url)
      setOrder(res.data)
      setShow(true)
    }catch(err){
      console.error(err)
    }
  })
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
        {show ?  <div>
        <h1>{order.orderAddress}</h1>
        </div> : <h1>Data Not fetched yet...</h1>}
       
    </div>
    </div>
  );

}

export default OrderDetail;