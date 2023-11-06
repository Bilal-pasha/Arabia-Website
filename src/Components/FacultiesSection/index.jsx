import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Box from "./Component/Box";

export default function FacultiesSection() {
  const data = [
    {
      title: "Tahfeez ul Quran",
      description:
        "Dive into the sacred world of Quranic memorization and recitation with our Tahfeez ul Quran faculty, where students embark on a profound journey of preserving the divine word in their hearts.",
      btnValue: "Learn more",
    },
    {
      title: "Dars -e- Nizami",
      description:
        "Explore the depths of Islamic knowledge through our Darse Nizami faculty, where tradition meets modernity, and students engage in a comprehensive study of Islamic theology, jurisprudence, and spirituality.    ",
      btnValue: "Learn more",
    },
    {
      title: "Mahad ul Arabia",
      description:
        "Join the legacy of Islamic scholarship at our Mahad ul Arabia faculty, where aspiring scholars delve into advanced Arabic language and literature, equipping themselves to become torchbearers of Islamic wisdom.",
      btnValue: "Learn more",
    },
    {
      title: "Schooling System",
      description:
        " Discover an innovative and holistic approach to education within our Schooling System faculty, designed to nurture young minds with a strong foundation in both secular and Islamic studies, fostering well-rounded individuals ready to embrace the future.",
      btnValue: "Learn more",
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="lg:px-32 lg:py-24 sm:py-12 bg-gradient-to-r from-yellow-400 to-[#fde579] ...">
      <div className="grid lg:grid-cols-2 sm:grid-rows-1 lg:px-[100px] sm:px-6 lg:gap-20 sm:gap-12 text-black">
        <div
          className="lg:col-span-1 sm:row-span-1 space-y-6 lg:text-left sm:text-center"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          ref={ref}
        >
          <p className="">
            Discover the infinite possibilities that await you - OUR FACULTIES
          </p>
          <h2 className="font-[Poppins] lg:text-[32px] sm:text-2xl font-bold ">
            Embrace Global Perspectives: In a rapidly changing world, we equip
            you with the tools to bridge the gap between tradition and
            modernity.
          </h2>
          <button class="text-green-900 hover:before:bg-green-600 relative  px-4 py-2 overflow-hidden   bg-white rounded-lg  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-600 before:transition-all before:duration-50 hover:text-white hover:before:left-0 hover:before:w-full">
            <span class="relative z-10">See All Faculties</span>
          </button>
        </div>
        <div
          className="lg:col-span-1 sm:row-span-1 lg:text-left sm:text-center"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          ref={ref}
        >
          <p className="">
            Be Part of a Vibrant Community: Join a diverse and welcoming
            community of students who share your passion for learning and faith.
            Engage in thought-provoking discussions, participate in cultural
            events, and forge lifelong friendships.
          </p>
          <div className="flex lg:flex-row sm:flex-col  lg:flex-wrap sm:justify-center sm:items-center gap-5 pt-12">
            {data.map((value) => (
              <Box
                title={value.title}
                description={value.description}
                btnValue={value.btnValue}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
