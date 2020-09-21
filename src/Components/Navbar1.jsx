import React, { Component, Nav } from 'react';
import  Navbar from 'react-bootstrap/Navbar'

class Navbar1 extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand to="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/Portfolio">Portfolio</Nav.Link>
          <Nav.Link to="/Contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Navbar1;
