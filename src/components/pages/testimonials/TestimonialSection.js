import React from "react";

import Testimonials from "./Testimonials";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <section className="hero is-medium is-medium-style" id="Testimonials">
      <div className="hero-header has-text-centered">
        <h1 className="title">Testimonials</h1>
        <h2 className="subtitle">This is what my peers have to say about me</h2>
      </div>
      <div className="hero-body">
        <Slider {...settings} autoplay={5000} className="columns">
          {Testimonials.map((t, id) => (
            <div
              className="column is-12"
              key={id}
              style={{ marginLeft: "1rem" }}
            >
              <div
                className="card is-flex"
                style={{ padding: "4.25rem !important" }}
              >
                <div className="card-image ml-4">
                  <figure
                    className="image"
                    style={{ height: "197px", width: "332px" }}
                  >
                    <img
                      src={t.img}
                      alt={t.name}
                      style={{ width: "100%", maxHeight: "100%" }}
                    />
                  </figure>
                </div>
                <div className="content" style={{ marginLeft: "3rem" }}>
                  <p style={{ fontSize: "25px" }}>
                    <b>&#8220;</b>
                    {t.qoute}
                    <b>&#8221;</b> - <b>{t.name}</b>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
