import React from "react";
import BackgroundImage from "../../Assets/background.jpg";
import BackGroundSection from "../../Components/BackgroundImage/index";
import FacultiesSection from "../../Components/FacultiesSection";
import StatisticGlance from "../../Components/StatisticGlance/index";
import Whitebox from "../../Components/WhiteSection/index";
import NewsSection from "../../Components/News/index";
import BackgroundImage2 from "../../Assets/AboutBackGroundImage.jpg";
import ContactForm from "../../Components/ContactForm/index";
export default function Home() {
  return (
    <>
      <BackGroundSection
        imageSource2={BackgroundImage2}
        ImageDesciption="Background-Image"
        style="w-full lg:h-[70vh] sm:h-auto md:h-auto sm:h-auto object-contain bg-cover bg-fixed "
      />
      <Whitebox />
      <FacultiesSection />
      <StatisticGlance />
      <NewsSection />
      <ContactForm />
    </>
  );
}
