import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselItem = ({ options }) => {
  return (
    <>
      <img
        className="d-block w-100"
        src={options.slides.backgroundImage}
        alt="First slide"
      />
      <h1>{options.heading}</h1>
      <a href={options.cta.url} className="btn.info">
        {options.cta.label}
      </a>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </>
  );
};

export default CarouselItem;
