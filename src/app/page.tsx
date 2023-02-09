import React from "react";
import HomeAbout from "../app/home/homeAbout";
import Features from "./home/features";
import HomeBody from "./home/homeBody";
import Testimonial from "./home/testimonials";

function Home() {
  return (
    <div>
      <HomeBody />
      <HomeAbout />
      <Features />
      <Testimonial/>
    </div>
  );
}

export default Home;
