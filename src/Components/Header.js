import React, { Component } from 'react';
import '../SCSS/Header.scss';

class Header extends Component{
  render(){
    return (
      <div className="landing flex row justify-content-center">
          <div className="title row">
            I'm Alyssa Hooper; an aspiring junior developer.
          </div>
      </div>
    );
  }
}

export default Header;
