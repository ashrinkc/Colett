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
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navv">
      <Container>
        <Navbar.Brand href="#home" className="logoo">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Nav.Link className="navItems" href="#home">
                Home
              </Nav.Link>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Nav.Link className="navItems" href="#memes">
                About Us
              </Nav.Link>
            </Link>
            <Nav.Link className="navItems" href="#features">
              Services
            </Nav.Link>
            <Link to="/ourHome" style={{ textDecoration: "none" }}>
              <Nav.Link className="navItems" href="#pricing">
                Our Homes
              </Nav.Link>
            </Link>
            <Link to="/investors" style={{ textDecoration: "none" }}>
              <Nav.Link className="navItems" href="#pricing">
                Investors
              </Nav.Link>
            </Link>
            <Link to="/gallery" style={{ textDecoration: "none" }}>
              <Nav.Link className="navItems" href="#pricing">
                Gallery
              </Nav.Link>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Nav.Link className="navItems" href="#pricing">
                Contact Us
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
