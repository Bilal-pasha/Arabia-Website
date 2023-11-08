// import "./accordion.css";

import { useState } from "react";

export default function AccordianComponent() {
  const [down, setDown] = useState(false);
  console.log(down);
  return (
    <>
      <div>
        <div class="mt-[8px] border-[1px] border-[black] text-black box-border font-bold text-[16px]  py-[20px] px-[32px] hover:bg-yellow-400 cursor-pointer ">
          <input
            type="checkbox"
            id="check"
            className="hidden peer"
            checked={false}
            // onChange={() => setOpen(!open)}
          />
          <label
            for="check"
            className="lg:hidden md:block sm:block  cursor-pointer"
          >
            <a href="/faculties">Faculties</a>
          </label>
          <div className="sm:hidden sm:peer-checked:block">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
            ipsa nemo deleniti quia dicta facilis accusamus quod corporis. Fugit
            veniam quas facilis obcaecati quam aut autem corrupti ipsa
            accusantium error.
          </div>
        </div>
        <div class="mt-[8px] border-[1px] border-[black] text-black box-border font-bold text-[16px]  py-[20px] px-[32px] hover:bg-yellow-400 cursor-pointer">
          <a href="/About" class="hover:text-blue">
            About us
          </a>
        </div>
        <div class="mt-[8px] border-[1px] border-[black] text-black box-border font-bold text-[16px]  py-[20px] px-[32px] hover:bg-yellow-400 cursor-pointer">
          <a href="/About" class="hover:text-blue">
            Contact us
          </a>
        </div>
        <div class="mt-[8px] border-[1px] border-[black] text-black box-border font-bold text-[16px]  py-[20px] px-[32px] hover:bg-yellow-400 cursor-pointer">
          <a href="/more" class="hover:text-blue">
            More
          </a>
        </div>
        <div className="flex flex-col space-y-5 px-2 py-4">
          <button class="relative px-4 py-2 overflow-hidden border bg-green-900 text-white border-indigo-600 rounded-lg shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
            <span class="relative z-10">Sign in</span>
          </button>
          <button class="text-green-900 hover:before:bg-green-600 relative  px-4 py-2 overflow-hidden border  bg-white rounded-lg  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-600 before:transition-all before:duration-50 hover:text-white hover:before:left-0 hover:before:w-full">
            <span class="relative z-10">Sign up</span>
          </button>
        </div>
      </div>
    </>
  );
}
