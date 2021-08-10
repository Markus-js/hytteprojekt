// https://www.youtube.com/watch?v=l1MYfu5YWHc&t=189s
// Youtube
import React, { useState } from "react";
import { SliderData } from "./SliderData";

import "./ImageSlider.css";

export default function ImageSlider({ slides, setToggle, setSliderToggle }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    // start current of array[0]: length -1 === index 0
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  function handleExit() {
    setSliderToggle(false);
  }

  console.log(current);

  // Check if SliderData exist
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      {setToggle && (
        <div className={setToggle ? true : false}>
          <section className="slider">
            <div className="close" onClick={() => handleExit()}>
              <span>&#10005;</span>
            </div>
            <div className="arrow-box left_arrow" onClick={prevSlide}>
              <div className="triangle"></div>
            </div>
            <div className="arrow-box right_arrow" onClick={nextSlide}>
              <div className="triangle --right"></div>
            </div>

            {SliderData.map((slide, index) => {
              return (
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <img
                      src={slide.image}
                      alt="Hytte"
                      className="slider_image"
                    />
                  )}
                </div>
              );
            })}
          </section>
          <div
            onClick={() => {
              handleExit();
            }}
            className="overlay carousel-overlay"
          ></div>
        </div>
      )}
    </div>
  );
}