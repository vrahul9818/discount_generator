import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css"

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [error,setError] =  useState(false);
    const [password, setPassword] = useState("");

    const handleGetRequest = () => {
        axios.post("http://localhost:8081/api/offer/login",{email:email,password:password})
          .then(response => {
            // console.log(response.data);
            localStorage.setItem("token",response.data.token)
            
            navigate("/user_coupon")
          })
          .catch(error => {
            setError(true);
            console.log(error);
          });
          
      };
    const gotosignup = () => {
        navigate("/signup")
    }

    return(<>
<div className="container">
     <div className="offer_login">
      <h1>offer generate login</h1>
        <label htmlFor="email" >email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> 
        <label htmlFor="password" >password:</label>
        <input type="password" id="password" name="password" value={password} onChange ={(e)=>{setPassword(e.target.value)}}/> 
        <span>
        <button onClick={gotosignup} >sIGNUP</button>
        <button onClick={handleGetRequest} >submit</button></span>
        {error && <div>either signup or enter correct details </div>}
    </div>
    
 </div>
      </>)
}
export default Login;