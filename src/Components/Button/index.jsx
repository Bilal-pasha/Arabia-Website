import React from "react";

export default function Button({ value, bordercolor, textcolor, bgcolor }) {
  return (
    <button
      className={`px-4 py-2  border-[0.5px] border-${bordercolor} rounded-lg text-${textcolor} bg-${bgcolor}`}
    >
      {value}
    </button>
  );
}
