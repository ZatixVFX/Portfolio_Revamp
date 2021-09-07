import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import { testimonialList } from "./TestimonialsList";
import Testimonials from "./Testimonials";

const TestimonialSection = () => {
  const CustomArrow = (props) => {
    const { className, style, onClick, customClass } = props;
    return (
      <button
        type="button"
        className={`${className} ${customClass}`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    nextArrow: <CustomArrow customClass="fas fa-chevron-right" />,
    prevArrow: <CustomArrow customClass="fas fa-chevron-left" />,
  };
  return (
    <section className="container">
      <h1 className="text-center pg-header pt-4 pb-1">Testimonials</h1>
      <p className="text-center testimonials-sub-header pb-1">
        Here's what my peers has to say about me
      </p>
      <div className="container">
        <div className="row">
          <Slider {...settings}>
            {testimonialList.map((item, index) => (
              <Testimonials item={item} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
