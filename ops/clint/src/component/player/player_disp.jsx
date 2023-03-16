import React, { useContext } from "react";
import { Context as PlayerContext } from "../player/player_context";
import { useNavigate } from "react-router-dom";
import "./player_disp.css"

const Player_disp = () => {
  const navigate = useNavigate();
  const { Data } = useContext(PlayerContext);
  console.log(Data);

  // Check if Data is an array
  if (!Array.isArray(Data)) {
    return (
      <>
        <button onClick={() => navigate("/")}>click to go to home page</button>
      </>
    );
  }

  return (
    <> <h1 className="heading">Here are you discount coupons</h1>
    <div className="card-container">
     {Data.map((key, index) => {
       return (
         <div className="card" key={key.offer_id}>
           <p className="offer_id">{key?.offer_id}</p>
           <p className="offertitle">{key?.offer_title}</p>
           <p className="offer_desc">{key?.offer_description}</p>
           <p className="price">Price :{key?.pricing}</p>
         </div>
       );
     })}
   </div>
    </>
    
  );
};

export default Player_disp;
