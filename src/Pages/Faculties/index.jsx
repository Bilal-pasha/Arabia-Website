// import React from "react";
// import LeftGrid from "../../Components/GridTextImage";
import GridImage from "../../Assets/GridImage.png";
// import RightGrid from "../../Components/GridImageText/index";
// export default function Faculties() {
//   const hifzsectiondata = {
//     intro: "",
//     Heading: "Tahfeez ul Quran Faculty",
//     firstParagraph:
//       "Immerse yourself in the sacred realm of Quranic memorization and recitation through our Tahfeez ul Quran faculty. Here, students embark on a deeply meaningful journey, where they wholeheartedly commit to etching the divine verses into their hearts and minds, ensuring the eternal preservation of this sacred knowledge.",
//     SecondParagraph:
//       "In this faculty, students don't merely learn about the Quran; they embrace a profound and transformative experience. They are guided by experienced instructors who understand the significance of preserving the divine word. Through rigorous study and heartfelt dedication, students not only memorize the Quran but also gain a profound understanding of its meanings, enabling them to carry the wisdom and guidance of this holy scripture throughout their lives.",
//     thirdParagraph:
//       "This journey of Tahfeez ul Quran is not just an educational pursuit; it's a spiritual and intellectual commitment to honor and safeguard the Quran's teachings. Students in this faculty become the custodians of this divine message, passing it on to future generations and ensuring that its light continues to shine brightly in the hearts of believers.",
//     ImageSource: GridImage,
//   };
//   const darsenizamisectiondata = {
//     intro: "",
//     Heading: "Darse Nizami Faculty",
//     firstParagraph:
//       "Embark on a profound journey of Islamic scholarship with our Darse Nizami faculty, where the timeless traditions of our faith seamlessly integrate with the demands of the modern world. In this faculty, students are immersed in a comprehensive study that delves deep into the intricate realms of Islamic theology, jurisprudence, and spirituality.",
//     SecondParagraph:
//       "Our Darse Nizami program offers a unique blend of classical wisdom and contemporary relevance. Here, students engage with the fundamental principles and intricate nuances of Islamic knowledge. They explore the rich tapestry of Islamic thought, learning to critically analyze and understand the theological aspects of their faith.",
//     thirdParagraph:
//       "Moreover, this faculty doesn't just teach theoretical knowledge; it fosters a profound sense of spirituality. Students not only acquire the academic expertise to navigate complex Islamic jurisprudence but also develop a deep connection with their faith. The curriculum encourages them to reflect on the moral and ethical dimensions of their beliefs, empowering them to be not just scholars but compassionate leaders and spiritual guides.",
//     ImageSource: GridImage,
//   };
//   const Arabicsectiondata = {
//     intro: "",
//     Heading: "Mahad ul Lugha tul Arabia Faculty",
//     firstParagraph:
//       "Mahad ul Arabia, often referred to simply as Mahad is an institution that plays a significant role in promoting the study of the Arabic language and Islamic sciences. It is typically a seminary or educational center where students, primarily from the Islamic world, come to acquire advanced knowledge in Arabic language, literature, and various aspects of Islamic studies. Here are some key points to know about Mahad ul Arabia",
//     SecondParagraph:
//       "Mahad ul Arabia is known for its rigorous Arabic language programs. Students in Mahad engage in in-depth language courses that not only cover the fundamentals of Arabic but also delve into its literature, grammar, and linguistics. This comprehensive approach to Arabic language education is particularly valuable for understanding and interpreting Islamic texts.",
//     thirdParagraph: "",
//     ImageSource: GridImage,
//   };
//   const SchoolSystemsectiondata = {
//     intro: "",
//     Heading: "Schooling System",
//     firstParagraph:
//       "Unearth a dynamic and all-encompassing educational approach within our Schooling System faculty, tailored to cultivate the young minds of today. Our curriculum is a carefully crafted blend of secular and Islamic studies, meticulously designed to mold well-rounded individuals, poised to confidently embrace the challenges and opportunities that the future holds.",
//     SecondParagraph:
//       "In our Schooling System, education goes beyond traditional boundaries. We prioritize innovation, not just in our teaching methods but also in the curriculum itself. Students benefit from a well-balanced education that not only equips them with the knowledge and skills needed to excel in contemporary fields but also nurtures their spiritual and moral development through the study of Islamic values.",
//     thirdParagraph:
//       "Our faculty provides a unique opportunity for students to explore a harmonious synergy between worldly knowledge and spiritual growth. They are encouraged to think critically, solve problems, and engage with the broader world, all while retaining a deep-rooted connection to their faith.",
//     ImageSource: GridImage,
//   };
//   return (
//     <section>
//       <div className="background"></div>
//       <LeftGrid
//         intro={null}
//         Heading={hifzsectiondata.Heading}
//         paragraph1={hifzsectiondata.firstParagraph}
//         paragraph2={hifzsectiondata.SecondParagraph}
//         paragraph3={hifzsectiondata.thirdParagraph}
//         ImageSource={hifzsectiondata.ImageSource}
//       />
//       <RightGrid
//         intro={null}
//         Heading={darsenizamisectiondata.Heading}
//         paragraph1={darsenizamisectiondata.firstParagraph}
//         paragraph2={darsenizamisectiondata.SecondParagraph}
//         paragraph3={darsenizamisectiondata.thirdParagraph}
//         ImageSource={darsenizamisectiondata.ImageSource}
//       />
//       <LeftGrid
//         intro={null}
//         Heading={Arabicsectiondata.Heading}
//         paragraph1={Arabicsectiondata.firstParagraph}
//         paragraph2={Arabicsectiondata.SecondParagraph}
//         paragraph3={Arabicsectiondata.thirdParagraph}
//         ImageSource={Arabicsectiondata.ImageSource}
//       />
//       <RightGrid
//         intro={null}
//         Heading={SchoolSystemsectiondata.Heading}
//         paragraph1={SchoolSystemsectiondata.firstParagraph}
//         paragraph2={SchoolSystemsectiondata.SecondParagraph}
//         paragraph3={SchoolSystemsectiondata.thirdParagraph}
//         ImageSource={SchoolSystemsectiondata.ImageSource}
//       />
//     </section>
//   );
// }

