import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../SCSS/Contact.scss';


class Contact extends Component {
  render(){
    return(
      <div className="container fixed-bottom contact">
        <span className="contact-github">
          <a href="https://github.com/alyhoop">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              id="github"
            />
          </a>
        </span>
        <span className="contact-linkedin">
          <a href="https://www.linkedin.com/in/alyssa-hooper-300b6818a/">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              id="linkedin"
            />
          </a>
        </span>
        <span className="contact-email">
          <a href="mailto:alyssavladahoop@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              id="email"
            />
          </a>
        </span>
      </div>
    );
  }
}


export default Contact;
