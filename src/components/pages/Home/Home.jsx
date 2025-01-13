import React from "react";
import HomeBanner from "./HomeBanner";
import FreeShipping from "./FreeShipping";
import MobileSlider from "./MobileSlider";
import Category from "./Category";
import DiscountBanner from "../../common/HomePage/DiscountBanner";
import FeaturedProducts from "./FeaturedProducts";
import ReturnProductsBanner from "../../common/HomePage/ReturnProductsBanner";
import BrandsSlider from "../../common/HomePage/BrandsSlider";
import ClientSay from "../../common/HomePage/ClientSay";
import InstagramPage from "../../common/HomePage/InstagramPage";
import InformationPage from "../../common/HomePage/InformationPage";
import BlogPage from "../../common/HomePage/BlogPage";

const Home = () => {
  return (
    <div className="">
      <div className="bg-[#ebe8e8]">
        <HomeBanner />
      </div>

      <FreeShipping />
      <MobileSlider />
      <Category />
      <DiscountBanner />
      <FeaturedProducts />
      <ReturnProductsBanner />
      <BrandsSlider />
      <div className="container">
      <hr />
      </div>
      <ClientSay />
      <BlogPage />
      <InstagramPage />
      <InformationPage />
    </div>
  );
};

export default Home;
