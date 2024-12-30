import { MdOutlineLocalShipping } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { CiGift } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";

const InformationPage = () => {
  return (
    <div className="container">
      <div className="my-10 md:my-10 lg:my-16 ">
      <div className="gird grid-cols-1 md:grid-cols-2 lg:flex items-center justify-between gap-3 space-y-3">
        <div className=" flex-col items-center">
          <MdOutlineLocalShipping size={50} className="text-center mx-auto texthover hover:-translate-y-3 hover:duration-700  ease-in-out my-2" />
          <h6 className="text-center mx-auto text-[16px] font-medium">Free Shipping</h6>
          <p className="text-center mx-auto text-[14px]">For an Exchange Product</p>
        </div>
       
        <div className=" flex-col items-center">
          <RiSecurePaymentLine size={50} className="text-center mx-auto texthover hover:-translate-y-3 hover:duration-700  ease-in-out my-2" />
          <h6 className="text-center mx-auto text-[16px] font-medium">Secured Payment</h6>
          <p className="text-center mx-auto text-[14px]">Payment Cards Accepted</p>
        </div>
        <div className=" flex-col items-center">
          <CiGift size={50} className="text-center mx-auto text-[16px] font-medium texthover hover:-translate-y-3 hover:duration-700  ease-in-out my-2" />
          <h6 className="text-center mx-auto text-[16px] font-medium">Special Gifts</h6>
          <p className="text-center mx-auto text-[14px]">Our First Product Order</p>
        </div>
        <div className=" flex-col items-center">
          <BiSupport size={50} className="text-center mx-auto texthover hover:-translate-y-3 hover:duration-700  ease-in-out my-2"  />
          <h6 className="text-center mx-auto text-[16px] font-medium">Support 24/7</h6>
          <p className="text-center mx-auto text-[14px]">Contact us Anytime</p>
        </div>
        <div className=" flex-col items-center">
          <GiReturnArrow size={50} className="text-center mx-auto texthover hover:-translate-y-3 hover:duration-700  ease-in-out" />
          <h6 className="text-center mx-auto text-[16px] font-medium">30 Days Returns</h6>
          <p className="text-center mx-auto text-[14px]">For all Orders Over $100</p>
        </div>
        {/* < size={50} /> */}
      </div>
      </div>
      <hr />
    </div>
  );
};

export default InformationPage;
