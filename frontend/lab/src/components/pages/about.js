import React from "react";
import About_main from "../about/about_main";
import Header from "../pages/header";
import Footer from "../pages/footer";
const About = () => {
  return (
    <>
      <Header />
      <div class="info_wr">
        <About_main />
      </div>
      <Footer />
    </>
  );
};

export default About;
