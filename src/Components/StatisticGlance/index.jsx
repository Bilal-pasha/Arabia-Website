import React from "react";
import "./index.css";
import Background from "../BackgroundImage/index";
import StatisticImage from "../../Assets/StatisticSectionImage.png";
export default function index() {
  return (
    <section className="flex justify-center items-center section-image">
      <div className=" bg-[#ffffffb5] w-full h-[50vh]">
        <div className=" px-32 space-y-6">
          <div className="py-8">
            <h2 className="text-5xl font-semibold font-[Roboto] text-center">
              Statistic Glance at Jamia Arabia Islamia
            </h2>
          </div>
          <div className="flex justify-center space-x-[300px]">
            <div className="flex flex-col items-center px-5 py-6 ">
              <h2 className="text-7xl font-bold">1500</h2>
              <p className="text-lg font-semibold">TOTAL PASS STUDENTS</p>
            </div>
            <div className="flex flex-col items-center px-5 py-6 ">
              <h2 className="text-7xl font-bold">1500</h2>
              <p className="text-lg font-semibold">TOTAL STUDENTS</p>
            </div>
            <div className="flex flex-col items-center px-5 py-6 ">
              <h2 className="text-7xl font-bold">1500</h2>
              <p className="text-lg font-semibold">TOTAL FACULTIES</p>
            </div>
          </div>
          <div className="flex justify-center space-x-[300px]">
            <div className="flex flex-col items-center px-5 py-6 ">
              <h2 className="text-7xl font-bold">1500</h2>
              <p className="text-lg font-semibold">TEACHERS</p>
            </div>
            <div className="flex flex-col items-center px-5 py-6 ">
              <h2 className="text-7xl font-bold">1500</h2>
              <p className="text-lg font-semibold">TOTAL STAFF</p>
            </div>
            <div className="flex flex-col items-center px-5 py-6 ">
              <h2 className="text-7xl font-bold">1500</h2>
              <p className="text-lg font-semibold">ALUMNI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
