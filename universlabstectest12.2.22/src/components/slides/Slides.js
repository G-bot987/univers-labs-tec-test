import React, { useEffect, useState } from "react";

import { Slide } from "../slide/Slide";
import { websiteInformation } from "../../data/slideinfo";
import img1 from "../../assets/images/prairie.png";
import img2 from "../../assets/images/waves.png";
import img3 from "../../assets/images/mountains.png";
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
        console.log(websiteInformation);
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
    <div
      className="imagebackground"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(23, 26, 26, 0.5), rgba(23, 26, 26, 0.5)), url(${backImage})`,
      }}
    >
      <h1 className="heading">{websiteInformation["heading"]}</h1>
      <a className="contactBtn" href={websiteInformation.cta["url"]}>
        {websiteInformation.cta["label"]}
      </a>
      {websiteInformation.slides.map((slide, index) => (
        <Slide key={index} {...slide} isActive={activeSlideIndex === index} />
      ))}
    </div>
  );
};
