import React, { Component } from 'react';
import '../SCSS/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

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
              lifelong learner; aspiring junior front-end developer
            </p>
          </div>
          <br/>
          <div className="scroll-arrow wrap bounce">
            <FontAwesomeIcon
              icon={faAngleDoubleDown}
              size="xs"
              id="scroll-arrow"
            />
          </div>
      </div>
    );
  }
}

export default Header;
