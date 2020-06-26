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
            width="40%"
            height="60%"
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
            width="40%"
            height="60%"
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
                className="button">
                Project
              </Button>
            </a>
            <a href="https://github.com/shskincare/shskincare.github.io">
              <Button
                style={{backgroundColor:'#343a40ff'}}
                variant="secondary"
                className="button">
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
            src="./tile.jpg"
          />
          <Card.Body>
            <Card.Title>Vue Boxes</Card.Title>
            <Card.Text>
            <p>
              My role: Contributor
            </p>
            <p>
              Problem: An API will be sending varying lengths of information
              inside boxes, so they needed to be styled reponsively to accomodate
              those changes.
            </p>
            <p>
              Solution: Vue's built-in breakpoints were utilized to achieve
              consistency within this project, rather than importing a library
              such as BootstrapVue that might slow loading time.
            </p>
            <div className="button flex-container">
              <Button
                style={{backgroundColor:'#343a40ff'}}
                variant="secondary"
                className="button">
                Project
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
