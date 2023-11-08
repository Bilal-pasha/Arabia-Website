import React from "react";
import { motion } from "framer-motion";
export default function Grid({
  intro,
  Heading,
  paragraph1,
  paragraph2,
  paragraph3,
  ImageSource,
}) {
  return (
    <section className="lg:px-32 sm:px-4 bg-white gridbackround">
      <motion.div
        className="grid lg:grid-cols-2 sm:grid-rows-1 lg:px-[100px] sm:px-2 lg:py-24 sm:py-12 sm:space-y-8"
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: "1" }}
      >
        <div className="col-span-1 lg:space-y-6 sm:space-y-4  ">
          <p className="lg:text-lg sm:text-sm font-semibold">{intro}</p>
          <h2 className="lg:text-5xl sm:text-3xl font-bold">{Heading}</h2>
          <div className="lg:text-xl sm:text-sm text-[#000000ab] space-y-6">
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
            <p>{paragraph3}</p>
          </div>
        </div>
        <div className="col-span-1 justify-self-end">
          <img src={ImageSource} alt="img" />
        </div>
      </motion.div>
    </section>
  );
}
