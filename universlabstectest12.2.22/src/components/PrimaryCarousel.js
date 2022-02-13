import React from "react";
import { Carousel } from "react-bootstrap";
import { websiteInformation } from "../data/slideinfo";
import { CarouselItem } from "./CarouselItem";
import { Button } from "react-bootstrap";
import "./primaryCarousel.css";

// {
//     heading
//     cta: {
//       label
//       url
//     }
//     slides: {
//       title
//       excerpt
//       backgroundImage
//       cta: {
//         label
//         url
//       }
//     }[]
//   }

function PrimaryCarousel({ slide }) {
  return (
    <div>
      <Carousel fade controls={false} indicators={false}>
        {websiteInformation.map((item, index) => (
          <Carousel.Item key={index} interval={5000}>
            <img
              className="d-block w-100"
              src={item.slides.backgroundImage}
              alt={item.slides.backgroundImage}
            />
            <h1>{item.heading}</h1>
            <a href={item.cta.url} className="btn.info">
              {item.cta.label}
            </a>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default PrimaryCarousel;
