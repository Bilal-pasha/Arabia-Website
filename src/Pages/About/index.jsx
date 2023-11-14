import React from "react";
import GridImage from "../../Assets/GridImage.png";
import { motion } from "framer-motion";
import NewsSection from "../../Components/News/index";
import TouchBymap from "../../Components/TouchBymap/index";
import { Typography } from "@material-tailwind/react";

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
      <motion.div
        className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 bg-white gridbackround"
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: "1" }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl p-8">
          <img
            src={data.ImageSource}
            alt="grid image"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-6 py-6 px-3 space-y-3">
          <Typography
            variant="p"
            className="lg:text-lg sm:text-sm font-semibold "
            color="black"
          >
            {data.intro}
          </Typography>
          <Typography variant="h2" className="" color="black">
            {data.Heading}
          </Typography>
          <Typography variant="p" className="" color="black">
            {data.firstParagraph}
          </Typography>
          <Typography variant="p" className="" color="black">
            {data.SecondParagraph}
          </Typography>
          <Typography variant="p" className="" color="black">
            {data.thirdParagraph}
          </Typography>
        </div>
      </motion.div>
      <NewsSection />
      {/* <TouchBymap /> */}
      <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d399.4739824816341!2d67.10218866183166!3d24.940211955449435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339eebe5eee29%3A0x6424e2502692d1ba!2sJamia%20Arabia%20islamia%20scout%20colony!5e0!3m2!1sen!2s!4v1699342216478!5m2!1sen!2s"
            style={{
              filter: " grayscale(1)",
              contrast: "(1.2)",
              opacity: "(0.4)",
            }}
          ></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
