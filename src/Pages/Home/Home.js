import React from "react";
import Navbarr from "../../Components/Navbar/Navbar";
import "./home.css";
import IndiHouse from "./IndiHouse";
import { houseData } from "./IndiHouseData.js";
import homeomageone from "../../Images/homeImgone.jpeg";
import homeomagetwo from "../../Images/homeImgtwo.jpeg";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbarr />
      <div className="mainHome">
        <div className="home">
          <div className="homeHead">
            <div className="homeHeadImg">
              <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80" />
            </div>
            <div className="homeHeadContent">
              <h1>COLETT</h1>
              <h5>We Invest & Manage Properities</h5>
              <button onClick={() => navigate("/contact")}>Contact Us</button>
            </div>
          </div>
          <div className="colletTrust">
            <div className="trustInfo">
              <h2>COLETT</h2>
              <p>
                <b>COLETT </b>is a brand of trust. We work in Synergy and
                co-work with different sections of our team to reack the goal.
                We believe in stronger foundation for a higher growth and the
                pillar lies in satisfying our clients and customers. We are
                London based company with in-depth experience in managing
                residential properties.
              </p>
              <p>
                We enjoy an excellent reputation for our dependability,
                responsibility and efficiency
              </p>
              <button>Find Out More</button>
            </div>
            <div className="homeImg">
              <img src={homeomagetwo} />
              <img src={homeomageone} />
            </div>
          </div>
          <div className="ourProperty">
            <h2>Our Property List</h2>
            <div className="propertyList">
              <h5>House</h5>
              <h5>Apartment</h5>
              <h5>Land</h5>
              <h5>Hotels</h5>
              <h5>Hostels</h5>
            </div>
            <div className="indiHouseData">
              {houseData.map((item) => {
                return <IndiHouse item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
