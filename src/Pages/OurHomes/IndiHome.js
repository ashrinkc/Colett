import React from "react";
import "./ourhomes.css";
import { useNavigate } from "react-router-dom";
const IndiHome = (props) => {
  const navigate = useNavigate();
  return (
    <div className="ourHome">
      <div className="ourHomeTop">
        <img src={props.items.image} />
      </div>
      <div className="ourHomeMid">
        <img src={props.items.imageo} />
        <img src={props.items.imaget} />
        <img src={props.items.imagef} />
      </div>
      <div className="ourHomeBottom">
        <div>
          <h1>{props.items.house}</h1>
          <p>{props.items.location}</p>
        </div>
        <div>
          <h2>Property Type</h2>
          <p>{props.items.property}</p>
        </div>
        <div className="facilities">
          <div className="inFacilities">
            <h2>Facilities</h2>
            <div className="faci">
              <p>3 Bed Rooms</p>
              <p>1 Living Rooms</p>
              <p>2 Washroom</p>
            </div>
            <div className="faci">
              <p>Guset Toilet</p>
              <p>Spacious Garden</p>
              <p>Parking Space</p>
            </div>
          </div>
        </div>
        <div>
          <h2>Description</h2>
          <p>
            Located in deligthful South Woodford which is on the central line,
            this area offers a range of shops, reataurants, pubs/bars as well as
            its own cinema. South Woodford is a family and professional oriented
            area{" "}
          </p>
        </div>
        <button onClick={() => navigate("/contact")}>CONTACT</button>
      </div>
    </div>
  );
};

export default IndiHome;
