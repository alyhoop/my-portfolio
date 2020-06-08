import React, { Component } from 'react';
import '../SCSS/Contact.scss';

class Contact extends Component {
  render(){
    return(
      <div className="contact">
        <span className="contact-github">
          <i class="fab fa-github-square"></i>
        </span>
        <span className="contact-linkedin">
          <i class="fab fa-linkedin"></i>
        </span>
        <span className="contact-email">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    );
  }
}

export default Contact;
