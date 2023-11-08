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
    <section className="flex justify-center items-center section-image lg:my-0 sm:my-36">
      <div className=" bg-[#ffffffb5] w-full lg:h-[50vh]">
        <motion.div
          className=" lg:px-32 lg:py-12 sm:px-8 sm:py-8 lg:space-y-4 sm:space-y-8"
          whileInView={() => setValue(true)}
        >
          <div className="">
            <h2 className="lg:text-5xl lg:pb-8 sm:text-3xl font-semibold font-[Roboto] text-center">
              Statistic Glance at
              <span className="bg-yellow-500 text-white mx-2">
                Jamia Arabia Islamia
              </span>
            </h2>
          </div>
          <div className="flex justify-evenly lg:flex-row sm:flex-col lg:space-y-0 sm:space-y-8">
            <div className="flex flex-col items-center border-[#736f6f] border-[0.5px] lg:w-[20%] shadow-2xl py-6">
              <h2 className="lg:text-5xl sm:text-4xl font-bold">{counter}</h2>
              <p className="">Total Pass outs</p>
            </div>
            <div className="flex flex-col items-center border-[#736f6f]  border-[0.5px] lg:w-[20%] shadow-2xl py-6">
              <h2 className="lg:text-5xl sm:text-4xl font-bold">{counter}</h2>
              <p className="">Total Students</p>
            </div>
            <div className="flex flex-col items-center border-[#736f6f]  border-[0.5px] lg:w-[20%] shadow-2xl py-6 ">
              <h2 className="lg:text-5xl sm:text-4xl font-bold">{counter}</h2>
              <p className="">Total Faculties</p>
            </div>
          </div>
          <div className="flex justify-evenly lg:flex-row sm:flex-col lg:space-y-0 sm:space-y-8">
            <div className="flex flex-col items-center border-[#736f6f]  border-[0.5px] lg:w-[20%] shadow-2xl py-6">
              <h2 className="lg:text-5xl sm:text-4xl font-bold">{counter}</h2>
              <p className="">Total Teachers</p>
            </div>
            <div className="flex flex-col items-center border-[#736f6f]  border-[0.5px] lg:w-[20%] shadow-2xl py-6">
              <h2 className="lg:text-5xl sm:text-4xl font-bold">{counter}</h2>
              <p className="">Total Staff</p>
            </div>
            <div className="flex flex-col items-center border-[#736f6f]  border-[0.5px] lg:w-[20%] shadow-2xl py-6 ">
              <h2 className="lg:text-5xl sm:text-4xl font-bold">{counter}</h2>
              <p className="">Total Alumni</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
