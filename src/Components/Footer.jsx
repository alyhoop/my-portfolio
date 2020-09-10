import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
     render(){
       return (
         <span className="fixed-bottom container-fluid contact p-3 my-3">
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
