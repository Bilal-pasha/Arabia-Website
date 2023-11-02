import Icon from "./Hamburger";
import Logo from "../../Assets/Logo.png";
import Button from "../Button/index";
// import Accordian from "./Accordian/Accordian";
export default function Toolbar() {
  return (
    <>
      <nav class="flex h-[100px] items-center lg:justify-between md:justify-between sm:justify-between lg:px-32 md:px-5 sm:px-4 dark-mode:text-gray-200 py-4 dark-mode:bg-gray-800 bg-gradient-to-r from-yellow-400 to-white-300 ... text-gray-700 sticky top-0 z-50 shadow-lg bg-opacity-100	">
        <input type="checkbox" id="check" class="hidden peer" checked />
        <label
          for="check"
          class="lg:hidden md:block sm:block text-4xl cursor-pointer"
        >
          <Icon />
        </label>
        <div className="flex items-center pb-2">
          <a href="/">
            <img src={Logo} alt="logoImage" />
          </a>
        </div>
        <ul
          class="lg:flex lg:items-center md:hidden sm:hidden lg:static sm:fixed sm:peer-checked:left-[-100%] sm:left-0 sm:transition-all md:duration-[900ms] sm:duration-[900ms] md:top-[70px] sm:top-[70px]
            lg:w-auto lg:h-auto md:w-full sm:w-full md:h-[100vh] sm:h-[100vh] text-black lg:space-y-0 md:space-y-5 sm:space-y-5 lg:py-0 md:py-10 sm:py-10 md:z-20 sm:z-20 space-x-6
           "
        >
          <li class="lg:border-none md:border-b-[1px] lg:py-0 md:py-4 sm:py-4 md:border-[#cdc6c6] sm:border-b-[1px] sm:border-[#cdc6c6]">
            <div class="relative">
              <button class="peer lg:px-4 md:px-0 lg:py-2 lg:text-black md:text-black">
                <a
                  class="lg:px-4 md:px-4 sm:px-4 py-2 mt-2 text-lg font-semibold text-green-900 rounded-lg hover:border-blue hover:text-green-600 dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0  focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/Video_production"
                >
                  Faculties
                </a>
              </button>
              <div
                class="absolute  items-center hidden peer-hover:flex hover:flex mr-10
                     w-[190px]
                     flex-col bg-white drop-shadow-lg text-black z-10"
              >
                <a
                  class="py-3 hover:text-blue"
                  href="/Video_production#CORPORATE"
                >
                  CORPORATE VIDEOS
                </a>
                <a class="py-3 hover:text-blue" href="/Video_production#Legal">
                  LEGAL VIDEOS
                </a>
              </div>
            </div>
          </li>
          <li class="lg:border-none md:border-b-[1px] lg:py-0 md:py-4 sm:py-4 md:border-[#cdc6c6] sm:border-b-[1px] sm:border-[#cdc6c6]">
            <a
              class="lg:px-4 md:px-4 sm:px-4 py-2 mt-2 text-lg font-semibold text-green-900 rounded-lg hover:border-blue hover:text-green-600 md:mt-0  focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="/About"
            >
              About us
            </a>
          </li>
          <li class="lg:border-none md:border-b-[1px] lg:py-0 md:py-4 sm:py-4 md:border-[#cdc6c6] sm:border-b-[1px] sm:border-[#cdc6c6]">
            <a
              class="lg:px-4 md:px-4 sm:px-4 py-2 mt-2 text-lg font-semibold text-green-900 rounded-lg hover:border-blue hover:text-green-600 md:mt-0  focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="/About"
            >
              Contact us
            </a>
          </li>
          <li class="lg:border-none md:border-b-[1px] lg:py-0 md:py-4 sm:py-4 md:border-[#cdc6c6] sm:border-b-[1px] sm:border-[#cdc6c6]">
            <div class="relative">
              <button class="peer lg:px-4 md:px-0 lg:py-2 lg:text-black md:text-black">
                <a
                  class="lg:px-4 md:px-4 sm:px-4 py-2 mt-2 text-lg font-semibold text-green-900 rounded-lg hover:border-blue hover:text-green-600 dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0  focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/Video_production"
                >
                  More
                </a>
              </button>
              <div
                class="absolute  items-center hidden peer-hover:flex hover:flex mr-10
                     w-[190px]
                     flex-col bg-white drop-shadow-lg text-black z-10"
              >
                <a
                  class="py-3 hover:text-blue"
                  href="/Video_production#CORPORATE"
                >
                  CORPORATE VIDEOS
                </a>
                <a class="py-3 hover:text-blue" href="/Video_production#Legal">
                  LEGAL VIDEOS
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div className="space-x-4 lg:block sm:hidden">
          <Button
            value="Sign in"
            bordercolor="green-900"
            textcolor="black"
            bgcolor={""}
          />
          <Button
            value="Sign up"
            bordercolor="green-900"
            textcolor="white"
            bgcolor="green-900"
          />
        </div>
      </nav>
    </>
  );
}
