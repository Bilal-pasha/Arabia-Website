import Icon from "./Hamburger";
import Logo from "../../Assets/Logo.png";
import Button from "../Button/index";
// import Accordian from "./Accordian/Accordian";
export default function Toolbar() {
  return (
    <>
      <nav class="flex h-[140px] items-center lg:justify-between md:justify-between sm:justify-between lg:px-16 md:px-5 sm:px-4 dark-mode:text-gray-200 py-4 dark-mode:bg-gray-800 bg-gradient-to-r from-yellow-400 to-[#fde579ed] ... text-gray-700 sticky top-0 shadow-lg z-50	">
        <input type="checkbox" id="check" class="hidden peer" checked />
        <label
          for="check"
          class="lg:hidden md:block sm:block text-4xl cursor-pointer"
        >
          <Icon />
        </label>
        <div className="flex items-center pb-2">
          <a href="/" className="flex flex-col items-center">
            <img src={Logo} alt="logoImage" />
            <p className="urdutext text-xl ">
              جامعہ عربیہ اسلامیہ <span className="text-xs">اسکاؤٹ کالونی</span>
            </p>
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
                  class="lg:px-4 md:px-4 sm:px-4 py-2 mt-2 text-lg font-semibold text-green-900 rounded-lg  hover:text-green-600 dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600  md:mt-0 "
                  href="/faculties"
                >
                  Faculties
                </a>
              </button>
              <div
                class="absolute  items-center hidden peer-hover:flex hover:flex mr-10
                     w-[150px]
                     flex-col bg-white drop-shadow-lg text-black z-10 space-y-4 py-3"
              >
                <a
                  class="hover:text-green-600"
                  href="/Video_production#CORPORATE"
                >
                  Tahfeez ul Quran
                </a>
                <a class="hover:text-green-600" href="/Video_production#Legal">
                  Dars -e- Nizami
                </a>
                <a class="hover:text-green-600" href="/Video_production#Legal">
                  Mahad ul Arabia
                </a>
                <a class="hover:text-green-600" href="/Video_production#Legal">
                  Schooling System
                </a>
              </div>
            </div>
          </li>
          <li class="lg:border-none md:border-b-[1px] lg:py-0 md:py-4 sm:py-4 md:border-[#cdc6c6] sm:border-b-[1px] sm:border-[#cdc6c6]">
            <a
              class="lg:px-4 md:px-4 sm:px-4 py-2 mt-2 text-lg font-semibold text-green-900 rounded-lg  hover:text-green-600 dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600  md:mt-0 "
              href="/about"
            >
              About us
            </a>
          </li>
          <li class="lg:border-none md:border-b-[1px] lg:py-0 md:py-4 sm:py-4 md:border-[#cdc6c6] sm:border-b-[1px] sm:border-[#cdc6c6]">
            <a
              class="lg:px-4 md:px-4 sm:px-4 py-2 mt-2 text-lg font-semibold text-green-900 rounded-lg  hover:text-green-600 dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600  md:mt-0 "
              href="/contact"
            >
              Contact us
            </a>
          </li>
          <li class="lg:border-none md:border-b-[1px] lg:py-0 md:py-4 sm:py-4 md:border-[#cdc6c6] sm:border-b-[1px] sm:border-[#cdc6c6]">
            <div class="relative">
              <button class="peer lg:px-4 md:px-0 lg:py-2 lg:text-black md:text-black">
                <a
                  class="lg:px-4 md:px-4 sm:px-4 py-2 mt-2 text-lg font-semibold text-green-900 rounded-lg  hover:text-green-600 dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600  md:mt-0 "
                  href="/more"
                >
                  More
                </a>
              </button>
              <div
                class="absolute  items-center hidden peer-hover:flex hover:flex mr-10
                     w-[150px]
                     flex-col bg-white drop-shadow-lg text-black z-10 space-y-4 py-3"
              >
                <a
                  class="hover:text-green-600"
                  href="/Video_production#CORPORATE"
                >
                  Tahfeez ul Quran
                </a>
                <a class="hover:text-green-600" href="/Video_production#Legal">
                  Dars -e- Nizami
                </a>
                <a class="hover:text-green-600" href="/Video_production#Legal">
                  Mahad ul Arabia
                </a>
                <a class="hover:text-green-600" href="/Video_production#Legal">
                  Schooling System
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div className="space-x-4 lg:block sm:hidden">
          <button class="text-green-900 hover:before:bg-green-600 relative  px-4 py-2 overflow-hidden border  bg-white rounded-lg  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-600 before:transition-all before:duration-50 hover:text-white hover:before:left-0 hover:before:w-full">
            <span class="relative z-10">Sign in</span>
          </button>
          <button class="relative px-4 py-2 overflow-hidden border bg-green-900 text-white border-indigo-600 rounded-lg shadow-2xl transition-all duration-50 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-600 before:duration-500 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
            <span class="relative z-10">Sign up</span>
          </button>
        </div>
      </nav>
    </>
  );
}
