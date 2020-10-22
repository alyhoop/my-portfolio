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
                className="button-1">
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
            src="./Breast Check.png"
          />
          <Card.Body>
            <Card.Title>Breast Check</Card.Title>
            <Card.Text>
            <p>
              My role: Contributor/Sole Developer
            </p>
            <p>
              Problem: A Girls In Tech Hackathon submission addressing the disparity
              some face while finding screening sites and common information
              about breast cancer.
            </p>
            <p>
              Solution: I created a mobile prototype using React.js that combined
              React-Google-Maps/API along with a React-Bootstrap to create a one stop
              app where women could locate their nearest screening center or find
              information about breast cancer in a drawer.
            </p>
            <div className="button flex-container">
            <a href="https://devpost.com/software/breast-check?ref_content=user-portfolio&ref_feature=in_progress">
              <Button
                variant="light"
                className="button-3">
                Project
              </Button>
            </a>
            <a href="https://github.com/alyhoop/Girls-In-Tech-Hackathon">
              <Button
                variant="light"
                className="button-4">
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
                  className="button-6"
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
