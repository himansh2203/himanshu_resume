import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import img4 from "../images/code.jpg";
import img1 from "../images/programmer-1653351_1280.png";
import img2 from "../images/img12.png";
import img5 from "../images/ai.jpg";
import img3 from "../images/api.png";

const images = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}>
        {images.map((each, index) => (
          <img
            key={index}
            style={{ width: "100%", height: "40rem" }}
            src={each}
          />
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
