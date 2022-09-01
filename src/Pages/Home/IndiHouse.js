import React from "react";

const IndiHouse = (props) => {
  return (
    <div className="indiHouse">
      <div className="indiHouseInfo">
        <img src={props.item.img} />
        <h3>{props.item.title}</h3>
        <p>{props.item.desc}</p>
        <button>Find Out More</button>
      </div>
    </div>
  );
};

export default IndiHouse;
