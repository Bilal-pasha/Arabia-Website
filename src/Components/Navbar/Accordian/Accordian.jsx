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
            Faculties
          </label>
          <div className="sm:hidden sm:peer-checked:block">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
            ipsa nemo deleniti quia dicta facilis accusamus quod corporis. Fugit
            veniam quas facilis obcaecati quam aut autem corrupti ipsa
            accusantium error.
          </div>
          {/* <button
            onClick={() => setDown(!down)}
            className="w-full flex justify-start"
          >
            Faculties
          </button>
          {down && (
            <div>
              <a href="">hello</a>
              <a href="">hello</a>
            </div>
          )} */}
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
          <button class="hover:text-blue">More</button>
        </div>
      </div>
    </>
  );
}
