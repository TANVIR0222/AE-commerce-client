import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { productsData } from "../../../utils/data";
import { useEffect, useState } from "react";
import FashionCart from "../Fashoin/FashionCart";
import { useFetchProductQuery } from "../../../app/feature/productApi/poductApi";
import Loading from "../../common/Loading";

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


  const {data: products, isLoading, error} = useFetchProductQuery();


  const handleNext = () => {
    const totalProducts = products?.data?.products.length || 0;
    const totalVisibleItems = visibleItems || 1; // Default to 1 if visibleItems is not defined
  
    // Check if we can move to the next page by comparing with the total products and visible items
    if (currentIndex + totalVisibleItems < totalProducts) {
      setCurrentIndex((prevIndex) => prevIndex + totalVisibleItems); // Move to the next set of items
    } else {
      setCurrentIndex(0); // If at the end, loop back to the first product
    }
  };
  
  
  const handlePrev = () => {
    const totalProducts = products?.data?.products.length || 0;
    const totalVisibleItems = visibleItems || 1; // Default to 1 if visibleItems is not defined
    
    // Make sure we don't go to a negative index
    setCurrentIndex((prevIndex) =>
      prevIndex > 0
        ? prevIndex - totalVisibleItems // Move to the previous set of items
        : totalProducts - totalVisibleItems // Loop back to the last set of items
    );
  };
  

  
  return isLoading ? <Loading /> : (
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
              <MdKeyboardArrowRight   />
            </button>
          </div>
        </div>

        {/* Content */}
        <div >
          <div className="relative mx-auto border-[2px] border-primary rounded-sm">
            <div className="overflow-hidden"  >
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / visibleItems)
                  }%)`,
                }}
              >
                {products?.data?.products?.map((item, index) => (
                  <div
                    key={item._id}
                    className={`flex-shrink-0 relative h-[380px] bg-secondary border-r-[0.5px] border-gray-400 ${
                      visibleItems === 6
                        ? "w-1/6" // 6 items on large screens
                        : visibleItems === 4
                        ? "w-1/4" // 4 items on medium screens
                        : "w-1/2" // 2 items on small screens
                    }`}
                  >
                    <FashionCart item={item}  />
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
