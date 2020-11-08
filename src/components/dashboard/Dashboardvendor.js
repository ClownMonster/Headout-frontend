import React,{useEffect,useState} from "react";
import './vendor.css';
import dashLogo from './dashboard.svg';
import SideBar from "../layout/SideBar";
import axios from "axios"



const Dashboardvendor = () => {
  const [wait,setWait] = useState(null)
  const [Processed,setProcessed] = useState(null)
  const [name,setName] = useState("")
 
  
  useEffect(async ()=>{
    try{
      let w = 0
      let p = 0
      const vendorId = localStorage.getItem("vendorId");
      const vendorName = localStorage.getItem("VendorName");
      setName(vendorName)
      const url  = `http://hackout.herokuapp.com/getAllOrders?vendorId=${vendorId}`
      const res  = await axios.get(url)
      res.data.forEach(item=>{
        if (item.orderProcessed){
          p++
        }
        else{
          w++
        }
        setProcessed(p)
        setWait(w)
       console.log(w,p)
      })
    }catch(err){
      console.error(err)
    }
    },[] )



  return (
    <div className="outer">
   <SideBar/>
    <div className="mainArea">
      <div className="welcomeHeadText">
        <h3>Welcome {name}</h3>
      </div>
      <div className="dashlogo"><img src={dashLogo} alt="dashLogo" /></div>
      <div className="cards">
        <div className="orderCard">
          <h3>Waiting Orders  </h3>
          <h3>{wait}</h3>
        </div>
        <div className="orderProcessed">
          <h3> Processed Orders </h3>
        <h3>{Processed}</h3>
        </div>
        <div className="orderProcessed">
          <h3> Total Orders </h3>
        <h3>{Processed+wait}</h3>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboardvendor;
