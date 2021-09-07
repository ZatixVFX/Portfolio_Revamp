import React from "react";

const Contact = () => {
  return (
    <div className="section">
      <h1 className="text-center pg-header pt-4 pb-1">Contact Me</h1>
      <div className="row justify-content-center">
        <div
          className="col-5 my-5 py-3 customForm"
          style={{ border: "4px solid black" }}
        >
          <form action="">
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Subject
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="3"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
