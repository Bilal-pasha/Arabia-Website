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
    <section className="lg:px-32 sm:px-4 bg-white gridbackround">
      <div className="grid lg:grid-cols-2 sm:grid-rows-1 lg:px-[100px] sm:px-2 lg:py-24 sm:py-12 sm:space-y-8">
        <div
          className="col-span-1 lg:space-y-6 sm:space-y-4  "
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          ref={ref}
        >
          <p className="lg:text-lg sm:text-sm font-semibold">{intro}</p>
          <h2 className="lg:text-5xl sm:text-3xl font-bold">{Heading}</h2>
          <div className="lg:text-xl sm:text-sm text-[#000000ab] space-y-6">
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
            <p>{paragraph3}</p>
          </div>
        </div>
        <div
          className="col-span-1 justify-self-end"
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
    </section>
  );
}
