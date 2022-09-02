import React from "react";
import { useNavigate } from "react-router-dom";

const IndiHouse = (props) => {
  const navigate = useNavigate();
  return (
    <div className="indiHouse">
      <div className="indiHouseInfo">
        <img src={props.item.img} />
        <h3>{props.item.title}</h3>
        <p>{props.item.desc}</p>
        <button onClick={() => navigate("/ourHome")}>Find Out More</button>
      </div>
    </div>
  );
};

export default IndiHouse;
