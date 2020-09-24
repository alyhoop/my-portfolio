import React, { Component } from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';

class Portfolio extends Component {
  render(){
    return(
      <div className="portfolio">
        <CardDeck>
        <Card style={{flex: 1}}>
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
                variant="light"
                className="button-2">
                Project
              </Button>
            </a>
            <a href="https://github.com/shskincare/shskincare.github.io">
              <Button
                variant="light"
                className="button-2">
                Code
              </Button>
            </a>
            </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{flex:1}}>
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
            <a href="https://github.com/alyhoop/project-3">
              <Button
                variant="light"
                className="button-3">
                Code
              </Button>
            </a>
            </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{flex:1}}>
          <Card.Img
            variant="top"
            src="./Menu.jpg"
          />
          <Card.Body>
            <Card.Title>Menu Concept</Card.Title>
            <Card.Text>
              <p>
                My role: Creator
              </p>
              <p>
                Problem: Designing an asthetically pleasing menu concept to study
                CSS Grid.
              </p>
              <p>
                Solution: CSS Grid and Icons were used to style an organized
                menu.
              </p>
              <div className="button flex-container">
              <a href="https://codepen.io/alyhoop/pen/BaKrqEL">
                <Button
                  variant="light"
                  className="button-5"
                >
                  Project
                </Button>
              </a>
              <a href="https://github.com/alyhoop/practice-scripts/tree/master/CSS%20Grid">
                <Button
                  variant="light"
                  className="button-4"
                >
                  Code
                </Button>
              </a>
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
