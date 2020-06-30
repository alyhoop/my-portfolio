import React, { Component } from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';
import '../SCSS/Portfolio.scss';

class Portfolio extends Component {
  render(){
    return(
      <div className="portfolio">
        <CardDeck>
        <Card style={{flex:1, backgroundColor:'#495057ff'}}>
          <Card.Img
            variant="top"
            src="./Portfolio.jpg"
          />
          <Card.Body>
            <Card.Title>Portfolio</Card.Title>
            <Card.Text>
              <p>
                My role: Creator
              </p>
              <p>
                Problem: Wanting a responsive, modern SPA to display my progress.
              </p>
              <p>
                Solution: Researched top-rated designs on Dribbble and
                implemented a minimalist inspired page to demonstrate competency
                using responsive design techniques.
              </p>
              <div className="button flex-container">
              <a href="https://github.com/alyhoop/my-portfolio">
                <Button
                  style={{backgroundColor:'#343a40ff'}}
                  variant="secondary"
                  className="button-1"
                >
                  Code
                </Button>
              </a>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{flex:1, backgroundColor:'#495057ff'}}>
          <Card.Img
            className="img"
            variant="top"
            src="./Business.jpg"
          />
          <Card.Body>
            <Card.Title>Business Page Reformat</Card.Title>
            <Card.Text>
            <p>
              My role: Contributor
            </p>
            <p>
              Problem: About me section needed to be reformatted.
            </p>
            <p>
              Solution: Bootstrap was used to dynamically re-style this page. Hard
              coding values was avoided to accomodate varying viewports and this
              library was already in use on this website.
            </p>
            <div className="button flex-container">
            <a href="http://www.shskincare.com/">
              <Button
                style={{backgroundColor:'#343a40ff'}}
                variant="secondary"
                className="button-2">
                Project
              </Button>
            </a>
            <a href="https://github.com/shskincare/shskincare.github.io">
              <Button
                style={{backgroundColor:'#343a40ff'}}
                variant="secondary"
                className="button-2">
                Code
              </Button>
            </a>
            </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{flex:1, backgroundColor:'#495057ff'}}>
          <Card.Img
            variant="top"
            src="./list.jpg"
          />
          <Card.Body>
            <Card.Title>Modern List</Card.Title>
            <Card.Text>
            <p>
              My role: Creator
            </p>
            <p>
              Problem: Creating a styled list
            </p>
            <p>
              Solution: I used Dribbble inspired styling for a modern check list,
              that dynamically greets the user based on time of day.
            </p>
            <div className="button flex-container">
              <Button
                style={{backgroundColor:'#343a40ff'}}
                variant="secondary"
                className="button-3">
                Code
              </Button>
            </div>
            </Card.Text>
          </Card.Body>
        </Card>
        </CardDeck>
      </div>
    );
  }
}


export default Portfolio;
