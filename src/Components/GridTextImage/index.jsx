import React, { useRef } from "react";
import { useInView } from "framer-motion";

export default function Grid({
  intro,
  Heading,
  paragraph1,
  paragraph2,
  paragraph3,
  ImageSource,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="grid grid-cols-2 px-32 gap-32 py-24 bg-white gridbackround">
      <div
        className="col-span-1 space-y-6  "
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        ref={ref}
      >
        <p className="text-lg font-semibold">{intro}</p>
        <h2 className="text-5xl font-bold">{Heading}</h2>
        <div className="text-lg space-y-6">
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <p>{paragraph3}</p>
        </div>
      </div>
      <div
        className="col-span-1"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        ref={ref}
      >
        <img src={ImageSource} alt="img" />
      </div>
    </div>
  );
}
