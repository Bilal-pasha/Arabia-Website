// import React, { useRef } from "react";
import NewsImage from "../../Assets/NewsImage.png";
// import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
// const animateBox = { delay: 2, ease: "easeInOut", duration: 0.5 };
function BlogPostCard({ img, title, desc, index }) {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  return (
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
      <Card
        color="transparent"
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        class="py-6 shadow-2xl"
        // shadow={false}
        // style={{
        //   transform: isInView ? "none" : "translateX(-200px)",
        //   opacity: isInView ? 1 : 0,
        //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        // }}
        // ref={ref}
      >
        <CardHeader floated={false} className="w-full h-full mx-0 mb-6">
          <img src={img} alt={title} className="object-cover w-full h-full" />
        </CardHeader>
        <CardBody className="p-0 px-4 text-center">
          <Typography
            as="a"
            href="#"
            variant="h4"
            color="blue-gray"
            className="mb-2 normal-case">
            {title}
          </Typography>
          <Typography className="mb-6 font-normal !text-gray-500">
            {desc}
          </Typography>
          <button className="relative px-4 py-2 overflow-hidden text-green-900 transition-all bg-white border rounded-lg shadow-2xl hover:before:bg-green-600 before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-600 before:transition-all before:duration-50 hover:text-white hover:before:left-0 hover:before:w-full">
            <span className="relative z-10">View all News</span>
          </button>
        </CardBody>
      </Card>
    </motion.div>
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
    <section className="px-8 py-8 lg:py-28">
      <div className="text-center lg:container lg:mx-auto lg:mb-20 lg:my-0 sm:my-10 lg:space-y-0 sm:space-y-6">
        <Typography
          variant="h1"
          color="blue-gray"
          className="font-[Poppins] text-5xl font-bold text-black lg:pb-8">
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
      <div className="grid grid-cols-1 gap-20 lg:container lg:mx-auto md:grid-cols-2 lg:grid-cols-4">
        {posts.map(({ img, title, desc }) => (
          <BlogPostCard key={title} img={img} title={title} desc={desc} />
        ))}
      </div>
    </section>
  );
}

export default BlogSection6;
