import React, { useEffect, useState } from "react";
import "./index.css";
import { motion } from "framer-motion";

export default function Statistic() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter !== 1500 && value === true) {
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
      <div className=" bg-[#ffffffb5] w-full h-[50vh]">
        <motion.div
          className=" px-32 space-y-6"
          whileInView={() => setValue(true)}
        >
          <div className="py-8">
            <h2 className="text-5xl font-semibold font-[Roboto] text-center">
              Statistic Glance at Jamia Arabia Islamia
            </h2>
          </div>
          <div className="flex justify-center space-x-[300px]">
            <div className="flex flex-col items-center px-5 py-6 ">
              <h2 className="text-7xl font-bold">{counter}</h2>
              <p className="text-lg font-semibold">TOTAL PASS STUDENTS</p>
            </div>
            <div className="flex flex-col items-center px-5 py-6 ">
              <h2 className="text-7xl font-bold">{counter}</h2>
              <p className="text-lg font-semibold">TOTAL STUDENTS</p>
            </div>
            <div className="flex flex-col items-center px-5 py-6 ">
              <h2 className="text-7xl font-bold">{counter}</h2>
              <p className="text-lg font-semibold">TOTAL FACULTIES</p>
            </div>
          </div>
          <div className="flex justify-center space-x-[300px]">
            <div className="flex flex-col items-center px-5 py-6 ">
              <h2 className="text-7xl font-bold">{counter}</h2>
              <p className="text-lg font-semibold">TEACHERS</p>
            </div>
            <div className="flex flex-col items-center px-5 py-6 ">
              <h2 className="text-7xl font-bold">{counter}</h2>
              <p className="text-lg font-semibold">TOTAL STAFF</p>
            </div>
            <div className="flex flex-col items-center px-5 py-6 ">
              <h2 className="text-7xl font-bold">{counter}</h2>
              <p className="text-lg font-semibold">ALUMNI</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
