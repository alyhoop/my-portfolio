import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../CSS/Navbar.css';

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" sticky="top" fixed="top">
         <Nav className="mr-auto">
           <Nav.Link href="#home">Home</Nav.Link>
           <Nav.Link href="#portfolio">Portfolio</Nav.Link>
           <Nav.Link href="#contact">Contact</Nav.Link>
         </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
