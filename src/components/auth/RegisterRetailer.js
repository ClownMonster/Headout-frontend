import React, { useState } from "react";
import registerImg from './images/img1.svg';
import signInImg from "./images/img2.svg";
import "./register.css"


const RegisterRetailer = () => {

    const [registerData,setRegisterData] = useState({
      vendorName:"",
      vendorId: null,
      vendorGovRegsNumber: "",
      vendorPassword:"",
      vendorAddress:"",
      vendorEmail:"",
      vendorNumber: ""
    }) 

    // const [signInData,setSignIndata] = useState({
      
    // })

    const [form,setForm] = useState(false);
    
    let divClass = ["container1"];
    if(form) {
      divClass.push('sign-up-mode');
    }
    const signUp = () => { 
         setForm(true)
   } 

   const signIn = () => { 
     setForm(false)
    }
    const { vendorName, vendorEmail, vendorPassword, vendorGovRegsNumber,vendorNumber } = registerData;
    const onRegister = e => setRegisterData({ ...registerData, [e.target.name]: e.target.value })
    // const onSingIn = e => setSignInData({ ...formData, [e.target.name]: e.target.value })

    const onRegisterSubmit = e =>{
      e.preventDefault()
      console.log(registerData)
    }
     

  return (
    <div className={divClass.join(" ")}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Vendor Id" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>

          <form action="#" onSubmit={e => onRegisterSubmit(e)} className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input value={vendorName} onChange={e => onRegister(e)} name ="vendorName" type="text" placeholder="Vendor Name" />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input value={vendorGovRegsNumber} onChange={e => onRegister(e)} name ="vendorGovRegsNumber" type="text" placeholder="Govt Reg No" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input value={vendorEmail} onChange={e => onRegister(e)} name ="vendorEmail" type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input value={vendorPassword} onChange={e => onRegister(e)} name ="vendorPassword" type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input value={vendorNumber} onChange={e => onRegister(e)} name ="vendorNumber" type="text" placeholder="Mobile Number" />
            </div>
            <input  type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button onClick = {() => signUp()} className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src={registerImg} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button onClick = {() => signIn()}  className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src={signInImg} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default RegisterRetailer;