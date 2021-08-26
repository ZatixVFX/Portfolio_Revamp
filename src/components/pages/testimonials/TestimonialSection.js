import React, { useEffect, useState } from "react";
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
    height: "450px",
  };

  const rightSecond = {
    marginRight: "-9%",
    zIndex: -1,
    height: "380px",
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
  const [cardList, setCardList] = useState(0);
  const nextBtn = () => {
    cardList === testimonialList.length - 1
      ? setCardList(0)
      : setCardList(cardList + 1);
    console.log(cardList);
  };

  const prevBtn = () => {
    cardList === 0
      ? setCardList(testimonialList.length - 1)
      : setCardList(cardList - 1);
    console.log(cardList);
  };
  return (
    <section className="container">
      <h1 className="text-center pg-header pt-4 pb-1">Testimonials</h1>
      <p className="text-center testimonials-sub-header pb-1">
        Here's what my peers has to say about me
      </p>
      <button onClick={nextBtn}>Next</button>
      <button onClick={prevBtn}>Prev</button>
      <div className="row justify-content-center">
        {[...Array(5)].map((item, index) =>
          index === 2 ? (
            <div
              className="row justify-content-center"
              style={{ position: "absolute", zIndex: "2" }}
            >
              {testimonialList.map(
                (item, index) =>
                  index === cardList && <Testimonials item={item} />
              )}
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
              <div className="card" style={{ height: "inherit" }}></div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
