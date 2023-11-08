import React, { useRef } from "react";
import { useInView } from "framer-motion";
export default function Mao() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <section className="bg-white lg:px-32 sm:px-6 lg:py-20 sm:py-20  backGroundLite">
        <div className="lg:px-[100px]">
          <div className="flex lg:flex-row sm:flex-col lg:justify-between lg:space-x-32 lg:space-y-0 sm:space-y-20">
            <div
              className="space-y-5 text-lg  "
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              ref={ref}
            >
              <h2 className="lg:text-5xl md:text-3xl sm:text-xl font-bold">
                Get in touch
              </h2>
              <p>Got any queries? feel free to get in touch with us.</p>
              <h2 className="lg:text-2xl md:text-xl sm:text-xl font-semibold">
                Location
              </h2>
              <a
                href="https://maps.app.goo.gl/tnh7NauUE6n9BCUy9"
                className="border-b-black border-2 "
              >
                https://maps.app.goo.gl/tnh7NauUE6n9BCUy9
              </a>
              <br />
              <br />
              <a href="https://maps.app.goo.gl/tnh7NauUE6n9BCUy9">View Map</a>
              <h2 className="lg:text-2xl md:text-xl sm:text-xl font-semibold">
                Phone
              </h2>
              <p>+92 333 336 6047</p>
              <h2 className="lg:text-2xl md:text-xl sm:text-xl font-semibold">
                Email
              </h2>
              <p>info@alarabiamedia.org</p>
            </div>
            <div
              className="w-full lg:space-y-0"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              ref={ref}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d399.4739824816341!2d67.10218866183166!3d24.940211955449435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339eebe5eee29%3A0x6424e2502692d1ba!2sJamia%20Arabia%20islamia%20scout%20colony!5e0!3m2!1sen!2s!4v1699342216478!5m2!1sen!2s"
                width="lg:1000"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                style={{
                  border: "#7c7a7a42 0.5px solid",
                  borderRadius: "5px",
                  width: "100%",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
