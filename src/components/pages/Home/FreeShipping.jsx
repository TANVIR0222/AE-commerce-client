import { FaShippingFast } from "react-icons/fa";

const FreeShipping = () => {
  return (
    <div className="container ">
      <div className=" grid grid-cols-1 md:grid-cols-1 text-center  lg:flex justify-between items-center border-2 border-primary my-10 md:my-16 p-6">
        <div className=" flex items-center gap-2 text-center justify-center">
            <FaShippingFast size={40} className=" hidden md:hidden lg:block" />
          <h2 className="text-[30px] font-medium text-textPrimary">Free Shipping</h2>
        </div>
        <span className="p-3 border-r border-gray-300 hidden md:hidden lg:block"></span>

        <div className="">
          <p className="text-[20px] font-light text-textPrimary">
            Get free shipping on all orders over $
            <span className="text-primary">200</span>
          </p>
        </div>
        <span className="p-3 border-r border-gray-300 hidden md:hidden lg:block"></span>

        <div className="text-textPrimary font-semibold text-[30px]">- Only $200*</div>
      </div>
    </div>
  );
};

export default FreeShipping;
