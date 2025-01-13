import { Rating } from "@mui/material";
import { CiHeart, CiRepeat } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { useDispatch } from "react-redux";
import {
  addMultipleToCart,
  clearCart,
} from "../../../app/feature/cartApi/cartSlice";
import { Link } from "react-router";

const FashionCart = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (id, e) => {
    dispatch(addMultipleToCart(id));
  };

  const handleClearcart = (e) => {
    dispatch(clearCart());
  };

  return (
    <div className="">
      <div className="relative overflow-hidden group">
        <Link to={`/ProductViewPage/${item._id}`}>
          <div className=" relative">
            <img
              src={item.image[0]}
              alt={item.name}
              className="w-full h-52 my-2 rounded-md p-1"
            />
            <h1 className=" absolute bg-link w-fit h-fit p-1 text-white font-normal rounded  inset-0 left-3 top-4">
              {item.discount}%{" "}
            </h1>
          </div>
        </Link>
        {/* Icon container */}
        <div className="absolute top-0 right-0 h-full w-10 text-white flex items-center justify-center transform translate-x-full group-hover:-translate-x-3 transition-transform duration-700 ">
          <div className="grid grid-cols-1 gap-3">
            <CiHeart
              size={35}
              className="p-1 text-textPrimary hover:text-white hover:bg-primary bg-white rounded-full border"
            />
            <CiRepeat
              onClick={handleClearcart}
              size={35}
              className="p-1 text-textPrimary hover:text-white hover:bg-primary bg-white rounded-full border"
            />
            <PiShoppingCartThin
              onClick={(e) => handleAddToCart(item._id, e)}
              size={35}
              className="p-1 text-textPrimary hover:text-white hover:bg-primary bg-white rounded-full border"
            />
          </div>
        </div>
      </div>
      <Link to={`/ProductViewPage/${item._id}`}>
        <div className="ml-4">
          <p className="text-[13px] font-light text-textSecondary">
            {item.category}
          </p>
          <p className="text-[14px] font-normal text-black">
            {item.description.substring(0, 40)}..
          </p>
          <Rating
            name="half-rating-read"
            defaultValue={item.rating}
            precision={0.5}
            readOnly
          />
          <p className="text-[18px] text-primary font-medium flex items-center gap-2 ">
            {" "}
            ${item.price}{" "}
            <span className=" line-through text-[14px] opacity-75">
              ${item.oldPrice}
            </span>{" "}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default FashionCart;
