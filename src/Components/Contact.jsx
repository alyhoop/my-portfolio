import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


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
      <div className="container-fluid contact p-3 my-3">
        <FontAwesomeIcon
          icon={faEnvelope}
          size="2x"
          id="email"
        />
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
        <span className="fixed-bottom container-fluid contact p-3 my-3">
          <span className="contact-github">
            <a href="https://github.com/alyhoop">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                id="github"
              />
            </a>
          </span>
          <span className="contact-linkedin">
            <a href="https://www.linkedin.com/in/alyssa-hooper-300b6818a/">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                id="linkedin"
              />
            </a>
          </span>
          <span className="contact-resume">
            <a href="./ResumeAHooper.pdf">
              <FontAwesomeIcon
                icon={faFile}
                size="2x"
                id="resume"
              />
            </a>
          </span>
        </span>
      </div>
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
