import React from "react";
import { motion } from "framer-motion";

const Whitebox = () => {
  return (
    <>
      <section className="bg-[#fffcfc] text-black px-32 py-20">
        <div className="px-[100px] space-y-20">
          <motion.div
            className=" space-y-12 flex flex-wrap"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: "1" }}
          >
            <h2 className="text-5xl font-semibold font-[Roboto]">
              Unlock the Gateway to Wisdom and Enlightenment at Jamia Arabia
              Islamia
            </h2>
            <blockquote class="text-2xl font-normal italic text-center text-slate-900">
              Welcome to a world where tradition meets innovation, and faith
              meets knowledge. At .
              <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-400 relative inline-block">
                <span class="relative text-white">Jamia Arabia Islamia </span>
              </span>
              , we are not just an institution; we are a timeless journey of
              discovery, enlightenment, and transformation.
            </blockquote>
          </motion.div>
          <div className="space-x-6">
            <button class="relative px-4 py-2 overflow-hidden border bg-green-900 text-white border-indigo-600 rounded-lg shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
              <span class="relative z-10">Faculties</span>
            </button>
            <button class="text-green-900 hover:before:bg-green-600 relative  px-4 py-2 overflow-hidden border  bg-white rounded-lg  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-600 before:transition-all before:duration-50 hover:text-white hover:before:left-0 hover:before:w-full">
              <span class="relative z-10">Contact</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Whitebox;
