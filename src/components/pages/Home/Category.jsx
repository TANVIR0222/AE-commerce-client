import { useState, useEffect } from "react";
import { productsData } from "../../../utils/data";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import FashionCart from "../Fashoin/FashionCart";

const Category = () => {
  const [activeButton, setActiveButton] = useState("Fashion");
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

  const categoryData = productsData.filter(
    (item) => item.subCategory === activeButton
  );

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleItems < categoryData.length ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : categoryData.length - visibleItems
    );
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center gap-4 my-4">
        <div className="flex items-center gap-4">
          {["Fashion", "Electronic", "Furniture"].map((item, index) => (
            <button
              onClick={() => setActiveButton(item)}
              className={`${
                activeButton === item
                  ? "text-[20px] font-normal text-primary"
                  : "text-[20px] font-normal text-textSecondary"
              }`}
              key={index}
            >
              {item}
            </button>
          ))}
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
        <div className="relative mx-auto border-[0.5px] border-gray-400 rounded-sm">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleItems)
                }%)`,
              }}
            >
              {categoryData.map((item, index) => (
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

      <div className="my-10 md:my-16 relative overflow-hidden ">
{/*  */}
        <img
          src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/offer-banner.jpg"
          alt=""
          className="w-full  object-cover transition-transform duration-1000 hover:scale-x-110  ease-in-out rounded "
        />
        <div className="absolute top-1 md:top-0 lg:top-[20%] left-[45%] md:left-[35%] flex items-center gap-4">
          <div className="">
          <h1 className="text-[16px]  md:text-[45px] font-normal leading-normal text-white">Watch</h1>
          </div>
          <div className="">
          <p className=" text-[16px] text-white font-light hidden lg:block">
            M6 Smart Band 2.3 – Fitness Band <br /> Men’s and Women’s Health Tracking,
            Red Strap
          </p>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Category;
