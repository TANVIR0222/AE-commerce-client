import { Rating } from "@mui/material";

const FashionCart = ({ item }) => {
  return (
    <div className="">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-52 my-2  rounded-md p-1"
      />
      <div className="ml-4 space-y-2">
        <p className="text-[13px] font-light text-textSecondary">
          {item.category}
        </p>
        <p className="text-[14px] font-normal text-black">{item.description.substring(0, 30)}...</p>
        {/* <p className="text-[13px]">{item.rating}</p> */}
        <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
        <p className="text-[15px] text-primary font-normal">${item.price}</p>
      </div>
    </div>
  );
};

export default FashionCart;
