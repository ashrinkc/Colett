import React from "react";
import Navbarr from "../../Components/Navbar/Navbar";
import "./about.css";
const About = () => {
  return (
    <div>
      <Navbarr />
      <div className="aboutUsMain">
        <div className="aboutUs">
          <div>
            <img src="https://media.istockphoto.com/photos/we-all-deserve-a-fresh-break-from-the-city-picture-id1326994520?b=1&k=20&m=1326994520&s=170667a&w=0&h=h9h0d6bcN0Mrr2S7iVzS331BM7U8G3XyCWiVeVjh-AI=" />
          </div>
          <div className="aboutUsInfo">
            <h1>About Us</h1>
            <h5>Who we are (What The Name Represents)</h5>
            <p>
              COLETT is a brand of trust. We work in Synergy and co-work with
              different sections of our team to reach the goal. We believe in
              stronger foundation for a higher growth and the pillar lies in
              satisfying our clients and customers. We are London based company
              with in*depin expenence in monging residential properties. We work
              (create a sound living space where our tenant can call it a 'nome
              and build their dreams in it. We aspire to keep our tenants happy,
              producing an appeasing environment uolitinatne sogce ondine
              communi
            </p>
            <button>Find Out More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
