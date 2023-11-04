import React from "react";
import BackgroundImage from "../../Assets/background.jpg";
import BackGroundSection from "../../Components/BackgroundImage/index";
import FacultiesSection from "../../Components/FacultiesSection";
import StatisticGlance from "../../Components/StatisticGlance/index";
import Whitebox from "../../Components/WhiteSection/index";
import NewsSection from "../../Components/News/index";
export default function Home() {
  return (
    <>
      <BackGroundSection
        ImageSource={BackgroundImage}
        ImageDesciption="Background-Image"
        style="w-full h-[70vh] object-fit bg-cover bg-fixed "
      />
      <Whitebox />
      <FacultiesSection />
      <StatisticGlance />
      <NewsSection />
    </>
  );
}
