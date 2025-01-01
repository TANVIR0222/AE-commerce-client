import { Badge } from "@mui/material";
import React from "react";
import { CiHeart, CiRepeat } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { LiaUserCircle } from "react-icons/lia";
import CartSlider from "./CartSlider";

const BadgePage = () => {
  return (
    <div>
      <div className="flex items-center gap-2 ml-3">
        <div className="flex lg:hidden">
          <LiaUserCircle 
           size={30}
              className="text-black hover:text-primary transition duration-1000"
          />
        </div>
        <div className=" hidden md:hidden lg:block">
          <Badge
            badgeContent={4}
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#ff5722", // Custom background color
                color: "#fff", // Custom text color
              },
            }}
          >
            <CiRepeat
              size={30}
              className="text-black hover:text-primary transition duration-1000"
            />
          </Badge>
        </div>

        <Badge
          badgeContent={4}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#ff5722", // Custom background color
              color: "#fff", // Custom text color
            },
          }}
        >
          <CiHeart
            size={30}
            className="text-black hover:text-primary transition duration-1000"
          />
        </Badge>
        <CartSlider />
      </div>
    </div>
  );
};

export default BadgePage;
