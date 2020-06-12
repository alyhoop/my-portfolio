import React, { Component} from 'react'
import '../SCSS/Portfolio.scss'

class Portfolio extends Component {
  render(){
    return(
      <div className="container-fluid portfolio justify-content-center row">
        <div className="portfolio-info">
          <p>I have experience in JavaScript, React, Angular, HTML5/CSS3, SASS, Bootstrap & Git.</p>
        </div>
      </div>
    );
  }
}

export default Portfolio;
