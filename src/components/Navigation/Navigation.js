import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";
import logo from "../../assets/logo.png";
const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="right" id="basic-navbar-nav">
        <Nav >
          <Nav.Link href="#home">Home Page</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
          <Nav.Link href="#link">Pages</Nav.Link>
          <Nav.Link href="#link">Shop</Nav.Link>
          <Nav.Link href="#link">Contact us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
