import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <div>
      <Navbar
        className="logo"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Navbar.Brand href="#home">Scarpantonio</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#foo">work</Nav.Link>
            <Nav.Link href="#bar">contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#baz">baz</Nav.Link>
            <Nav.Link eventKey={2} href="#qux">
              qux
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigationbar;

// Dropdown
// <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//               <NavDropdown.Item href="#action/1">action 1</NavDropdown.Item>
//               <NavDropdown.Item href="#action/2">action 2</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3">action 3</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/4">action 4</NavDropdown.Item>
//             </NavDropdown>
