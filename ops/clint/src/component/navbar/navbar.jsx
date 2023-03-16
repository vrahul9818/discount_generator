import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        
      </ul>
      <p>how to use it </p>
        <p>first create the offer by signup in "offer generate login" </p>
        <p>then create offer by clicking on "take me to add offer"</p>
        <p>after then move to "home" page and fill Playername and Age</p>
        <p>now you will see exciting offer</p>
    </nav>
  );
};

export default Navbar;
