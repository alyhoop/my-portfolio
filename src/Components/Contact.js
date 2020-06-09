import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../SCSS/Contact.scss';



class Contact extends Component {
  render(){
    return(
      <div className="container fixed-bottom contact">
        <span className="contact-github">
          <i class="fab fa-github-square fa-2x"></i>
        </span>
        <span className="contact-linkedin">
          <i class="fab fa-linkedin fa-2x"></i>
        </span>
        <span className="contact-email">
          <i class="fas fa-envelope fa-2x"></i>
        </span>
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    );
  }
}


export default Contact;
