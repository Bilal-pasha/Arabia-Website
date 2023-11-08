import React from "react";
import Grid from "../../Components/GridTextImage";
import GridImage from "../../Assets/GridImage.png";
import { motion } from "framer-motion";
import NewsSection from "../../Components/News/index";
import TouchBymap from "../../Components/TouchBymap/index";
const data = {
  intro: "Who we are",
  Heading: "Jamia Arabia Islamia",
  firstParagraph:
    "Our mission is to kindle the flames of enlightenment and empower the upcoming generation of scholars, leaders, and visionaries. We are steadfast in our dedication to offering exceptional education in the fields of Islamic studies and the Arabic language. However, to sustain and expand our significant influence, we rely on your support.",
  SecondParagraph:
    "By supporting us, you're playing an instrumental role in shaping the future by providing opportunities for eager minds to grow into knowledgeable scholars, compassionate leaders, and forward-thinking visionaries. We firmly believe in the transformative power of education, particularly in the fields of Islamic studies and Arabic language, and our unwavering commitment is a testament to this belief.",
  thirdParagraph:
    "Your support allows us to continue delivering a world-class education that not only fosters a deep understanding of our rich Islamic heritage but also equips students with the skills and knowledge to excel in a rapidly changing global landscape. Together, we can ensure that this mission of enlightenment endures and flourishes, leaving an indelible mark on the world for generations to come. Your contribution isn't just a donation; it's an investment in a brighter, more enlightened future.",
  ImageSource: GridImage,
};
export default function About() {
  return (
    <section>
      <div className="background flex flex-col justify-center items-center text-white text-center ">
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: "1" }}
          className="space-y-6 lg:block sm:hidden"
        >
          <div className="lg:text-6xl md:text-3xl sm:text-xl font-bold px-32 font-[Roboto] space-y-2">
            <h2>Experience learning in a modern,</h2>
            <h2>comfortable environment</h2>
          </div>
          <div className="lg:text-lg sm:text-xs">
            <p>
              Discover the infinite possibilities that await you – because at
              Islamic Arabic University,
            </p>
            <p>
              {" "}
              education transcends the ordinary and leads to an extraordinary
              future. Start your journey today!
            </p>
          </div>
        </motion.div>
      </div>
      <Grid
        intro={data.intro}
        Heading={data.Heading}
        paragraph1={data.firstParagraph}
        paragraph2={data.SecondParagraph}
        paragraph3={data.thirdParagraph}
        ImageSource={data.ImageSource}
      />
      <NewsSection />
      <TouchBymap />
    </section>
  );
}
