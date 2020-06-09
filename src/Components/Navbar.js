import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../SCSS/Navbar.scss';

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" sticky="top" fixed="top">
         <Nav className="mr-auto">
           <Nav.Link href="/">Home</Nav.Link>
           <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
           <Nav.Link href="/Contact">Contact</Nav.Link>
         </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
