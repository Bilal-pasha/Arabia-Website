import React, { useRef } from "react";
import { useInView } from "framer-motion";
export default function Mao() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <section className="bg-white">
        <div className="flex justify-center space-x-32">
          <h2 className="text-5xl font-bold">Get in touch</h2>
          <p>Got any queries? feel free to get in touch with us.</p>
        </div>
        <div className="flex justify-center space-x-32">
          <div>
            <h2>Location</h2>
            <a href="https://maps.app.goo.gl/tnh7NauUE6n9BCUy9">
              https://maps.app.goo.gl/tnh7NauUE6n9BCUy9
            </a>
            <p>View Map</p>
            <h2>Phone</h2>
            <p>+92 333 336 6047</p>
            <h2>Email</h2>
            <p>info@alarabiamedia.org</p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d399.4739824816341!2d67.10218866183166!3d24.940211955449435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339eebe5eee29%3A0x6424e2502692d1ba!2sJamia%20Arabia%20islamia%20scout%20colony!5e0!3m2!1sen!2s!4v1699342216478!5m2!1sen!2s"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="grid grid-rows-2 px-32 gap-32 py-24 bg-white gridbackround">
          <div
            className="col-span-1 space-y-6  "
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            ref={ref}
          ></div>
          <div
            className="col-span-1"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            ref={ref}
          >
            {/* <img src={ImageSource} alt="img" /> */}
          </div>
        </div>
      </section>
    </>
  );
}
