import Icon from "./Hamburger";
import Logo from "../../Assets/Logo.png";
import Accordian from "./Accordian/Accordian";
import { useState } from "react";
import { NavData } from "./navigation.js";
import { AnimatedButton } from "../AnimatedButton/index";
export default function Toolbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center lg:justify-between md:justify-between sm:justify-between lg:px-16 md:px-5 sm:px-4 dark-mode:text-gray-200 py-0 dark-mode:bg-gray-800 bg-gradient-to-r from-yellow-400 to-[#fde579ed] ... text-gray-700 sticky top-0 shadow-lg z-50	">
        <input
          type="checkbox"
          id="check"
          className="hidden peer"
          checked={false}
          onChange={() => setOpen(!open)}
        />
        <label
          for="check"
          className="text-4xl cursor-pointer lg:hidden md:block sm:block">
          <Icon />
        </label>
        <div className="flex items-center pb-2">
          <a href="/" className="flex flex-col items-center">
            <img src={Logo} alt="logoImage" className="lg:w-full sm:w-[70%]" />
          </a>
        </div>
        <ul
          className="lg:flex lg:items-center md:hidden sm:hidden lg:text-[16px]
          font-[Poppins] xl:space-x-0 lg:space-x-0">
          {NavData?.map((value) => {
            return (
              <li className="lg:border-none md:border-b-[1px] lg:py-0 md:py-4 sm:py-4 md:border-[#cdc6c6] sm:border-b-[1px] sm:border-[#cdc6c6] lg:px-4">
                <div className="relative">
                  <button className="peer lg:px-4 md:px-0 lg:py-2 lg:text-black md:text-black">
                    <a
                      className="py-2 mt-2 text-lg font-semibold text-green-900 rounded-lg lg:px-4 md:px-4 sm:px-4 hover:text-green-600 dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 md:mt-0 "
                      href="/faculties">
                      {value.text}
                    </a>
                  </button>
                  {value.links?.length ? (
                    <div className="absolute items-center hidden peer-hover:flex hover:flex w-[200px] flex-col bg-gradient-to-r from-yellow-400 to-[#fde579ed] ... drop-shadow-lg text-black  space-y-6 py-6 z-0">
                      {value.links !== undefined
                        ? value.links.map((dropdown) => {
                            return (
                              <a
                                className="font-semibold hover:text-green-600"
                                href={dropdown.href}>
                                {dropdown?.text}
                              </a>
                            );
                          })
                        : null}
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="space-x-4 lg:block sm:hidden">
          <AnimatedButton
            theme="text-green-900 hover:before:bg-green-600 relative  px-4 py-2 overflow-hidden bg-white rounded-lg  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-600 before:transition-all before:duration-50 hover:text-white hover:before:left-0 hover:before:w-full"
            theme2="relative z-10"
            value="Sign in"
          />
          <AnimatedButton
            theme="relative px-4 py-2 overflow-hidden border bg-green-900 text-white border-indigo-600 rounded-lg shadow-2xl transition-all duration-50 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-600 before:duration-500 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80"
            theme2="relative z-10"
            value="Sign up"
          />
        </div>
        {open && (
          <div
            class="md:block md:peer-checked:left-[-100%] md:fixed md:left-0 md:transition-all md:duration-[900ms] md:top-[70px] md:h-[100vh] md:bg-[#fffffff2] w-full md:py-0 md:space-y-10 sm:block sm:peer-checked:left-[-100%] sm:fixed sm:left-0 sm:transition-all sm:duration-[900ms] sm:top-[70px] sm:h-[100vh] sm:bg-[#fffffff2] sm:py-0 sm:space-y-10 bg-gradient-to-r from-yellow-400 to-[#fde579ed] ..."
            id="navbarDropdown">
            <Accordian />
          </div>
        )}
      </nav>
    </>
  );
}
