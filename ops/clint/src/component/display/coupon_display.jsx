import React, { useState, useEffect } from "react";
import axios from "axios";
import "./coupon_display.css";
import { useNavigate } from "react-router-dom";

const CouponDisplay = () => {
  const navigate = useNavigate();
  const [coupons, setCoupons] = useState([]);
  const token = localStorage.getItem("token");
  // console.log(token);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/offer/coupons", {
        headers: {
          Authorization: `Bearer${token}`,
        },
      })
      .then((response) => {
        console.log(response, "response");
        setCoupons(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:8081/api/offer/delete", {
        data: {
          id: id,
        },
      })
      .then((res) => {
        console.log(res);
        setCoupons(coupons.filter((coupon) => coupon._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    navigate("/offer");
  };

  if (!coupons.length) {
    return (
      <>
        <div>you have not added any item to add </div>
        <button onClick={handleClick}>add item </button>
      </>
    );
  }

  return (
    <>
      <div className="header">Offer created by you</div>
      <div className="coupon-display-container">
        {coupons.map((coupon, index) => (
          <div className="coupon-card" key={index}>
            <div className="card-body">
              <h5 className="card-title">{coupon?.offer_title}</h5>
              <p className="card-text">{coupon?.offer_description}</p>
              <p className="content">{coupon?.content}</p>
              <p className="price">{coupon?.pricing}</p>
              <button onClick={() => handleDelete(coupon?._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CouponDisplay;
