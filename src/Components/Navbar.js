import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../CSS/index.css';

function NavigationBar() {
return(
    <Navbar bg="dark" variant="dark" sticky="top" fixed="top">
     <Navbar href="#home">AlyHoop</Navbar>
     <Nav className="mr-auto">
       <Nav.Link href="#home">Home</Nav.Link>
       <Nav.Link href="#portfolio">Portfolio</Nav.Link>
       <Nav.Link href="#contact">Contact</Nav.Link>
     </Nav>
    </Navbar>
  );

}

export default NavigationBar;
