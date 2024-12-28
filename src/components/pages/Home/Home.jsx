import React from "react";
import HomeBanner from "./HomeBanner";
import FreeShipping from "./FreeShipping";
import MobileSlider from "./MobileSlider";

const Home = () => {
  return (
    <div className="">
      <div className="bg-[#ebe8e8]">
        <HomeBanner />
      </div>

      <FreeShipping />
      <MobileSlider />
    </div>
  );
};

export default Home;
