import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

export default function index({
  ImageSource,
  imageSource2,
  ImageDesciption,
  style,
}) {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        swipeable={true}
        showIndicators={false}
        interval={3000}
        width={"100%"}
      >
        <div>
          <img src={imageSource2} className={style} />
        </div>
        <div>
          <img src={imageSource2} className={style} />
        </div>
        <div>
          <img src={imageSource2} className={style} />
        </div>
      </Carousel>
    </>
  );
}
