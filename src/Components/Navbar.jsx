import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
MDBHamburgerToggler } from 'mdbreact';
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
      <MDBNavbar
        color="bg-dark"
        className="navbar fixed-top"
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
              <MDBNavbarNav>
                <MDBNavItem
                active
                >
                <MDBNavLink className="navbar navbar-item navbar-item-home" to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink className="navbar navbar-item navbar-item-portfolio" to="/Portfolio">Portfolio</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink className="navbar navbar-item navbar-item-contact" to="/Contact">Contact</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default Navbar;
