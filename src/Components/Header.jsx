import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import '../SCSS/Header.scss';


class Header extends Component {
     render(){
       return (
        /* <Transition in={this.state.in} timeout={150}>
  {state => (
    <MyComponent className={`fade fade-${state}`} />
  )}
</Transition>*/
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
