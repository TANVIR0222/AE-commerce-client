
import FashoinTopDesing from "../../common/Fashoin/FashoinTopDesing";
import { AiOutlineProduct } from "react-icons/ai";
import { productsData } from "../../../utils/data";
import FashionCart from "./FashionCart";
import FashoinSlider from "../../common/Fashoin/FashoinSlider";
import MobileFashionSlider from "../../common/Fashoin/MobileFashionSlider";
import { useFetchProductQuery } from "../../../app/feature/productApi/poductApi";
import { useLocation } from "react-router";
import { useMemo } from "react";


const Fashion = () => {
  

  const location = useLocation();
  // console.log(lo);
  
  
  const { availability, selectedColour, selectedSize, selectedSubCategory , price} = location.state || {} ;
  // console.log(availability, selectedColour, selectedSize, selectedSubCategory, price); // Check passed state  


  // Memoize filter values to prevent unnecessary re-fetches
  const filterValues = useMemo(() => {
    return {
      category : availability,
      selectedColour,
      sizes : selectedSize,
      subCategory :selectedSubCategory,
      minPrice:price,
    };
  }, [availability, selectedColour, selectedSize, selectedSubCategory, price]);

  // console.log(price);
  

  const {data: products, isLoading, error} = useFetchProductQuery(filterValues);
  // console.log(products); // Check fetched data

  
  



  return (
    <div className="">
      <div className="h-24 bg-[#f2efef] ">
        <div className="container flex items-center gap-3  h-24 text-[14px]">
          <h1 className="text-textPrimary font-light">
            {" "}
            Home <span className="text-[#808080]">|</span>{" "}
            <span className="text-[#808080]">Fashion</span>{" "}
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="my-10 md:my-16">
          <div className="flex  gap-4">

            {/*  */}
            <div className="w-1/4 border-[1px] border-textSecondary  hidden md:block ">
             <FashoinSlider />
            </div>

            <div className="w-full h-full  ">
              <FashoinTopDesing />
              <div className="my-5 grid grid-cols-1 md:flex gap-2 items-center justify-between">
                <div className="flex items-center justify-between">
                  <div className="">
                  <h1 className=" text-[14px] font-normal flex items-center gap-3 ">
                    <AiOutlineProduct size={30} className="text-[#333] cursor-pointer" />
                    There are 18 products.
                  </h1>
                  </div>
                   {/*  */}
            <div className=" flex md:hidden lg:hidden xl:hidden mt-1 ">
             <MobileFashionSlider />
            </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="">
                    <h1 className=" text-[14px] flex items-center font-normal ">
                      Sort By :
                    </h1>
                  </div>
                  <select className=" text-textPrimary w-52 h-10 border border-textSecondary text-gray-30 rounded  outline-none ">
                    <option
                      className=" text-textPrimary font-medium text-sm"
                      value="relevant"
                    >
                      {" "}
                      Relevance
                    </option>
                    <option
                      className=" text-textPrimary font-medium text-sm"
                      value="low"
                    >
                      Name, A to Z
                    </option>
                    <option
                      className=" text-textPrimary font-medium text-sm"
                      value="high"
                    >
                      Price, low to high
                    </option>
                    <option
                      className=" text-textPrimary font-medium text-sm"
                      value="high"
                    >
                      Price, high to low
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full md:w-full lg:h-[408px] lg:w-[830px] transition-transform duration-1000 ease-in-out mx-auto ">
                {products?.data?.products?.map((item) => (
                  <div key={item._id} className="w-full items-center border text-center">
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

export default Fashion;
