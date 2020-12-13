import React from "react";
import SectionOne from "./section-one/section-one";
import SectionTwo from "./section-two/section-two";
import SectionThree from "./section-three/Section-three";
import SectionFour from "./section-four/Section-four";
import SectionFive from "./section-five/Section-five";
import SectionSix from "./section-six/Section-six";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <div className="Home">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </div>
  );
}
