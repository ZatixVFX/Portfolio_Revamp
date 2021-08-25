import React from "react";
import { Carousel } from "3d-react-carousal";

import { testimonialList } from "./TestimonialsList";
import Testimonials from "./Testimonials";

const TestimonialSection = () => {
  const leftFirst = {
    marginRight: "-23%",
    zIndex: 0,
    height: "380px",
  };

  const leftSecond = {
    marginRight: "9%",
    zIndex: 1,
    height: "450px",
  };

  const rightFirst = {
    marginRight: "-26%",
    zIndex: 0,
    height: "380px",
  };

  const rightSecond = {
    marginRight: "-9%",
    zIndex: -1,
    height: "450px",
  };

  const getIndex = (index) => {
    if (index === 0) {
      return leftFirst;
    } else if (index === 1) {
      return leftSecond;
    } else if (index === 3) {
      return rightFirst;
    } else if (index === 4) {
      return rightSecond;
    }
  };
  return (
    <section className="container">
      <h1 className="text-center pg-header pt-4 pb-1">Testimonials</h1>
      <p className="text-center testimonials-sub-header pb-1">
        Here's what my peers has to say about me
      </p>
      <div className="row justify-content-center">
        {[...Array(5)].map((item, index) =>
          index === 2 ? (
            <div
              className="row justify-content-center"
              style={{ position: "absolute", zIndex: "2" }}
            >
              <div className="col-4" key={index}>
                <div className="card">
                  <img
                    src="https://www.solidbackgrounds.com/images/1280x720/1280x720-wood-brown-solid-color-background.jpg"
                    style={{ width: "100%", height: "300px" }}
                    alt="random pic"
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h1 className="card-title">Title</h1>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras blandit ipsum vitae turpis blandit, auctor eleifend
                      dolor tincidunt. Nam maximus libero vitae ullamcorper
                      bibendum. Duis id orci fermentum, sollicitudin neque sed,
                      accumsan elit. Suspendisse tortor ex, aliquet ut finibus
                      aliquam, pretium quis felis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`col-4 ${
                index === 0 || index === 4
                  ? "mt-5"
                  : index === 1 || index === 3
                  ? "mt-3"
                  : ""
              }`}
              style={getIndex(index)}
              key={index}
            >
              <div className="card" style={{ height: "inherit" }}>
                <img
                  src="https://picsum.photos/200/300"
                  style={{
                    width: "100%",
                    height: "300px",
                  }}
                  alt="random pic"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h1 className="card-title">Title</h1>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras blandit ipsum vitae turpis blandit, auctor eleifend
                    dolor tincidunt. Nam maximus libero vitae ullamcorper
                    bibendum. Duis id orci fermentum, sollicitudin neque sed,
                    accumsan elit. Suspendisse tortor ex, aliquet ut finibus
                    aliquam, pretium quis felis.
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
