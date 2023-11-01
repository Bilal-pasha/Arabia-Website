import React from "react";

export default function index({ ImageSource, ImageDesciption, style }) {
  return (
    <>
      <img src={ImageSource} alt={ImageDesciption} className={style} />
    </>
  );
}
