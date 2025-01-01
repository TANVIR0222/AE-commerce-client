import { Badge } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { useState } from "react";
import { PiShoppingCartThin } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import AddToCart from "../ProductAddButton/AddToCart";

const CartSlider = ({blogs}) => {
  
  const [open, setOpen] = useState(false);

  const handleDrawerNotClose = (e) => {
    e.preventDefault();
    e.stopPropagation()

  }

  const DrawerList = (
    <div onClick={handleDrawerNotClose} className="w-72 md:w-96 lg:w-96">
      <Box onClick={handleDrawerNotClose}  role="presentation" >
      <List>
        <div className="">
          <h2 className="text-[16px] text-textPrimary p-4 font-normal flex items-center justify-between">shopping cart (0)  </h2>
          <hr />
        </div>

        <div className="">
          <BsCart3 size={80} className=" text-center w-full my-10" />
          <p className=" text-center w-full my-4">There are no more items in your cart </p>
          <button className="bg-primary font-medium text-white py-2.5 px-8 md:px-16 rounded-md hover:bg-black uppercase mx-auto flex items-center">Continue shopping</button>
        </div>

        <div className="">
        <div className="flex items-center justify-between px-4 py-2 bg-blue-100 text-blue-500 rounded-full">
                  <p>Your total savings</p>
                  <p>90</p>
                </div>
                <div className="bg-white rounded-lg p-4 grid gap-5 overflow-auto">
                    <div  className="flex  items-center justify-between w-full gap-4">
                        <div className="w-16 h-16 min-h-16 min-w-16 bg-red-500 border rounded">
                          <img
                            src=''
                            className="object-scale-down"
                          />
                        </div>
                        <div className="w-full max-w-sm text-xs">
                          <p className="text-xs text-ellipsis line-clamp-2">
                            skjdks
                          </p>
                          <p className="text-neutral-400">78</p>
                          <p className="font-semibold">
                            707
                          </p>
                        </div>
                        <div>
                         <AddToCart />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4">
                  <h3 className="font-semibold">Bill details</h3>
                  <div className="flex gap-4 justify-between ml-1">
                    <p>Items total</p>
                    <p className="flex items-center gap-2">
                      <span className="line-through text-neutral-400">
                        89
                      </span>
                      <span>100</span>
                    </p>
                  </div>
                  <div className="flex gap-4 justify-between ml-1">
                    <p>Quntity total</p>
                    <p className="flex items-center gap-2">6 item</p>
                  </div>
                  <div className="flex gap-4 justify-between ml-1">
                    <p>Delivery Charge</p>
                    <p className="flex items-center gap-2">Free</p>
                  </div>
                  <div className="font-semibold flex items-center justify-between gap-4">
                    <p>Grand total</p>
                    <p>100</p>
                  </div>
                </div>
        </div>
      </List>
    </Box>
    </div>
  );

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
      <Badge
          badgeContent={4}
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
      <Drawer 
      anchor="right"
      open={open} 
      onClose={() => setOpen(!open)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CartSlider;
