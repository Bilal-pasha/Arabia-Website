import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Logo from "../../Assets/Logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <footer className=" bg-[#915d03b5]">
        <section class="text-[#f7f7f7] shadow-lg lg:px-16">
          <div
            class="md:px-0 lg:grid md:grid lg:grid-cols-4 md:grid-rows-1 sm:flex sm:flex-col lg:py-8 md:py-10 sm:py-0"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            ref={ref}
          >
            <div class="lg:col-span-1 md:col-span-1 md:justify-items-center sm:row-span-1 lg:pl-6 lg:pr-0 md:pl-8 sm:px-12 md:px-[50px] space-y-3 text-semigray font-[Poppins] md:w-max text-xs lg:py-0 sm:py-10">
              <div className="flex items-center sm:justify-center pb-2">
                <a href="/" className="flex flex-col items-center ">
                  <img src={Logo} alt="logoImage" />
                  <p className="urdutext text-xl ">
                    جامعہ عربیہ اسلامیہ{" "}
                    <span className="text-xs">اسکاؤٹ کالونی</span>
                  </p>
                </a>
              </div>
            </div>
            <div class="lg:text-sm md:text-xs  font-[Poppins] font-normal lg:pl-0 lg:pr-[1.5%] md:px-8  lg:col-span-3 sm:w-full sm:px-[50px] lg:py-6 md:py-10 sm:py-0 lg:space-y-6">
              <div className="flex lg:flex-row md:flex-row sm:flex-col lg:justify-end sm:justify-center lg:items-start md:items-start sm:items-center md:text-left lg:space-x-10 md:space-x-10">
                <ul class="flex flex-col space-y-3 space-x-1 cursor-pointer hover:text-blue-500 lg:my-0 md:mt-0 sm:my-5">
                  <li class="hover:text-green-600">
                    <a href="/About">Faculties</a>
                  </li>
                </ul>
                <ul class="flex flex-col space-y-3 space-x-1 cursor-pointer hover:text-blue-500 lg:my-0 md:mt-0 sm:my-5">
                  <li class="hover:text-green-600">
                    <a href="/Strategic_consulting">About us</a>
                  </li>
                </ul>
                <ul class="flex flex-col space-y-3 space-x-1 cursor-pointer hover:text-blue-500 lg:my-0 md:mt-0 sm:my-5">
                  <li class="hover:text-green-600">
                    <a href="/Media_training">Contact us</a>
                  </li>
                </ul>
                <ul class="flex flex-col space-y-3 space-x-1 cursor-pointer hover:text-blue-500 lg:my-0 md:mt-0 sm:my-5">
                  <li class="hover:text-green-600">
                    <a href="/Contact">More</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row items-center justify-center lg:justify-end lg:items-start md:items-start md:text-left lg:space-x-5 md:space-x-5 sm:space-x-3 py-3 ">
                <div>
                  <FaFacebook className="text-2xl hover:text-green-600 cursor-pointer" />
                </div>
                <div>
                  <FaTwitter className="text-2xl hover:text-green-600 cursor-pointer" />
                </div>
                <div>
                  <PiInstagramLogoFill className="text-2xl hover:text-green-600 cursor-pointer" />
                </div>
                <div>
                  <BsYoutube className="text-2xl hover:text-green-600 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:text-sm sm:text-xs font-[Poppins] pb-1">
            © 2023 Alarabiamedia.org All rights reserved.
          </div>
        </section>
      </footer>
    </>
  );
};
export default Footer;
