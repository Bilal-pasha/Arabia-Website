import React from "react";

export default function Form() {
  return (
    <>
      <div className="w-full h-full">
        <div className="bg-white h-[20vh] w-full flex flex-col justify-center items-center sm:px-5">
          <h2 className="lg:text-4xl sm:text-2xl font-bold sm:text-center">
            Registration for Inter Madaris Scouts Camping 2023
          </h2>
          <p className="lg:text-xl sm:text-sm pt-3">
            Organized by{" "}
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-400 relative inline-block">
              <span class="relative text-white">Jamia Arabia Islamia </span>
            </span>
          </p>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScfMbPGg_atGPGADla6ZaTPGuCoZLTr8n9C4uvwftCohVWmzg/viewform?embedded=true"
          width="100%"
          height="1200"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          className="py-10"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
}
