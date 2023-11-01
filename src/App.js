import Navbar from "./Components/Navbar/Index";
import BackGroundSection from "./Components/BackgroundImage/index";
import BackgroundImage from "./Assets/background.png";
export default function App() {
  return (
    <>
      <Navbar />
      <BackGroundSection
        ImageSource={BackgroundImage}
        ImageDesciption="Background-Image"
        // eslint-disable-next-line react/style-prop-object
        style="w-full object-fit bg-cover bg-fixed"
      />
    </>
  );
}
