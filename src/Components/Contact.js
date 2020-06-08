import React, { Component } from 'react';
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
      </div>
    );
  }
}

export default Contact;
