import React, { useEffect, useState } from "react";
import { blogsData } from "../../../utils/data";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { HiLink } from "react-icons/hi2";
import { IoTimeOutline } from "react-icons/io5";

const BlogPage = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive logic to calculate visible items
  const updateVisibleItems = () => {
    if (window.innerWidth >= 1024) setVisibleItems(4); // Large screens
    else if (window.innerWidth >= 768) setVisibleItems(2); // Medium screens
    else setVisibleItems(1); // Small screens
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
      prevIndex + visibleItems < blogsData.length ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : blogsData.length - visibleItems
    );
  };
  return (
    <div>
      <div className="container">
        <div className="md:my-16 lg:my-16 my-10">
          <div className="flex justify-between items-center gap-4 my-4">
            <div className="">
              <h1 className="text-[22px] font-medium"> From The Blog</h1>
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
            <div className="relative mx-auto rounded-sm">
              <div className="overflow-hidden">
                <div
                  className="flex items-center gap-4 transition-transform duration-700 "
                  style={{
                    transform: `translateX(-${
                      currentIndex * (100 / visibleItems)
                    }%)`,
                  }}
                >
                  {blogsData?.map((item, index) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 relative h-[380px] bg-secondary ${
                        visibleItems === 4
                          ? "w-1/4" // 4 items on large screens
                          : visibleItems === 2
                          ? "w-1/2" // 2 items on medium screens
                          : "w-full" // 1 item on small screens
                      } group`} // Added `group` for hover styling
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={item.images[0].url}
                          alt={item.images?.description}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ease-in-out" // Image zoom on hover
                        />
                        {/* Overlay with search icon */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <IoIosSearch
                            size={40}
                            className="text-white border-[1px] border-white rounded-lg p-3 hover:bg-primary hover:border-none "
                          />
                          <HiLink
                            size={40}
                            className="text-white border-[1px] border-white rounded-lg p-3 hover:bg-primary hover:border-none "
                          />
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <h3 className="text-[14px] font-light flex items-center gap-3 text-primary">
                          <IoTimeOutline size={18} />{" "}
                          {new Date(item.published_date).toDateString()}
                        </h3>
                        <h3 className="text-[16px] font-medium text-textPrimary">
                          {item.title.toUpperCase()}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {item.content.introduction}
                        </p>
                        <a
                          href="#"
                          className=" hover:underline uppercase font-medium text-sm mt-2 inline-block underline text-link"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {blogsData.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md overflow-hidden"
            >
              <img
                src={blog.images[0]?.url}
                alt={blog.images[0]?.description}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {blog.content.introduction}
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline text-sm mt-2 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default BlogPage;
