import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Container className="contact-container">
        <Row className="contact-container-col justify-content-center">
          Contact Information
        </Row>
        <Row className="contact-container-row-form">
          <Col className="contact-container-col-form">
            <Row className="contact-container-row">
              <span className="span">
                Send me a message:
              </span>
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
              <Row className="contact-container-row-button">
                {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
              </Row>
            </form>
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
