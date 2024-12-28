import { useState } from "react";
import { minicart } from "../../../utils/data";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const HomeMinBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const getVisibleItems = () => {
        if (window.innerWidth >= 1024) return 6; // Large screens
        if (window.innerWidth >= 768) return 4; // Medium screens
        return 2; // Small screens
      };
    
    const visibleItems = getVisibleItems();

    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + visibleItems < minicart.length ? prevIndex + 1 : 0
      );
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : minicart.length - visibleItems
      );
    };

  return (
    <div className="relative mx-auto">
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }}
        >
          {minicart.map((item, index) => (
            <div
              key={index}
              className={`p-2 flex-shrink-0  relative ${
                window.innerWidth >= 1024
                  ? "w-1/6" // 6 items on large screens
                  : window.innerWidth >= 768
                  ? "w-1/4" // 4 items on medium screens
                  : "w-1/2" // 2 items on small screens
              }`}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-[170px] object-contain transition-all hover:scale-105 duration-700 ease-in-out rounded-md"
              />
              <p className="text-[14px] mt-2 text-center absolute inset-0 text-black top-[70%] texthover  font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white text-black p-2 rounded hover:bg-primary hover:text-white border-textSecondary border-[0.5px]"
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white text-black p-2 rounded hover:bg-primary hover:text-white border-textSecondary border-[0.5px]"
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default HomeMinBanner;
