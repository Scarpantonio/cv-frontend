import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <div className="navBar">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand className="logo" href="#home">
          Scarpantonio
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#about">about</Nav.Link>
            <Nav.Link href="#work">work</Nav.Link>
            <Nav.Link as={Link} to="/contact">
              contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
