import React from "react";
import Button from "../../Button";

export default function Box({ title, description, btnValue }) {
  return (
    <div className="flex flex-col justify-between shadow-2xl text-black lg:w-[40%] sm:w-full rounded-lg py-6 px-4 space-y-2 ">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm">{description}</p>
      <button class="text-green-900 hover:before:bg-green-600 relative  px-4 py-2 overflow-hidden   bg-white rounded-lg  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-600 before:transition-all before:duration-50 hover:text-white hover:before:left-0 hover:before:w-full">
        <span class="relative z-10">{btnValue}</span>
      </button>
    </div>
  );
}