import React from "react";

import { Typography } from "@material-tailwind/react";

const hifzsectiondata = {
  intro: "",
  Heading: "Tahfeez ul Quran Faculty",
  firstParagraph:
    "Immerse yourself in the sacred realm of Quranic memorization and recitation through our Tahfeez ul Quran faculty. Here, students embark on a deeply meaningful journey, where they wholeheartedly commit to etching the divine verses into their hearts and minds, ensuring the eternal preservation of this sacred knowledge.",
  SecondParagraph:
    "In this faculty, students don't merely learn about the Quran; they embrace a profound and transformative experience. They are guided by experienced instructors who understand the significance of preserving the divine word. Through rigorous study and heartfelt dedication, students not only memorize the Quran but also gain a profound understanding of its meanings, enabling them to carry the wisdom and guidance of this holy scripture throughout their lives.",
  thirdParagraph:
    "This journey of Tahfeez ul Quran is not just an educational pursuit; it's a spiritual and intellectual commitment to honor and safeguard the Quran's teachings. Students in this faculty become the custodians of this divine message, passing it on to future generations and ensuring that its light continues to shine brightly in the hearts of believers.",
  ImageSource: GridImage,
};
const darsenizamisectiondata = {
  intro: "",
  Heading: "Darse Nizami Faculty",
  firstParagraph:
    "Embark on a profound journey of Islamic scholarship with our Darse Nizami faculty, where the timeless traditions of our faith seamlessly integrate with the demands of the modern world. In this faculty, students are immersed in a comprehensive study that delves deep into the intricate realms of Islamic theology, jurisprudence, and spirituality.",
  SecondParagraph:
    "Our Darse Nizami program offers a unique blend of classical wisdom and contemporary relevance. Here, students engage with the fundamental principles and intricate nuances of Islamic knowledge. They explore the rich tapestry of Islamic thought, learning to critically analyze and understand the theological aspects of their faith.",
  thirdParagraph:
    "Moreover, this faculty doesn't just teach theoretical knowledge; it fosters a profound sense of spirituality. Students not only acquire the academic expertise to navigate complex Islamic jurisprudence but also develop a deep connection with their faith. The curriculum encourages them to reflect on the moral and ethical dimensions of their beliefs, empowering them to be not just scholars but compassionate leaders and spiritual guides.",
  ImageSource: GridImage,
};
const Arabicsectiondata = {
  intro: "",
  Heading: "Mahad ul Lugha tul Arabia Faculty",
  firstParagraph:
    "Mahad ul Arabia, often referred to simply as Mahad is an institution that plays a significant role in promoting the study of the Arabic language and Islamic sciences. It is typically a seminary or educational center where students, primarily from the Islamic world, come to acquire advanced knowledge in Arabic language, literature, and various aspects of Islamic studies. Here are some key points to know about Mahad ul Arabia",
  SecondParagraph:
    "Mahad ul Arabia is known for its rigorous Arabic language programs. Students in Mahad engage in in-depth language courses that not only cover the fundamentals of Arabic but also delve into its literature, grammar, and linguistics. This comprehensive approach to Arabic language education is particularly valuable for understanding and interpreting Islamic texts.",
  thirdParagraph: "",
  ImageSource: GridImage,
};
const SchoolSystemsectiondata = {
  intro: "",
  Heading: "Schooling System",
  firstParagraph:
    "Unearth a dynamic and all-encompassing educational approach within our Schooling System faculty, tailored to cultivate the young minds of today. Our curriculum is a carefully crafted blend of secular and Islamic studies, meticulously designed to mold well-rounded individuals, poised to confidently embrace the challenges and opportunities that the future holds.",
  SecondParagraph:
    "In our Schooling System, education goes beyond traditional boundaries. We prioritize innovation, not just in our teaching methods but also in the curriculum itself. Students benefit from a well-balanced education that not only equips them with the knowledge and skills needed to excel in contemporary fields but also nurtures their spiritual and moral development through the study of Islamic values.",
  thirdParagraph:
    "Our faculty provides a unique opportunity for students to explore a harmonious synergy between worldly knowledge and spiritual growth. They are encouraged to think critically, solve problems, and engage with the broader world, all while retaining a deep-rooted connection to their faith.",
  ImageSource: GridImage,
};
export function ContentSection11() {
  return (
    <>
      <div className="background"></div>
      <section className="mx-auto lg:px-[100px] md:px-4 sm:px-4 flex w-full max-w-full flex-col items-center bg-white gridbackround">
        <div className="mt-8 space-y-24">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl p-8">
              <img src={GridImage} alt="grid image" className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-6 py-6 space-y-6">
              <Typography variant="h2" className="" color="black">
                {hifzsectiondata.Heading}
              </Typography>
              <Typography variant="p" className="" color="black">
                {hifzsectiondata.firstParagraph}
              </Typography>
              <Typography variant="p" className="" color="black">
                {hifzsectiondata.SecondParagraph}
              </Typography>
              <Typography variant="p" className="" color="black">
                {hifzsectiondata.thirdParagraph}
              </Typography>
            </div>
          </div>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6 py-6 space-y-6">
              <Typography variant="h2" className="" color="black">
                {darsenizamisectiondata.Heading}
              </Typography>
              <Typography variant="p" className="" color="black">
                {darsenizamisectiondata.firstParagraph}
              </Typography>
              <Typography variant="p" className="" color="black">
                {darsenizamisectiondata.SecondParagraph}
              </Typography>
              <Typography variant="p" className="" color="black">
                {darsenizamisectiondata.thirdParagraph}
              </Typography>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl p-8">
              <img src={GridImage} alt="grid image" className="w-full h-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl p-8">
              <img src={GridImage} alt="grid image" className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-6 py-6 space-y-6">
              <Typography variant="h2" className="" color="black">
                {Arabicsectiondata.Heading}
              </Typography>
              <Typography variant="p" className="" color="black">
                {Arabicsectiondata.firstParagraph}
              </Typography>
              <Typography variant="p" className="" color="black">
                {Arabicsectiondata.SecondParagraph}
              </Typography>
              <Typography variant="p" className="" color="black">
                {Arabicsectiondata.thirdParagraph}
              </Typography>
            </div>
          </div>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6 py-6 space-y-6">
              <Typography variant="h2" className="" color="black">
                {SchoolSystemsectiondata.Heading}
              </Typography>
              <Typography variant="p" className="" color="black">
                {SchoolSystemsectiondata.firstParagraph}
              </Typography>
              <Typography variant="p" className="" color="black">
                {SchoolSystemsectiondata.SecondParagraph}
              </Typography>
              <Typography variant="p" className="" color="black">
                {SchoolSystemsectiondata.thirdParagraph}
              </Typography>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl p-8">
              <img src={GridImage} alt="grid image" className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContentSection11;
