// NavBar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; // Using React Bootstrap for layout and styling

const NavBar = ({ selectSection }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* Link for About Me section */}
          <Nav.Link
            onClick={() => selectSection('About Me')}
            className="nav-link"
          >
            About Me
          </Nav.Link>

          {/* Link for Portfolio section */}
          <Nav.Link
            onClick={() => selectSection('Portfolio')}
            className="nav-link"
          >
            Portfolio
          </Nav.Link>

          {/* Link for Resume section */}
          <Nav.Link
            onClick={() => selectSection('Resume')}
            className="nav-link"
          >
            Resume
          </Nav.Link>

          {/* Link for Contact section */}
          <Nav.Link
            onClick={() => selectSection('Contact')}
            className="nav-link"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

