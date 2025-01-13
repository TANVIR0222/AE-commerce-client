import { FaMinus, FaPlus } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../../../app/feature/cartApi/cartSlice";
import { useState } from "react";

const AddToCart = ({ id }) => {
  const dispatch = useDispatch();

  const [qty, setQty] = useState();

  const hadleUpdateQuantity = (id) => {
    const newQty = qty + 1;
    setQty(newQty);
    console.log(id);
    if (newQuantity < 1) return; // Prevent updating quantity to less than 1
    dispatch(updateQuantity({ id, quantity: newQty }));
  };

  return (
    <div>
      <div className="flex items-center">
        <div className="flex w-full h-full">
          <button className="bg-white border hover:bg-gray-300    text-primary flex-1 w-full p-1 rounded flex items-center justify-center">
            <MdOutlineKeyboardArrowDown size={25} className="font-bold" />
          </button>

          <p className="flex-1 w-full font-semibold px-1 flex items-center justify-center">
            1
          </p>

          <button
            onClick={() => hadleUpdateQuantity(id)}
            className="bg-white border hover:bg-gray-300  font-medium  text-primary flex-1 w-full p-1 rounded flex items-center justify-center"
          >
            <MdOutlineKeyboardArrowUp size={25} className="font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
