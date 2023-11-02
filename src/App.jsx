import BackGroundSection from "./Components/BackgroundImage/index";
import BackgroundImage from "./Assets/background.png";
import { useEffect, useState } from "react";
import { Spinner } from "./Components/Spinner/Index";
import Layout from "./layout/Defaultlayout/index";
import Whitebox from "./Components/WhiteSection/index";
import { AnimatePresence } from "framer-motion";
import FacultiesSection from "./Components/FacultiesSection";
import StatisticGlance from "../src/Components/StatisticGlance/index";
import NewsSection from "./Components/News/index";
export default function App() {
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 1600);
  }, []);
  return (
    <>
      {timer ? (
        <AnimatePresence>
          <Spinner key={0} />
        </AnimatePresence>
      ) : (
        <>
          <Layout>
            <BackGroundSection
              ImageSource={BackgroundImage}
              ImageDesciption="Background-Image"
              style="w-full h-[70vh] object-fit bg-cover bg-fixed "
            />
            <Whitebox />
            <FacultiesSection />
            <StatisticGlance />
            <NewsSection />
          </Layout>
        </>
      )}
    </>
  );
}
