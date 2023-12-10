import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Statistic() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter !== 1500 && value === true) {
          return prevCounter + 1;
        } else {
          return prevCounter;
        }
      });
    }, 0);
    return () => clearInterval(interval);
  }, [value]);
  return (
    <section className="flex justify-center items-center section-image-mobile  lg:my-0 sm:my-6">
      <div className=" bg-[#ffffff40] w-full lg:py-0 sm:py-9 ">
        <motion.div
          className=" lg:px-32 lg:py-12 sm:px-8 sm:py-0 space-y-4 sm:space-y-0"
          whileInView={() => setValue(true)}>
          {/* screen-size view  */}
          <div className="sm:pb-4 md:block hidden">
            <h2 className="lg:text-5xl lg:pb-8 sm:text-3xl font-semibold font-[Roboto] text-center">
              Statistic Glance at
              <span className="bg-yellow-500 text-white mx-2">
                Jamia Arabia Islamia
              </span>
            </h2>
          </div>
          {/* mobile-view  */}
          <div className="sm:pb-4 block md:hidden lg:text-5xl  sm:text-3xl">
            <h2 className=" lg:pb-8 font-semibold font-[Roboto] text-center">
              Statistic Glance at
            </h2>
            <h2 className="lg:pb-8  font-semibold font-[Roboto] text-center bg-yellow-500 text-white mx-16">
              Jamia Arabia Islamia
            </h2>
          </div>
          <div className="flex justify-evenly lg:flex-row sm:flex-col lg:space-y-0 sm:space-y-8 sm:py-8">
            <div className="flex flex-col items-center border-[#736f6f] border-[0.5px] lg:w-[20%] shadow-2xl py-6 bg-[#ffffff40]">
              <h2 className="lg:text-5xl sm:text-4xl font-bold">{counter}</h2>
              <p className="">Total Pass outs</p>
            </div>
            <div className="flex flex-col items-center border-[#736f6f]  border-[0.5px] lg:w-[20%] shadow-2xl py-6 bg-[#ffffff40]">
              <h2 className="lg:text-5xl sm:text-4xl font-bold">{counter}</h2>
              <p className="">Total Students</p>
            </div>
            <div className="flex flex-col items-center border-[#736f6f]  border-[0.5px] lg:w-[20%] shadow-2xl py-6 bg-[#ffffff40]">
              <h2 className="lg:text-5xl sm:text-4xl font-bold">{counter}</h2>
              <p className="">Total Faculties</p>
            </div>
          </div>
          <div className="flex justify-evenly lg:flex-row sm:flex-col lg:space-y-0 sm:space-y-8">
            <div className="flex flex-col items-center border-[#736f6f]  border-[0.5px] lg:w-[20%] shadow-2xl py-6 bg-[#ffffff40]">
              <h2 className="lg:text-5xl sm:text-4xl font-bold">{counter}</h2>
              <p className="">Total Teachers</p>
            </div>
            <div className="flex flex-col items-center border-[#736f6f]  border-[0.5px] lg:w-[20%] shadow-2xl py-6 bg-[#ffffff40]">
              <h2 className="lg:text-5xl sm:text-4xl font-bold">{counter}</h2>
              <p className="">Total Staff</p>
            </div>
            <div className="flex flex-col items-center border-[#736f6f]  border-[0.5px] lg:w-[20%] shadow-2xl py-6  bg-[#ffffff40]">
              <h2 className="lg:text-5xl sm:text-4xl font-bold">{counter}</h2>
              <p className="">Total Alumni</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
