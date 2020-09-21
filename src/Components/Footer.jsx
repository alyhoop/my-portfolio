import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faStackOverflow, faGalacticSenate } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
     render(){
       return (
         <span className="content-wrap contact p-3 my-3">
          <Container className="footer-container">
            <Col>
             <FontAwesomeIcon
               icon={faEnvelope}
               size="1x"
               id="icon email-icon"
             />
             <a className="icon-text" href="mailto:alyssavladahooper@gmail.com">alyssavladahooper@gmail.com</a>
             <FontAwesomeIcon
               icon={faStackOverflow}
               size="1x"
               id="icon so-icon"
             />
             <a href="https://stackoverflow.com/users/13789454/alyssa-hooper" className="icon-text">My StackOverflow</a>
             <FontAwesomeIcon
               icon={faGalacticSenate}
               size="1x"
               id="icon galactic-icon"
             />
             <a href="https://www.codewars.com/users/alyhoop" className="icon-text">My Codewars</a>
             </Col>
            </Container>
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
           <span className="contact-resume">
             <a href="./ResumeAHooper.pdf">
               <FontAwesomeIcon
                 icon={faFile}
                 size="2x"
                 id="resume"
               />
             </a>
           </span>
         </span>
    );
  }
}




export default Footer;
