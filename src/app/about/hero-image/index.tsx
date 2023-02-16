import React from "react";
import Image from "next/image";
import img from "../../../../public/images/hope_refugees_safe_blog_header_01.jpg";

function HeroImage() {
  return (
    <div className="h-fit flex justify-center items-center">
      <Image src={img} alt="HeroImage" />
    </div>
  );
}
export default HeroImage;
