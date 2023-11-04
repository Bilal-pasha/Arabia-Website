import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "../../Pages/About/index";
import Home from "../../Pages/Home/Home";
import Contact from "../../Pages/Contact/index";
import More from "../../Pages/More/index";
import Faculties from "../../Pages/Faculties/index";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const Location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={Location} key={Location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/faculties" element={<Faculties />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </AnimatePresence>
  );
}
