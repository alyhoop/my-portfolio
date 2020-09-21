import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'

class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar justify-content-end fixed-top">
        <Nav.Item>
          <Nav.Link href="/" className="navbar-link">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Portfolio" className="navbar-link">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Contact" className="navbar-link">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default Navbar;
