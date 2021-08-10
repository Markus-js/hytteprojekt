// https://www.youtube.com/watch?v=l1MYfu5YWHc&t=189s
// Youtube 
import React, { useState, Fragment } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import "./ImageSlider.css";
import { classes } from "istanbul-lib-coverage";



export default function ImageSlider({ slides, setToggle }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    // start current of array[0]: length -1 === index 0
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  // Check if SliderData exist
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  function handleExit() {
    // App.js Parrent
    // Toggle modal should be should be shown
    setToggle(false);
  }
  function handleSlider(boolean) {
    setSliderToggle(boolean);
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left_arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right_arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="Hytte" className="slider_image" />
            )}
             <div
            onClick={() => {
              handleExit();
              handleSlider(false);
            }}
            className="overlay"
          ></div>
          </div>
        );
      })}
    </section>
  );
}
