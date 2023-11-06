import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

export default function index({ ImageSource, ImageDesciption, style }) {
  return (
    <>
      <Carousel
        autoPla={true}
        infiniteLoop={true}
        showArrows={true}
        interval={3000}
        showIndicators={false}
        axis={"horizontal"}
        transitionTime={200}
        width={"100%"}
      >
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
