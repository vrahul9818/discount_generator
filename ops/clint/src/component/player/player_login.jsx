import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./player_login.css";
import { Context as PlayerContext } from "../player/player_context";


const Login_player = () => {
  const { Data,addData,setData } = useContext(PlayerContext) ;
  console.log(Data);
  const navigate = useNavigate();

  const [playername, setPlayername] = useState("");
  const [age, setAge] = useState("");

  const handleGetRequest = () => {
    axios
      .post("http://localhost:8081/api/offer/player_disp", {
        playername: playername,
        age: age,
      })
      .then((response) => {
        // console.log(response.data)
        addData(response.data)
        setData(response.data)
        console.log(Data,"dajjjj")
        
        navigate("/player_disp");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="player_login">
          <h1>player login</h1>
          <label htmlFor="playername">playername:</label>
          <input
            type="text"
            id="playername"
            name="playername"
            value={playername}
            onChange={(e) => {
              setPlayername(e.target.value);
            }}
          />
          <label htmlFor="age">Age:</label>
          <input
            type="age"
            id="age"
            name="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <button onClick={handleGetRequest}>submit</button>
        </div>
      </div>
    </>
  );
};

export default Login_player;
