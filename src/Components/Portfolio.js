import React, { Component } from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';
import '../SCSS/Portfolio.scss';

class Portfolio extends Component {
  render(){
    return(
      <div className="portfolio">
        <CardDeck>
        <Card style={{flex:1, backgroundColor:'#495057ff'}}>
          <Card.Img variant="top" src="./tile.jpg" />
          <Card.Body>
            <Card.Title>Project</Card.Title>
            <Card.Text>
              My role: qwe <br/>
              Problem: qwe <br/>
              Solution: qwe <br/>
              <Button
                style={{backgroundColor:'#343a40ff'}}
                variant="secondary"
                className="button">
                Project
              </Button>
              <Button
                style={{backgroundColor:'#343a40ff'}}
                variant="secondary"
                className="button">
                Code
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{flex:1, backgroundColor:'#495057ff'}}>
          <Card.Img variant="top" src="./tile.jpg" />
          <Card.Body>
            <Card.Title>Project</Card.Title>
            <Card.Text>
            My role: qwe <br/>
            Problem: qwe <br/>
            Solution: qwe <br/>
              <Button
                style={{backgroundColor:'#343a40ff'}}
                variant="secondary"
                className="button">
                Project
              </Button>
              <Button
                style={{backgroundColor:'#343a40ff'}}
                variant="secondary"
                className="button">
                Code
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{flex:1, backgroundColor:'#495057ff'}}>
          <Card.Img variant="top" src="./tile.jpg" />
          <Card.Body>
            <Card.Title>Project</Card.Title>
            <Card.Text>
            My role: qwe <br/>
            Problem: qwe <br/>
            Solution: qwe <br/>
              <Button
                style={{backgroundColor:'#343a40ff'}}
                variant="secondary"
                className="button">
                Project
              </Button>
              <Button
                style={{backgroundColor:'#343a40ff'}}
                variant="secondary"
                className="button">
                Code
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
        </CardDeck>
      </div>
    );
  }
}


export default Portfolio;
