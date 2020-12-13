import React from "react";
import { Nav } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer-container">
        <Nav
          id="top-footer"
          className=" justify-content-center"
          activeKey="/home"
        >
          <Nav.Item>
            <Nav.Link eventKey="link-1">work</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">contact</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav>Copyright 2020 Carlos Scarpantonio</Nav>
          </Nav.Item>
        </Nav>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="">Terms</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="">Privacy</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}
