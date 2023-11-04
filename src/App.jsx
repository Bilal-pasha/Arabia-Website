import { useEffect, useState } from "react";
import { Spinner } from "./Components/Spinner/Index";
import Navbar from "./Components/Navbar/Index";
import Footer from "./Components/Footer/index";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedRoutes from "./Components/AnimatedRoutes/index";
export default function App() {
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 1600);
  }, []);
  return (
    <>
      {timer ? (
        <section className=" bg-white w-full">
          <Spinner key={0} />
        </section>
      ) : (
        <>
          <Router>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ x: window.innerWidth }}
            >
              <Navbar />
              <AnimatedRoutes />
              <Footer />
            </motion.div>
          </Router>
        </>
      )}
    </>
  );
}
