import React, { useEffect, useState } from "react";

import { Slide } from "../slide/Slide";
import { websiteInformation } from "../../data/slideinfo";

export const Slides = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Get the next index and check if valid index
      const newIndex = activeSlideIndex + 1;
      if (websiteInformation.slides[newIndex]) {
        setActiveSlideIndex(newIndex);
      } else {
        setActiveSlideIndex(0);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [activeSlideIndex]);

  return (
    <div>
      <div>Slides</div>
      {websiteInformation.slides.map((slide, index) => (
        <Slide {...slide} isActive={activeSlideIndex === index} />
      ))}
    </div>
  );
};
