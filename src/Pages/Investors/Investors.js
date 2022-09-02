import React from "react";
import Navbarr from "../../Components/Navbar/Navbar";
import "./investors.css";
import glass from "../../Images/glassHouse.jpg";
const Investors = () => {
  return (
    <div>
      <Navbarr />
      <div className="mainInvestor">
        <div className="inve">
          <div className="inveTop">
            <div className="inveInfo">
              <h1>Know Our Investors</h1>
              <h2>Help you find the very best</h2>
              <button>Get Started</button>
            </div>
            <div>
              <img src={glass} />
            </div>
          </div>
          <div className="inveData">
            <p>
              <b>COLETT </b> is a brand of trust. We work in Synergy and co-work
              with different sections of our team to reack the goal. We believe
              in stronger foundation for a higher growth and the pillar lies in
              satisfying our clients and customers. We are London based company
              with in-depth experience in managing residential properties.
            </p>
          </div>
          <div className="ourInvestor">
            <h1>Our Investors</h1>
            <div className="investorContainer">
              <div className="investors">
                <div className="investorsInside">
                  {/* <img src="https://images.unsplash.com/photo-1623184663110-89ba5b565eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21pbGluZyUyMG1hbnxlbnwwfHwwfHw%3D&w=1000&q=80" /> */}
                  <h2>James Schumer</h2>
                  <p>Investor of COLETT</p>
                  <button>Contact</button>
                </div>
              </div>
              <div className="investors">
                <div className="investorsInside">
                  {/* <img src="https://images.unsplash.com/photo-1623184663110-89ba5b565eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21pbGluZyUyMG1hbnxlbnwwfHwwfHw%3D&w=1000&q=80" /> */}
                  <h2>Sunny Thakuri</h2>
                  <p>Investor of COLETT</p>
                  <button>Contact</button>
                </div>
              </div>
              <div className="investors">
                <div className="investorsInside">
                  {/* <img src="https://images.unsplash.com/photo-1623184663110-89ba5b565eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21pbGluZyUyMG1hbnxlbnwwfHwwfHw%3D&w=1000&q=80" /> */}
                  <h2>Kelly Rimey</h2>
                  <p>Investor of COLETT</p>
                  <button>Contact</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
