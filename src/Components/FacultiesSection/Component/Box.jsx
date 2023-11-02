import React from "react";
import Button from "../../Button";

export default function Box({ title, description, btnValue }) {
  return (
    <div className="flex flex-col justify-between border-[0.5px] border-white text-white w-[40%] rounded-lg py-2 px-4 space-y-2 ">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm">{description}</p>
      <Button value={btnValue} bgcolor={"white"} textcolor={"black"} />
    </div>
  );
}
