import React, { useRef } from "react";
import NewsImage from "../../Assets/NewsImage.png";
import { useInView } from "framer-motion";
// // import { motion } from "framer-motion";

// const data = [
//   {
//     description: "",
//   },
//   {
//     description: "",
//   },
//   {
//     description: "",
//   },
// ];
// export default function NewsSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   return (
//     <section className="lg:py-20 lg:px-32 sm:px-8 sm:py-16 bg-gradient-to-r from-yellow-400 to-[#fde579] ...">
//       <div
//         className="text-center lg:space-y-12 sm:space-y-10 lg:px-[100px]"
//         style={{
//           transform: isInView ? "none" : "translateX(-200px)",
//           opacity: isInView ? 1 : 0,
//           transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//         }}
//         ref={ref}
//       >
//         <div className="space-y-8">
//           <h2 className="font-[Poppins] text-5xl font-bold text-black">
//             Latest news
//           </h2>
//           <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
//             Welcome to a world where tradition meets innovation, and faith meets
//             knowledge. At ,
//             <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-600 relative inline-block">
//               <span class="relative text-white">Jamia Arabia Islamia </span>
//             </span>
//             , we are not just an institution; we are a timeless journey of
//             discovery, enlightenment, and transformation.
//           </blockquote>
//         </div>
//         <div className="flex lg:flex-row sm:flex-col lg:justify-between sm:justify-center items-center lg:space-y-0 sm:space-y-10">
//           {data.map((value) => (
//             <div
//               class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//               style={{
//                 transform: isInView ? "none" : "translateX(-200px)",
//                 opacity: isInView ? 1 : 0,
//                 transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//               }}
//               ref={ref}
//             >
//               <a href="#">
//                 <img
//                   class="rounded-t-lg"
//                   src={NewsImage}
//                   alt="News-Image"
//                   className="pb-6"
//                 />
//               </a>
//               <div class="pb-6 px-2">
//                 <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
//                 <button className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden border bg-green-900 text-white border-indigo-600 rounded-lg shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
//                   <span class="relative z-10 flex items-center">
//                     Read more
//                     <svg
//                       class="w-3.5 h-3.5 ml-2"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 14 10"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M1 5h12m0 0L9 1m4 4L9 9"
//                       />
//                     </svg>
//                   </span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button className="text-green-900 hover:before:bg-green-600 relative  px-4 py-2 overflow-hidden border  bg-white rounded-lg  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-600 before:transition-all before:duration-50 hover:text-white hover:before:left-0 hover:before:w-full">
//           <span className="relative z-10">View all News</span>
//         </button>
//       </div>
//     </section>
//   );
// }
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function BlogPostCard({ img, title, desc }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Card
      color="transparent"
      shadow={false}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={ref}
    >
      <CardHeader floated={false} className="mx-0 mb-6 h-full w-full">
        <img src={img} alt={title} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody className="p-0 text-center">
        <Typography
          as="a"
          href="#"
          variant="h4"
          color="blue-gray"
          className="mb-2 normal-case"
        >
          {title}
        </Typography>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <button className="text-green-900 hover:before:bg-green-600 relative  px-4 py-2 overflow-hidden border  bg-white rounded-lg  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-600 before:transition-all before:duration-50 hover:text-white hover:before:left-0 hover:before:w-full">
          <span className="relative z-10">View all News</span>
        </button>
      </CardBody>
    </Card>
  );
}

const posts = [
  {
    img: NewsImage,
    title: "Siri brings hands-free",
    desc: "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers",
  },
  {
    img: NewsImage,
    title: "More Comfort",
    desc: "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers",
  },
  {
    img: NewsImage,
    title: "Train Your Brain",
    desc: "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers",
  },
  {
    img: NewsImage,
    title: "Grow Your Business",
    desc: "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers",
  },
];

export function BlogSection6() {
  return (
    <section className="py-8 px-8 lg:py-28">
      <div className="lg:container lg:mx-auto lg:mb-20 lg:my-0 sm:my-10 text-center lg:space-y-0 sm:space-y-6">
        <Typography
          variant="h1"
          color="blue-gray"
          className="font-[Poppins] text-5xl font-bold text-black lg:pb-8"
        >
          Latest news
        </Typography>
        <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
          Welcome to a world where tradition meets innovation, and faith meets
          knowledge. At ,
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-600 relative inline-block">
            <span class="relative text-white">Jamia Arabia Islamia </span>
          </span>
          , we are not just an institution; we are a timeless journey of
          discovery, enlightenment, and transformation.
        </blockquote>
      </div>
      <div className="lg:container lg:mx-auto grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4">
        {posts.map(({ img, title, desc }) => (
          <BlogPostCard key={title} img={img} title={title} desc={desc} />
        ))}
      </div>
    </section>
  );
}

export default BlogSection6;
