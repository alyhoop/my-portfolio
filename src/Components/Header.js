import React, { Component } from 'react';
import '../SCSS/Header.scss';

class Header extends Component{
  render(){
    return (
      <div className="landing">
        <span className="landing-title">
          Hi there, I'm Alyssa Hooper;
        </span>
        <br/>
        <span className="landing-about"> I'm a junior web developer!
        </span>
      </div>
    );
  }
}

export default Header;
