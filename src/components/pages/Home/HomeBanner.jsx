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
                className="w-full flex-shrink-0 relative text-center overflow-hidden"
              >
                
                <img
                  src={slide.url}
                  alt={slide.alt}
                  className="w-full object-cover transition-transform hover:scale-110 duration-700 ease-in-out rounded-md"
                />
                {/* Text Content */}
                <div className="absolute top-[20%] md:top-1/4  left-1/2 text-left transform  text-white bg-opacity-50  rounded-lg space-y-1 md:space-y-2 p-2 ">
                  <h4 className="text-[10px] md:text-[20px] text-textPrimary font-normal">
                    {slide.subTitle}
                  </h4>
                  <h2 className="text-[14px] md:text-[38px] text-textPrimary font-medium">
                    {slide.title}
                  </h2>
                  <p className="text-[10px] md:text-[20px] text-textPrimary font-normal">
                    {slide.description}{" "}
                    <span className="text-[14px] md:text-[30px] font-semibold text-primary">
                      {slide.price}
                    </span>{" "}
                  </p>
                  <button className="text-sm text-white font-medium bg-primary py-1 md:py-2 px-2 md:px-5 uppercase rounded hover:bg-black transition duration-300">
                    shop now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="home_slider_btn"
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="home_slider_btn_rigth"
          >
            <MdKeyboardArrowRight />
          </button>
        </div>

        {/* side minBanner  */}

        <div className=" grid grid-cols-1 md:flex lg:flex-col items-center mt-3 gap-4 justify-between">
          <div className="relative ">
            {/*  */}
            <div className=" absolute top-[20%] lg:top-[16%] left-4 space-y-3 lg:space-y-1">
              <h2 className="text-[23px] md:text-[25px] lg:text-[25px] text-textPrimary font-medium">
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
            <div className=" absolute top-[20%] lg:top-[16%] right-4 space-y-3 lg:space-y-1">
              <h2 className="text-[23px] md:text-[25px] lg:text-[25px] text-textPrimary font-medium">
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
