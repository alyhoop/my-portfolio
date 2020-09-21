import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
        <Row className="contact-container-row-form">
          <form
              onSubmit={this.submitForm}
              action="https://formspree.io/meqrydly"
              method="POST"
            >
            <label>Your Email:</label>
            <input type="email" name="email" />
            <label>Subject:</label>
            <input type="text" name="subject" />
            <label>Your Message:</label>
            <input type="text" name="message" placeholder="Write something..." className="input-message"/>
            {status === "SUCCESS" ? <p>Thanks!</p> : <button className="contact-container-row-button">Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
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
