import React, { useEffect, useState } from "react";
import "./index.css";
import { motion } from "framer-motion";

export default function Statistic() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter !== 0 && value === true) {
          return prevCounter + 1;
        } else {
          return prevCounter; // Return the same value to stop further updates
        }
      });
    }, 0);

    // Clear the interval when the component unmounts or when the condition is met
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="flex justify-center items-center section-image">
      <div className=" bg-[#ffffffb5] w-full lg:h-[50vh]">
        <motion.div
          className=" lg:px-32 sm:px-8 sm:py-8 lg:space-y-6"
          whileInView={() => setValue(true)}
        >
          <div className="lg:py-8">
            <h2 className="lg:text-5xl sm:text-3xl font-semibold font-[Roboto] text-center">
              Statistic Glance at Jamia Arabia Islamia
            </h2>
          </div>

          <div
            className="flex mx-auto justify-center lg:space-x-[300px] lg:text-lg sm:text-xs font-normal sm:space-x-12 
"
          >
            <div className="flex flex-col items-center py-6 ">
              <h2 className="lg:text-7xl sm:text-4xl font-bold">{counter}</h2>
              <p className="">PASS STUDENTS</p>
            </div>
            <div className="flex flex-col items-center py-6 ">
              <h2 className="lg:text-7xl sm:text-4xl font-bold">{counter}</h2>
              <p className="">STUDENTS</p>
            </div>
            <div className="flex flex-col items-center py-6 ">
              <h2 className="lg:text-7xl sm:text-4xl font-bold">{counter}</h2>
              <p className="">FACULTIES</p>
            </div>
          </div>
          <div
            className="flex justify-center lg:space-x-[300px] sm:space-x-12 lg:text-lg sm:text-xs font-normal
"
          >
            <div className="flex flex-col items-center py-6 ">
              <h2 className="lg:text-7xl sm:text-4xl font-bold">{counter}</h2>
              <p className="">TEACHERS</p>
            </div>
            <div className="flex flex-col items-center py-6 ">
              <h2 className="lg:text-7xl sm:text-4xl font-bold">{counter}</h2>
              <p className="">STAFF</p>
            </div>
            <div className="flex flex-col items-center py-6 ">
              <h2 className="lg:text-7xl sm:text-4xl font-bold">{counter}</h2>
              <p className="">ALUMNI</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
