import React from "react";
import Button from "../Button";
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
  return (
    <section className="px-32 py-12 bg-gradient-to-r from-yellow-400 to-white-300 ...">
      <div className="grid grid-cols-2 px-[100px] gap-20">
        <div className="col-span-1 space-y-6">
          <p className="text-slate-200">
            Discover the infinite possibilities that await you - OUR FACULTIES
          </p>
          <h2 className="font-[Poppins] text-[32px] font-bold text-white">
            Embrace Global Perspectives: In a rapidly changing world, we equip
            you with the tools to bridge the gap between tradition and
            modernity.
          </h2>
          <Button
            value={"See All Faculties"}
            bgcolor={"white"}
            textcolor={"black"}
          />
        </div>
        <div className="col-span-1">
          <p className="text-slate-200">
            Be Part of a Vibrant Community: Join a diverse and welcoming
            community of students who share your passion for learning and faith.
            Engage in thought-provoking discussions, participate in cultural
            events, and forge lifelong friendships.
          </p>
          <div className="flex flex-wrap gap-5 py-12">
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
