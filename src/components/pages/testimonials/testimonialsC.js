import React from "react";

import Testimonials from "./Testimonials";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const TestimonialSection = () => {
  return (
    <section className="hero is-medium">
      <div className="hero-header has-text-centered">
        <h1 className="title">Testimonials</h1>
        <h2 className="subtitle">This is what my peers have to say about me</h2>
      </div>
      <div className="hero-body">
        <OwlCarousel
          className="owl-theme"
          items="1"
          nav
          dots
          loop
          margin={10}
          navText={[
            [`<i class="fas fa-arrow-left fa-2x"></i>`],
            [`<i class="fas fa-arrow-right fa-2x"></i>`],
          ]}
        >
          {Testimonials.map((t, id) => (
            <div className="columns is-variable is-desktop item" key={id}>
              <img src={t.img} alt={t.name} className="owl-carouse-item-img" />
              <div
                className="column is-7-desktop"
                style={{
                  marginLeft: "2.1rem",
                  marginTop: "2.6rem",
                  fontSize: "23px",
                }}
              >
                <p>
                  <b>&#8220;</b>
                  {t.qoute}
                  <b>&#8221;</b> - <b>{t.name}</b>
                </p>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
