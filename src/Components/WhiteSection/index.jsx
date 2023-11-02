import React from "react";
import Button from "../Button";

const Whitebox = () => {
  return (
    <>
      <section className="bg-white text-black px-32 py-20">
        <div className="px-[100px] space-y-20">
          <div className=" space-y-12 flex flex-wrap">
            <h2 className="text-5xl font-semibold font-[Roboto]">
              Unlock the Gateway to Wisdom and Enlightenment at Jamia Arabia
              Islamia
            </h2>
            <p className="text-xl text-slate-600 font-[Roboto] font-thin">
              Welcome to a world where tradition meets innovation, and faith
              meets knowledge. At Jamia Arabia Islamia, we are not just an
              institution; we are a timeless journey of discovery,
              enlightenment, and transformation.
            </p>
          </div>
          <div className="space-x-6">
            <Button
              value={"Faculties"}
              textcolor={"white"}
              bgcolor={"green-900"}
            />
            <Button
              value={"Contact"}
              textcolor={"black"}
              bordercolor={"green-900"}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Whitebox;
