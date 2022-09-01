import React from "react";
import Navbarr from "../../Components/Navbar/Navbar";
import IndiHome from "./IndiHome";
import "./ourhomes.css";
import { OHOMEDATA } from "./OurHomeData.js";
const OurHome = () => {
  return (
    <div>
      <Navbarr />
      <div className="ourHomeMain">
        {OHOMEDATA.map((items) => {
          return <IndiHome items={items} />;
        })}
      </div>
    </div>
  );
};

export default OurHome;
