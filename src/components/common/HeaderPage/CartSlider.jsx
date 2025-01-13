import { Badge } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { useState } from "react";
import { PiShoppingCartThin } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import AddToCart from "../ProductAddButton/AddToCart";
import useCart from "../../Hooks/useCart";
import useTotalPrice from "../../Hooks/useTotalPrice";
import { FaCaretRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const CartSlider = () => {
  const [open, setOpen] = useState(false);

  // const { product, cartProduct } = useCart();
  const { totalPrice , totalOldPrice} = useTotalPrice();
  const discountAmount = totalOldPrice - totalPrice; // Discount difference
    

  const handleDrawerNotClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/fashion')
    setOpen(!open)
  }

  const DrawerList = (
    <div onClick={handleDrawerNotClose} className="w-72 md:w-96 lg:w-96">
      <Box onClick={handleDrawerNotClose} role="presentation">
        <List>
          <div className="">
            <h2 className="text-[16px] text-textPrimary p-4 font-normal flex items-center justify-between">
              {/* shopping cart ({cartProduct?.length}){" "} */}
            </h2>
            <hr />
          </div>

          {/* {cartProduct?.length <= 0 && (
            <div className=" grid grid-cols-1  justify-center items-center  ">
              <img
                src="https://shofy.botble.com/themes/shofy/images/empty-cart.png"
                alt=""
                className=" mx-auto mt-40"
              />
              <p className=" text-center w-full my-6">Your Cart is empty </p>
             <button onClick={handleNavigate} className="bg-primary font-medium text-white py-2.5 px-8 md:px-16  hover:bg-black  mx-auto flex items-center">
                Go To Shop
              </button>
            </div>
          )} */}

          {/* {cartProduct?.length > 0 && (
            <div className="">
              
              <div className="bg-[#f2efef] p-4 grid gap-5 overflow-auto h-[480px] ">
                <div className="">
                  {product?.map((item, index) => (
                    <div key={index + 1} className="">
                      {item?.data?.data?.map((item) => (
                        <div key={item._id} className="flex items-center gap-4 my-2">
                          <div className="w-16 h-16 min-h-16 min-w-16 bg-red-500 border rounded my-2">
                            <img
                              src={item.image}
                              className="object-scale-down"
                            />
                          </div>
                          <div className="w-full max-w-sm text-xs">
                            <p className="text-[14px] font-normal text-ellipsis line-clamp-2">
                              {item.name}
                            </p>
                            <p className="text-neutral-400 line-through">
                              {item.oldPrice}
                            </p>
                            <p className="font-semibold">{item.price}</p>
                          </div>
                          <div>
                            <AddToCart id={item._id} />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-4">
                <h3 className="font-semibold">Bill details</h3>
                <div className="flex gap-4 justify-between ml-1">
                  <p>Items total</p>
                  <p className="flex items-center gap-2">
                    <span className="line-through text-neutral-400">{totalOldPrice}</span>
                    <span>{totalPrice}</span>
                  </p>
                </div>
                <div className="flex gap-4 justify-between ml-1">
                  <p>Quntity total</p>
                  <p className="flex items-center gap-2">{cartProduct?.length} item</p>
                </div>
                <div className="flex gap-4 justify-between ml-1">
                  <p>Delivery Charge</p>
                  <p className="flex items-center gap-2">{cartProduct?.length * 5}</p>
                </div>
                <div className="font-semibold flex items-center justify-between gap-4">
                  <p>Grand total</p>
                  <p>{totalPrice + cartProduct?.length * 5}</p>
                </div>
              </div>
            </div>
          )} */}
          {/* {cartProduct?.length > 0 && (
            <div className="p-2">
              <div className="bg-green-700 text-neutral-100 px-4 font-bold text-base py-4 static bottom-3 rounded flex items-center gap-4 justify-between">
                <button
                  className="flex items-center gap-1"
                >
                  Proceed
                  <span>
                    <FaCaretRight />
                  </span>
                </button>
              </div>
            </div>
          )} */}
        </List>
      </Box>
    </div>
  );

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        <Badge
          badgeContent={2}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#ff5722", // Custom background color
              color: "#fff", // Custom text color
            },
          }}
        >
          <PiShoppingCartThin
            size={30}
            className="text-black hover:text-primary transition duration-1000"
          />
        </Badge>
      </button>
      <Drawer anchor="right" open={open} onClose={() => setOpen(!open)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CartSlider;
