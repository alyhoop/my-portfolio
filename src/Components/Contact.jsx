import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }


      // <Container-fluid className="contact">
      //   <Row>
      //     <Col>
      //     <p>alyssavladahooper@gmail.com</p>
      //     <a href="https://stackoverflow.com/users/13789454/alyssa-hooper">StackOverflow</a>
      //     <a href="https://www.codewars.com/users/alyhoop">Codewars</a>
      //     </Col>
      //     <Col></Col>
      //   </Row>



render() {
  const { status } = this.state;
  return (
    // <FontAwesomeIcon
    //   icon={faEnvelope}
    //   size="2x"
    //   id="contact email-icon"
    // />
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
      <input type="text" name="message" />
      {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
      {status === "ERROR" && <p>Ooops! There was an error.</p>}
    </form>
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
