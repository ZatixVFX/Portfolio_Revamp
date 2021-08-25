import React from "react";

const Testimonials = ({ item }) => {
  return (
    <div className="col-5">
      <div className="card">
        <img
          src={item.img}
          style={{ width: "400px", height: "300px" }}
          alt={item.name}
          className="card-img-top"
        />
        <div className="card-body text-center">
          <h1 className="card-title">{item.name}</h1>
          <p className="card-text">{item.qoute}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
