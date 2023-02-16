import React from "react";
import HeroImage from "./hero-image";
import Story from "./story/index";
import Team from "./team/index";
import Testimonial from "../home/testimonials";
import OurPartners from "../home/our-partners/our-partners";
import CallToAction from "./call-to-action/index";

function page() {
  return (
    <div>
      <HeroImage />
      <Story />
      <Team />
      <div className="bg-sky-600 text-white">
        <Testimonial />
      </div>
      <OurPartners />
      <CallToAction />
    </div>
  );
}

export default page;
