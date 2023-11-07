import React from "react";
import { motion } from "framer-motion";

const Whitebox = () => {
  return (
    <>
      <section className="bg-[#fffcfc] text-black lg:px-32 lg:py-20 sm:py-12 backGroundLite">
        <motion.div
          className="lg:px-[100px] sm:px-6  lg:space-y-20 sm:space-y-12"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: "1" }}
        >
          <div className=" lg:space-y-12 sm:space-y-6 flex flex-wrap">
            <h2 className="lg:text-5xl sm:text-3xl font-semibold font-[Roboto] text-center">
              Unlock the Gateway to Wisdom and Enlightenment at Jamia Arabia
              Islamia
            </h2>
            <blockquote class="lg:text-2xl sm:text-xl font-normal italic text-center text-slate-900">
              Welcome to a world where tradition meets innovation, and faith
              meets knowledge. At .
              <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-400 relative inline-block">
                <span class="relative text-white">Jamia Arabia Islamia </span>
              </span>
              , we are not just an institution; we are a timeless journey of
              discovery, enlightenment, and transformation.
            </blockquote>
          </div>
          <div className="space-x-6 flex justify-center">
            <button class="relative px-4 py-2 overflow-hidden border bg-green-900 text-white border-indigo-600 rounded-lg shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
              <span class="relative z-10">Faculties</span>
            </button>
            <button class="text-green-900 hover:before:bg-green-600 relative  px-4 py-2 overflow-hidden border  bg-white rounded-lg  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-600 before:transition-all before:duration-50 hover:text-white hover:before:left-0 hover:before:w-full">
              <span class="relative z-10">Contact</span>
            </button>
          </div>
        </motion.div>
      </section>
    </>
  );
};
export default Whitebox;
