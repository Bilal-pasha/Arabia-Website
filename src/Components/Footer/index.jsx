import React from "react";
import Logo from "../../Assets/Logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className=" bg-gradient-to-r from-yellow-400 to-[#fde579ed] ...">
        <section class="text-black shadow-lg lg:px-16">
          <div class="md:px-0 lg:grid md:grid lg:grid-cols-4 md:grid-rows-1 sm:flex sm:flex-col text-green-900 lg:py-8 md:py-10 sm:py-0">
            <div class="lg:col-span-1 md:col-span-1 lg:-order-first sm:order-last md:justify-items-center sm:row-span-1 lg:pl-6 lg:pr-0 md:pl-8 sm:px-12 md:px-[50px] space-y-3 text-semigray font-[Poppins] md:w-max text-xs lg:py-0 sm:py-10">
              <div className="flex items-center pb-2">
                <a href="/" className="flex flex-col items-center ">
                  <img src={Logo} alt="logoImage" />
                  <p className="urdutext text-xl ">
                    جامعہ عربیہ اسلامیہ{" "}
                    <span className="text-xs">اسکاؤٹ کالونی</span>
                  </p>
                </a>
              </div>
            </div>
            <div class="  lg:-order-first sm:order-first  lg:text-sm md:text-xs  font-[Poppins] font-normal lg:pl-0 lg:pr-[1.5%] md:px-8  lg:col-span-3 sm:w-full sm:px-[50px] lg:py-6 md:py-10 sm:py-0 space-y-6">
              <div className="flex lg:flex-row md:flex-row sm:flex-col lg:justify-end lg:items-start md:items-start md:text-left lg:space-x-10 md:space-x-10">
                <ul class="space-y-5 space-x-1 lg:py-0 md:py-0 lg:mt-0 lg:pl-10 md:mt-0 sm:mt-10">
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
                <ul class="space-y-3 space-x-1 cursor-pointer hover:text-blue-500 lg:my-0 md:mt-0 sm:my-5">
                  <li class="hover:text-green-600">
                    <a href="/Video_production">VIDEO PRODUCTION</a>
                  </li>
                </ul>

                <ul class="flex flex-col space-y-3 space-x-1 cursor-pointer hover:text-blue-500 lg:my-0 md:mt-0 sm:my-5">
                  <li class="hover:text-green-600">
                    <a href="/Contact">More</a>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center lg:flex-row md:flex-row sm:flex-col lg:justify-end lg:items-start md:items-start md:text-left lg:space-x-10 md:space-x-10 ">
                <div className="items-center pt-1">
                  <p>follow us on :</p>
                </div>
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
          <div className="flex justify-center text-sm text-green-900 font-[Poppins]">
            © 2023 Alarabiamedia.org All rights reserved.
          </div>
        </section>
      </footer>
    </>
  );
};
export default Footer;
