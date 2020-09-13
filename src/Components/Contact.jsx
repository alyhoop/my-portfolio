import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faStackOverflow, faGalacticSenate } from '@fortawesome/free-brands-svg-icons';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Container fluid className="contact-container">
        <Row className="contact-container-col">
          <h2>Contact Information</h2>
        </Row>
        <Row>
          <Col className="contact-container-col">
            <Row className="contact-container-row">
              <p>
                Send me a message:
              </p>
            </Row>
              <form
                  onSubmit={this.submitForm}
                  action="https://formspree.io/meqrydly"
                  method="POST"
                >
              <Row className="contact-container-row">
                <label>Your Email:</label>
                <input type="email" name="email" />
              </Row>
              <Row className="contact-container-row">
                <label>Subject:</label>
                <input type="text" name="subject" />
              </Row>
              <Row className="contact-container-row">
                <label>Your Message:</label>
                <input type="text" name="message" className="input-message"/>
              </Row>
              <Row className="contact-container-row">
                {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
              </Row>
            </form>
          </Col>
        </Row>
        <Row>
        <Col className="contact-container-col">
          <Row className="contact-container-row">
            <p>
              Find me:
            </p>
          </Row>
          <Row className="contact-container-row">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="md"
              id="icon email-icon"
            />
            <span>alyssavladahooper@gmail.com</span>
          </Row>
          <Row className="contact-container-row">
            <FontAwesomeIcon
              icon={faStackOverflow}
              size="md"
              id="icon so-icon"
            />
            <a href="https://stackoverflow.com/users/13789454/alyssa-hooper">My StackOverflow</a>
          </Row>
          <Row className="contact-container-row">
            <FontAwesomeIcon
              icon={faGalacticSenate}
              size="md"
              id="icon galactic-icon"
            />
            <a href="https://www.codewars.com/users/alyhoop">My Codewars</a>
          </Row>
        </Col>
        </Row>
      </Container>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
