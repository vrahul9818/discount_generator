import React, { useState } from 'react';
import "./coupon_add.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const OfferForm = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [offer, setOffer] = useState({
    token: localStorage.getItem('token'),
    offer_id: '',
    offer_title: '',
    offer_description: '',
    offer_sort_order: 0,
    content: "",
    target: '',
    pricing: "0"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOffer((prevOffer) => ({ ...prevOffer, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!offer.offer_title || !offer.offer_description || !offer.content || !offer.pricing) {
      setError('Please fill in all the required fields.');
      return;
    }

    axios
      .post("http://localhost:8081/api/offer/coupons", offer)
      .then((response) => {
        console.log(response);
        navigate("/display");
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(offer);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='offer_id'>Offer ID:</label>
        <input type="text" name='offer_id' value={offer.offer_id} onChange={handleChange} />

        <label htmlFor='offer_title'>Offer Title:</label>
        <input type="text" name='offer_title' value={offer.offer_title} onChange={handleChange} />

        <label htmlFor='offer_description'>Offer Description:</label>
        <input type="text" name='offer_description' value={offer.offer_description} onChange={handleChange} />

        <label htmlFor='offer_sort_order'>Offer Sort Order:</label>
        <input type="number" name='offer_sort_order' value={offer.offer_sort_order} onChange={handleChange} />

        <label htmlFor='content'>Content:</label>
        <textarea name="content" value={offer.content} onChange={handleChange} />

        <label htmlFor='target'>Target:</label>
        <input placeholder='age > 30 and installed_days < 5' type="text" name='target' value={offer.target} onChange={handleChange} />

        <label htmlFor='pricing'>Pricing:</label>
        <input type="number" name='pricing' value={offer.pricing} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default OfferForm;
