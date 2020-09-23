import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar justify-content-end fixed-top">
        <Nav.Item className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </Nav.Item>
        <Nav.Item className="navbar-item">
          <Link to="/Portfolio" className="navbar-link">Portfolio</Link>
        </Nav.Item>
        <Nav.Item className="navbar-item">
          <Link to="/Contact" className="navbar-link">Contact</Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default Navbar;
