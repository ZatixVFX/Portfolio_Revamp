import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

import { testimonialList } from "./TestimonialsList";
import Testimonials from "./Testimonials";
const TestimonialSection = () => {
  const [gotoslide, setGotoslide] = useState("");
  const slides = testimonialList
    .map((item) => {
      return {
        key: uuidv4(),
        content: <Testimonials item={item} />,
      };
    })
    .map((slide, index) => {
      return { ...slide, onClick: () => setGotoslide(index) };
    });
  return (
    <section className="container">
      <h1 className="text-center pg-header pt-4 pb-1">Testimonials</h1>
      <p className="text-center testimonials-sub-header">
        Here's what my peers has to say about me
      </p>
      <div className="row">
        <Carousel
          slides={slides}
          gotoslide={gotoslide}
          offsetRadius={Math.floor(slides.length / 2)}
          showNavigation={true}
          animationConfig={config.gentle}
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
