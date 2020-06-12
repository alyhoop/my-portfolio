import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import '../SCSS/Portfolio.scss';

class Portfolio extends Component {
  render(){
    return(
      //<div className="container-fluid portfolio justify-content-center row">
      //   <div className="portfolio-info">
      //     <p>I have experience in JavaScript, React, Angular, HTML5/CSS3, SASS, Bootstrap & Git.</p>
      //   </div>
      // </div>
      <Card style={{ width: '18rem', margin: '30%'}}>
				<Card.Img variant="top" src="https://picsum.photos/100/100" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						I have experience in JavaScript, React, Angular, HTML5/CSS3, SASS, Bootstrap & Git.
    				</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
    );
  }
}


export default Portfolio;
