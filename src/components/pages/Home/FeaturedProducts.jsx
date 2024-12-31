import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { productsData } from "../../../utils/data";
import { useEffect, useState } from "react";
import FashionCart from "../Fashoin/FashionCart";

const FeaturedProducts = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive logic to calculate visible items
  const updateVisibleItems = () => {
    if (window.innerWidth >= 1024) setVisibleItems(6); // Large screens
    else if (window.innerWidth >= 768) setVisibleItems(4); // Medium screens
    else setVisibleItems(2); // Small screens
  };

  useEffect(() => {
    updateVisibleItems(); // Initial calculation
    window.addEventListener("resize", updateVisibleItems); // Update on resize

    return () => {
      window.removeEventListener("resize", updateVisibleItems);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleItems < productsData.length ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : productsData.length - visibleItems
    );
  };

  return (
    <div className="container">
      <div className="my-16">
        <div className="flex justify-between items-center gap-4 my-4">
          <div className="">
            <h1 className="text-[22px] font-medium"> Featured Products</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="bg-secondary rounded-full border-[0.5px] border-gray-400 shadow-md text-2xl md:text-2xl hover:bg-primary hover:border-none hover:text-secondary"
            >
              <MdKeyboardArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="bg-secondary rounded-full border-[0.5px] border-gray-400 shadow-md text-2xl md:text-2xl hover:bg-primary hover:border-none hover:text-secondary"
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="relative mx-auto border-[2px] border-primary rounded-sm">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / visibleItems)
                  }%)`,
                }}
              >
                {productsData.map((item, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 relative h-[380px] bg-secondary border-r-[0.5px] border-gray-400 ${
                      visibleItems === 6
                        ? "w-1/6" // 6 items on large screens
                        : visibleItems === 4
                        ? "w-1/4" // 4 items on medium screens
                        : "w-1/2" // 2 items on small screens
                    }`}
                  >
                    <FashionCart item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
