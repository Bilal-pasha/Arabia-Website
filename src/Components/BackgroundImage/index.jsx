import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";
// import StudentGroup from "../../Assets/students-group.jpg";
export default function index({
  ImageSource,
  imageSource2,
  ImageDesciption,
  style,
}) {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        swipeable={true}
        showIndicators={false}
        interval={3000}
        width={"100%"}
      >
        <div className="ScoutsImages flex justify-center items-end">
          <div className="text-white lg:mb-24 sm:mb-2">
            <h2 className="lg:text-4xl sm:text-base font-bold">
              Registration for Inter Madaris Scouts Camping 2023
            </h2>
            <p className="lg:text-xl sm:text-xs pt-3">
              Organized by{" "}
              <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-400 relative inline-block">
                <span class="relative text-white">Jamia Arabia Islamia </span>
              </span>
            </p>
            <button className="relative px-12 py-2 lg:my-4 sm:my-6 lg:text-2xl sm:text-sm overflow-hidden  bg-green-900 text-white border-indigo-600 rounded-lg shadow-2xl transition-all duration-50 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-600 before:duration-500 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
              <span className="relative z-10">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSetRTRTg87Dlf5-pRol1fMu_F_CAkTir18cfxsDbwl7FpoYsg/viewform">
                  Register now
                </a>{" "}
              </span>
            </button>
          </div>
        </div>
        <div className="ScoutsImages2 flex justify-center items-end">
          <div className="text-white lg:mb-18 sm:mb-2 bg-[#00000082] lg:block sm:hidden">
            <h2 className="lg:text-4xl sm:text-base font-bold">
              Registration for Inter Madaris Scouts Camping 2023
            </h2>
            <p className="lg:text-xl sm:text-xs pt-3">
              Organized by{" "}
              <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-400 relative inline-block">
                <span class="relative text-white">Jamia Arabia Islamia </span>
              </span>
            </p>
            <button className="relative px-12 py-2 lg:my-4 sm:my-6 lg:text-2xl sm:text-sm overflow-hidden  bg-green-900 text-white border-indigo-600 rounded-lg shadow-2xl transition-all duration-50 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-600 before:duration-500 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
              <span className="relative z-10">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSetRTRTg87Dlf5-pRol1fMu_F_CAkTir18cfxsDbwl7FpoYsg/viewform">
                  Register now
                </a>{" "}
              </span>
            </button>
          </div>
        </div>
        {/* <div className="background"></div> */}
      </Carousel>
    </>
  );
}
