import React, { Component } from 'react';
import '../SCSS/Header.scss';

class Header extends Component{
  render(){
    return (
      <div className="landing flex row justify-content-center">
          <div className="title row">
            <p>
              Alyssa Hooper
            </p>
          </div>
          <div className="job row">
            <p>
              aspiring junior developer
            </p>
          </div>
      </div>
    );
  }
}

export default Header;
