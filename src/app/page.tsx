import React from "react";
import HomeAbout from "../app/home/homeAbout";
import Features from "./home/features";
import HomeBody from "./home/homeBody";
import Testimonial from "./home/testimonials";
import OurPartners from "../../src/app/home/our-partners/our-partners"

function Home() {
  return (
    <div>
      <HomeBody />
      <HomeAbout />
      <Features />
      <Testimonial />
      <OurPartners/>
    </div>
  );
}

export default Home;
