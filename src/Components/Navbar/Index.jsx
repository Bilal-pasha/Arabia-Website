import Icon from "./Hamburger";
import Logo from "../../Assets/Logo.png";
// import Accordian from "./Accordian/Accordian";
export default function Toolbar() {
  return (
    <>
      <nav class="flex h-[100px] items-center lg:justify-between md:justify-between sm:justify-between lg:px-32 md:px-5 sm:px-4 dark-mode:text-gray-200 py-4 dark-mode:bg-gray-800 bg-gradient-to-r from-yellow-400 to-white-300 ... text-gray-700 sticky top-0 z-50 shadow-lg bg-opacity-95">
        <input type="checkbox" id="check" class="hidden peer" checked />
        <label
          for="check"
          class="lg:hidden md:block sm:block text-4xl cursor-pointer"
        >
          <Icon />
        </label>
        <div className="flex items-center pb-2">
          <img src={Logo} alt="logoImage" />
        </div>
        <ul
          class="lg:flex lg:items-center md:hidden sm:hidden lg:static sm:fixed sm:peer-checked:left-[-100%] sm:left-0 sm:transition-all md:duration-[900ms] sm:duration-[900ms] md:top-[70px] sm:top-[70px]
            lg:w-auto lg:h-auto md:w-full sm:w-full md:h-[100vh] sm:h-[100vh] text-black lg:space-y-0 md:space-y-5 sm:space-y-5 lg:py-0 md:py-10 sm:py-10 md:z-20 sm:z-20
           "
        >
          <li class="lg:border-none md:border-b-[1px] lg:py-0 md:py-4 sm:py-4 md:border-[#cdc6c6] sm:border-b-[1px] sm:border-[#cdc6c6]">
            <div class="relative">
              <button class="peer lg:px-4 md:px-0 lg:py-2 lg:text-black md:text-black">
                <a
                  class="lg:px-4 md:px-4 sm:px-4 py-2 mt-2 text-lg font-semibold text-green-900 rounded-lg hover:border-blue hover:text-blue dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/Video_production"
                >
                  Faculties
                </a>
              </button>
              <div
                class="absolute hidden peer-hover:flex hover:flex
                     w-[200px]
                     flex-col bg-white drop-shadow-lg text-black z-10"
              >
                <a
                  class="px-5 py-3 hover:text-blue"
                  href="/Video_production#CORPORATE"
                >
                  CORPORATE VIDEOS
                </a>
                <a
                  class="px-5 py-3 hover:text-blue"
                  href="/Video_production#Legal"
                >
                  LEGAL VIDEOS
                </a>
              </div>
            </div>
          </li>
          <li class="lg:border-none md:border-b-[1px] lg:py-0 md:py-4 sm:py-4 md:border-[#cdc6c6] sm:border-b-[1px] sm:border-[#cdc6c6]">
            <a
              class="lg:px-4 md:px-4 sm:px-4 py-2 mt-2 text-lg font-semibold text-green-900 rounded-lg hover:border-blue hover:text-blue md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="/About"
            >
              About us
            </a>
          </li>
          <li class="lg:border-none md:border-b-[1px] lg:py-0 md:py-4 sm:py-4 md:border-[#cdc6c6] sm:border-b-[1px] sm:border-[#cdc6c6]">
            <a
              class="lg:px-4 md:px-4 sm:px-4 py-2 mt-2 text-lg font-semibold text-green-900 rounded-lg hover:border-blue hover:text-blue md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="/About"
            >
              Contact us
            </a>
          </li>
          <li class="lg:border-none md:border-b-[1px] lg:py-0 md:py-4 sm:py-4 md:border-[#cdc6c6] sm:border-b-[1px] sm:border-[#cdc6c6]">
            <div class="relative">
              <button class="peer lg:px-4 md:px-0 lg:py-2 lg:text-black md:text-black">
                <a
                  class="lg:px-4 md:px-4 sm:px-4 py-2 mt-2 text-lg font-semibold text-green-900 rounded-lg hover:border-blue hover:text-blue dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/Video_production"
                >
                  More
                </a>
              </button>
              <div
                class="absolute hidden peer-hover:flex hover:flex
                     w-[200px]
                     flex-col bg-white drop-shadow-lg text-black z-10"
              >
                <a
                  class="px-5 py-3 hover:text-blue"
                  href="/Video_production#CORPORATE"
                >
                  CORPORATE VIDEOS
                </a>
                <a
                  class="px-5 py-3 hover:text-blue"
                  href="/Video_production#Legal"
                >
                  LEGAL VIDEOS
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div className="space-x-4 lg:block sm:hidden">
          <button className="px-4 py-2  border-2 border-green-900 rounded-lg text-black">
            Sign in
          </button>
          <button className="px-4 py-2 bg-green-900 rounded-lg text-white">
            Sign up
          </button>
        </div>
        {/* <div class="md:block md:peer-checked:left-[-100%] md:fixed md:left-0 md:transition-all md:duration-[900ms] md:top-[70px] md:h-[100vh] md:bg-[#fffffff2] w-full md:py-10 md:space-y-10 sm:block sm:peer-checked:left-[-100%] sm:fixed sm:left-0 sm:transition-all sm:duration-[900ms] sm:top-[70px] sm:h-[100vh] sm:bg-[#fffffff2] sm:py-10 sm:space-y-10">
          <Accordian />
        </div> */}
      </nav>
    </>
  );
}
