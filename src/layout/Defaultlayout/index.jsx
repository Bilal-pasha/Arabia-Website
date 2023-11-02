import React from "react";
import Navbar from "../../Components/Navbar/Index";
import Footer from "../../Components/Footer/index";
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
export default Layout;
