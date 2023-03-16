import React from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";




const User_CouponDisplay = () => {
  const navigate = useNavigate();
    axios.post("http://localhost:8081/api/offer/display",{ token: localStorage.getItem("token") })
      .then((response) => {
        console.log(response)
        
      })
      .catch((error) => {
        console.log(error);
      });

    const handel_add_offer = () => {
      navigate("/offer")
    }

  return (<>
  
  <button onClick={()=>{navigate("/display")}}> show my cretated offer</button>
  <button onClick={handel_add_offer}>take me to add offer</button>

  </>)
};
export default User_CouponDisplay;
