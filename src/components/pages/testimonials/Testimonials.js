import React from "react";

const Testimonials = ({ item }) => {
  return (
    <div className="col-10 mx-auto">
      <div className="card">
        <img
          src={item.img}
          style={{ height: "260px" }}
          alt={item.name}
          className="card-img-top"
        />
        <div className="card-body text-center" style={{ height: "200px" }}>
          <h1 className="card-title">{item.name}</h1>
          <p
            className="card-text"
            style={{ fontSize: `${item.qoute.length < 250 && "14px"}` }}
          >
            {item.qoute}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
