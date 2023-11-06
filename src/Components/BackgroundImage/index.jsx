import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

export default function index({ ImageSource, ImageDesciption, style }) {
  return (
    <>
      <Carousel autoPlay infiniteLoop swipeable showIndicators={false}>
        <div>
          <img src={ImageSource} />
        </div>
        <div>
          <img src={ImageSource} />
        </div>
        <div>
          <img src={ImageSource} />
        </div>
      </Carousel>
    </>
  );
}
