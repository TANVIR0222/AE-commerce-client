import { Rating } from "@mui/material";
import { CiHeart, CiRepeat } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";

const FashionCart = ({ item }) => {
  return (
    <div className="">
      <div className="relative overflow-hidden group">
  <img
    src={item.image}
    alt={item.name}
    className="w-full h-52 my-2 rounded-md p-1"
  />
  {/* Icon container */}
  <div
    className="absolute top-0 right-0 h-full w-10 text-white flex items-center justify-center transform translate-x-full group-hover:-translate-x-3 transition-transform duration-700 ">
    <div className="grid grid-cols-1 gap-3">
      <CiHeart
        size={35}
        className="p-1 text-textPrimary hover:text-white hover:bg-primary bg-white rounded-full border"
      />
      <CiRepeat
        size={35}
        className="p-1 text-textPrimary hover:text-white hover:bg-primary bg-white rounded-full border"
      />
      <PiShoppingCartThin
        size={35}
        className="p-1 text-textPrimary hover:text-white hover:bg-primary bg-white rounded-full border"
      />
    </div>
  </div>
</div>

      <div className="ml-4 space-y-2">
        <p className="text-[13px] font-light text-textSecondary">
          {item.category}
        </p>
        <p className="text-[14px] font-normal text-black">{item.description.substring(0, 40)}..</p>
        {/* <p className="text-[13px]">{item.rating}</p> */}
        <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
        <p className="text-[15px] text-primary font-normal">${item.price}</p>
      </div>
    </div>
  );
};

export default FashionCart;
