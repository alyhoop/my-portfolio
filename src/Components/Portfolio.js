import React, { Component } from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';
import '../SCSS/Portfolio.scss';

class Portfolio extends Component {
  render(){
    return(
      <div className="portfolio">
        <CardDeck>
        <Card>
          <Card.Img variant="top" src="./tile.jpg" />
          <Card.Body>
            <Card.Title>Project</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="secondary">Go somewhere</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="./tile.jpg" />
          <Card.Body>
            <Card.Title>Project</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="secondary">Go somewhere</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="./tile.jpg" />
          <Card.Body>
            <Card.Title>Project</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="secondary">Go somewhere</Button>
          </Card.Footer>
        </Card>
        </CardDeck>
      </div>
    );
  }
}


export default Portfolio;
