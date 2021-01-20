import React from "react";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <footer className="footer footer-sm footer-padding" id="Contact">
        <h1 className="title has-text-centered">Contact me</h1>
        <div className="columns is-variable is-desktop">
          <div className="column is-7-desktop is-offset-3">
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/myyndoaw"
              method="POST"
              className="field"
            >
              {status === "SUCCESS" && (
                <div
                  className="notification is-primary is-light"
                  id="delete-Notification"
                >
                  <b>Message sent, Thank you!</b>
                </div>
              )}
              {status === "ERROR" && (
                <div
                  className="notification is-danger is-light"
                  id="delete-Notification"
                >
                  <b>Ooops! There was an error.</b>
                </div>
              )}
              <div className="control">
                <label className="label">Name</label>
                <input type="text" name="name" className="input" />
              </div>
              <div className="control">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" />
              </div>
              <div className="control">
                <label className="label">Message</label>
                <textarea
                  type="text"
                  name="message"
                  className="textarea"
                ></textarea>
              </div>
              <div className="control" style={{ marginTop: "0.8rem" }}>
                <button className="button">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="container is-fluid" style={{ paddingLeft: "0px" }}>
          <div className="is-inline-flex">
            <h1 className="has-text-left">
              <b>socials</b>
            </h1>
          </div>
          <div className="has-text-left">
            <i className="fab fa-linkedin fa-1x"></i>
            <i className="fab fa-github fa-1x"></i>
          </div>
        </div>
      </footer>
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
