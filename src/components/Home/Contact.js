import React from "react";
import Title from "../Globals/Title";

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact us"></Title>
      <div className="row">
        <div className="col-10 col-sm-8 com-md-6 mx-auto">
          <form action="https://formspree.io/guilhem.thomas1@orange.fr" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="id"
                placeholder="Name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="_replyto"
                id="id"
                placeholder="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                className="form-control"
                rows="5"
                id="description"
                placeholder="Your description"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5" >Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
