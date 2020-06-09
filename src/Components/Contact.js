import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../SCSS/Contact.scss';



class Contact extends Component {
  render(){
    return(
      <div className="container fixed-bottom contact">
        <span className="contact-github">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
          />
        </span>
        <span className="contact-linkedin">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
          />
        </span>
        <span className="contact-email">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
          />
        </span>
      </div>
    );
  }
}


export default Contact;
