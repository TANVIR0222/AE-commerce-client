import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { brandsData } from "../../../utils/data";

const BrandsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const getVisibleItems = () => {
    if (window.innerWidth >= 1024) return 6; // Large screens
    if (window.innerWidth >= 768) return 4; // Medium screens
    return 2; // Small screens
  };

  const visibleItems = getVisibleItems();

  useEffect(() => {
    visibleItems
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleItems < brandsData.length ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : brandsData.length - visibleItems
    );
  };

  return (
    <div className="my-10 md:my-16">
    <div className="container">
      <div className="relative mx-auto ">
        {/* Slider Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700  items-center justify-between gap-5"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }}
          >
            {brandsData.map((item, index) => (
              <div
                key={index}
                className={`p-2 flex-shrink-0   ${
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
                  className=" p-2 rounded-md bg-white border-[1px] border-gray-400"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-white text-black p-2 rounded hover:bg-primary hover:text-white border-textSecondary border-[0.5px]"
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-white text-black p-2 rounded hover:bg-primary hover:text-white border-textSecondary border-[0.5px]"
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
    </div>
  );
};

export default BrandsSlider;
