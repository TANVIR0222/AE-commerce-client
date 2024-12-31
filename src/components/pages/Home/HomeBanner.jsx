import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { slides } from "../../../utils/data";
import HomeMinBanner from "../../common/HomePage/HomeMinBanner";
import FashionCart from "../Fashoin/FashionCart";

const HomeBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container">
      <div className=" grid grid-cols-1  lg:flex gap-8">
        {/* Slider   */}
        <div className="relative  overflow-hidden group mt-8">
          {/* Slider Content */}
          <div
            className="flex w-full md:w-full lg:h-[408px] lg:w-[830px] transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="w-full flex-shrink-0 relative text-center"
              >
                
                <FashionCart item={slide} />
                
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-[42%] left-4 rounded transform -translate-y-1/2 bg-primary text-white  p-2 focus:outline-none hover:bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-[42%] right-4 transform rounded -translate-y-1/2 bg-primary text-white  p-2 focus:outline-none hover:bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          >
            <MdKeyboardArrowRight />
          </button>
        </div>

        {/* side minBanner  */}

        <div className=" grid grid-cols-1 md:flex lg:flex-col items-center mt-3 gap-4 justify-between">
          <div className="relative ">
            {/*  */}
            <div className=" absolute top-[20%] left-4 space-y-3">
              <h2 className="text-[23px] md:text-[25px] lg:text-[32px] text-textPrimary font-medium">
                Samsung Gear <br /> VR Camera
              </h2>
              <p className="text-[19px] md:text-[25px] lg:text-[32px]  text-primary font-normal">$129.00</p>
              <p className="text-[16px]  md:text-[20px] lg:text-[16px] text-textPrimary font-medium uppercase hover:underline">
                shop now
              </p>
            </div>
            <img
              className="my-4 rounded-md w-full md:w-full lg:h-[190px] lg:w-[450px]"
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
              alt=""
            />
          </div>
          <div className=" relative">
            {/*  */}
            <div className=" absolute top-[20%] right-4 space-y-3">
              <h2 className="text-[23px] md:text-[25px] lg:text-[32px] text-textPrimary font-medium">
                Samsung Gear <br /> VR Camera
              </h2>
              <p className="text-[19px] md:text-[25px] lg:text-[32px]  text-primary font-normal">$129.00</p>
              <p className="text-[16px]  md:text-[20px] lg:text-[16px] text-textPrimary font-medium uppercase hover:underline">
                shop now
              </p>
            </div>
            <img
              className="my-4 rounded-md  w-full md:w-full lg:h-[190px] lg:w-[450px]"
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
        <HomeMinBanner />
    </div>
  );
};

export default HomeBanner;
