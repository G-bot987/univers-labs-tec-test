import React, { useEffect, useState } from "react";

import { Slide } from "../slide/Slide";
import { websiteInformation } from "../../data/slideinfo";
import img1 from "./prairie.png";
import img2 from "./waves.png";
import img3 from "./mountains.png";
import "./style.css";
export const Slides = () => {
  const images = [img1, img2, img3];
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [backImage, setBackImage] = useState(images[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      // Get the next index and check if valid index
      const newIndex = activeSlideIndex + 1;
      if (websiteInformation.slides[newIndex]) {
        setActiveSlideIndex(newIndex);
        setBackImage(images[newIndex]);
      } else {
        setActiveSlideIndex(0);
        setBackImage(images[0]);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [activeSlideIndex, backImage]);

  return (
    <div>
      <div
        className="imagebackground"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(23, 26, 26, 0.5), rgba(23, 26, 26, 0.5)), url(${backImage})`,
        }}
      >
        {websiteInformation.slides.map((slide, index) => (
          <Slide {...slide} isActive={activeSlideIndex === index} />
        ))}
      </div>
    </div>
  );
};
