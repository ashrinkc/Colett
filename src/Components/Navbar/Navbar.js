import React from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "../../Images/logoo.png";
const Navbarr = () => {
  return (
    <div className="mainNavbb">
      <Navbar collapseOnSelect expand="lg" variant="dark" className="navv">
        <Container>
          <Navbar.Brand href="#home" className="logoo">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="navIn">
              <Link
                className="navItems"
                to="/"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
              <Link
                className="navItems"
                to="/about"
                style={{ textDecoration: "none" }}
              >
                About Us
              </Link>
              <Link
                className="navItems"
                to="/about"
                style={{ textDecoration: "none" }}
              >
                Services
              </Link>
              <Link
                className="navItems"
                to="/ourHome"
                style={{ textDecoration: "none" }}
              >
                Our Homes
              </Link>
              <Link
                className="navItems"
                to="/investors"
                style={{ textDecoration: "none" }}
              >
                Investors
              </Link>
              <Link
                className="navItems"
                to="/gallery"
                style={{ textDecoration: "none" }}
              >
                Gallery
              </Link>
              <Link
                className="navItems"
                to="/contact"
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
