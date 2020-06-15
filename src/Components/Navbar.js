import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
MDBHamburgerToggler } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import '../SCSS/Navbar.scss';

class Navbar extends Component {
state = {
  collapse1: false,
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

toggleSingleCollapse = collapseId => {
  this.setState({
    ...this.state,
    [collapseId]: !this.state[collapseId]
  });
}

render() {
  return (
    <Router>
      <MDBNavbar
        color="bg-dark"
        className="navbar"
      >
        <MDBContainer>
          <MDBNavbarBrand>
          </MDBNavbarBrand>
          <MDBHamburgerToggler
            color="#6c757dff"
            id="hamburger1"
            onClick={()=> this.toggleSingleCollapse('collapse1')}
          />
            <MDBCollapse isOpen={this.state.collapse1} navbar>
              <MDBNavbarNav
                left
               >
                <MDBNavItem
                active
                >
                  <MDBNavLink className="navbar" to="#">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink className="navbar" to="#Portfolio">Portfolio</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink className="navbar"to="#Contact">Contact</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </Router>
    );
  }
}

export default Navbar;
