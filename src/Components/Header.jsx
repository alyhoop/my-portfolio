import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import '../SCSS/Header.scss';


class Header extends Component {
  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  };

  const Fade = ({ in: inProp }) => (
    <Transition in={inProp} timeout={duration}>
      {state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          I'm a fade Transition!
        </div>
      )}
    </Transition>
  );

     render(){
       return (
         <div
           className="landing flex row justify-content-center"
           >
           <div className="title row">
             <p>
               Alyssa Hooper
             </p>
           </div>
           <div className="job row">
             <p>
               lifelong learner; aspiring junior developer
             </p>
           </div>
         </div>
    );
  }
}




export default Header;
