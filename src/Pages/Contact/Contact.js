import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar.js";
import Iframe from "react-iframe";
import "./contact.css";
import axios from "axios";
const Contact = () => {
  const [firstName, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [contact, setPhone] = useState();
  const [address, setAddress] = useState();
  const [message, setMessage] = useState();
  const submitData = (e) => {
    e.preventDefault();
    const fullName = firstName.trim() + " " + lastName.trim();
    const data = {
      fullName,
      email,
      contact,
      address,
      message,
    };
    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setMessage("");
    axios.post("http://localhost:3000/api/v1/contact", data).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <Navbar />
      <div className="mainContactContainer">
        <div className="contactConInfo">
          <h1>CONTACT US</h1>
          <p>Any questions or remarks? Just write us a message</p>
        </div>
        <div className="contactContainer">
          <div className="contactItems">
            <div className="contactItemsInfo">
              <h2>Contact Information</h2>
              <p>
                Fill up the form and our team will get back to you within 24
                hours.
              </p>
              <h5>+977 9813 123455</h5>
              <h5>ashrin@gmail.com</h5>
              <h5>Street minnesota</h5>
            </div>
          </div>
          <div>
            <form>
              <div className="inputField">
                <div className="inputInfo">
                  <div>
                    <h5>First Name</h5>
                    <input
                      value={firstName}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <h5>E-Mail</h5>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="inputInfo">
                  <div>
                    <h5>Last Name</h5>
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div>
                    <h5>Phone</h5>
                    <input
                      value={contact}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mobileInput">
                    <div>
                      <h5>Address</h5>
                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div>
                      <h5>Message</h5>
                      <input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    <div className="contactBtnContainer">
                      <button className="contactSubmitbtn">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="BigMsg">
                <div>
                  <h5>Address</h5>

                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="msgInput"
                    // placeholder="Manage Property / Renting Property / Others"
                  />
                </div>
                <div>
                  <h5>Message</h5>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="5"
                    cols="65"
                  />
                </div>
                <div className="contactBtnContainer">
                  <button className="contactSubmitbtn" onClick={submitData}>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="map">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56096.85759164457!2d81.07041065789676!3d28.50803506142142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a20c3137c6209b%3A0xef662ab7d48804c8!2sTikapur%2010901!5e0!3m2!1sen!2snp!4v1655166324678!5m2!1sen!2snp"
            width="100%"
            height="450"
          ></Iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
