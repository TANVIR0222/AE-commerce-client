import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router";

export default function SidebarPage() {
  const [open, setOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenBrand, setIsDropdownOpenBrand] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      <div className="h-screen">
        {/* Sidebar Header */}
        <div className="text-left "></div>
        <div className=" flex items-center justify-between mx-2 font-semibold my-5 ">
          <h1 className="text-2xl texthover">My Sidebar</h1>
          {/* close icon  */}
          <IoCloseOutline
            className="text-3xl border-[1px] border-black font-semibold p-[1px] texthover cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
        <hr />
        {/* Menu Items */}
        <Link to={'/'} onClick={() => setOpen(false)}>
        <h4 className="w-full text-left hover:bg-gray-100 p-2 rounded-md flex justify-between items-center font-medium texthover">
          Home
        </h4>
        </Link>
        <Link to={'/fashion'} onClick={() => setOpen(false)}>
        <h4 className="w-full text-left hover:bg-gray-100 p-2 rounded-md flex justify-between items-center font-medium texthover">
          New Arrivals
        </h4>
        </Link>
        {/* Fashion Dropdown */}
        <ul className="space-y-4">
          <li>
            <button
              className="w-full text-left hover:bg-gray-100 p-2 rounded-md flex justify-between items-center font-medium texthover"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Fashion
              <span
                className={`transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-90" : ""
                }`}
              >
                ▶
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ${
                isDropdownOpen ? "max-h-40" : "max-h-0"
              }`}
            >
              <ul className="ml-4 mt-2 space-y-2">
                <li className="hover:bg-gray-100 p-2 fashon_deshing rounded-md texthover">
                <Link to="/fashion"  onClick={() => setOpen(false)} >Apparel</Link>
                </li>
                <li className="hover:bg-gray-100 p-2 fashon_deshing rounded-md texthover">
                <Link to="/fashion"  onClick={() => setOpen(false)} >Outerwear</Link>
                </li>
                <li className="hover:bg-gray-100 p-2 fashon_deshing rounded-md texthover">
                <Link to="/fashion"  onClick={() => setOpen(false)} >Footerwear</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        {/* Brands Dropdown */}
        <ul className="space-y-4">
          <li>
            <button
              className="w-full text-left hover:bg-gray-100 p-2 rounded-md flex justify-between items-center font-medium texthover"
              onClick={() => setIsDropdownOpenBrand(!isDropdownOpenBrand)}
            >
              All brands
              <span
                className={`transform transition-transform duration-300 ${
                  isDropdownOpenBrand ? "rotate-90" : ""
                }`}
              >
                ▶
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ${
                isDropdownOpenBrand ? "max-h-72" : "max-h-0"
              }`}
            >
              <div className="ml-4 mt-2 space-y-2">
                <p className="fashon_deshing hover:bg-gray-100 p-2 texthover">
                  Gadget Zone
                </p>
                <p className="fashon_deshing p-2 hover:bg-gray-100 texthover">
                  Initech Space
                </p>
                <p className="fashon_deshing p-2 hover:bg-gray-100 texthover">
                  Looney Tunes
                </p>
                <p className="fashon_deshing p-2 hover:bg-gray-100 texthover">
                  Massive Dynamic
                </p>
                <p className="fashon_deshing p-2 hover:bg-gray-100 texthover">
                  Pro Tech Gear
                </p>
                <p className="fashon_deshing p-2 hover:bg-gray-100 texthover">
                  Soylent Green
                </p>
                <p className="fashon_deshing p-2 hover:bg-gray-100 texthover">
                  The Simpsons
                </p>
                <p className="fashon_deshing p-2 hover:bg-gray-100 texthover">
                  Weeds Capital
                </p>
              </div>
            </div>
          </li>
        </ul>
        <ul className="space-y-4">
          <li>
            <button
              className="w-full text-left hover:bg-gray-100 p-2 rounded-md flex justify-between items-center font-medium texthover"
              onClick={() => setIsDropdownOpenBrand(!isDropdownOpenBrand)}
            >
              More
              <span
                className={`transform transition-transform duration-300 ${
                  isDropdownOpenBrand ? "rotate-90" : ""
                }`}
              >
                ▶
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ${
                isDropdownOpenBrand ? "max-h-72" : "max-h-0"
              }`}
            >
              <div className="ml-4 mt-2 space-y-2">
                <p className="fashon_deshing hover:bg-gray-100 p-2 texthover">
                 <Link to="/contact"  onClick={() => setOpen(false)}>Contact us</Link>
                </p>
                <p className="fashon_deshing p-2 hover:bg-gray-100 texthover">
                <Link to="/about"  onClick={() => setOpen(false)}>About us</Link>
                </p>
                <p className="fashon_deshing p-2 hover:bg-gray-100 texthover">
                <Link to="/blog"  onClick={() => setOpen(false)}>Blog</Link>
                </p>
              </div>
            </div>
          </li>
        </ul>
  {/*  */}
        <Divider className=" flex md:hidden " />
        <div className=" flex md:hidden my-2 ">
          <div className="text-[14px]">
            <p className=" text-textPrimary transition-all">
              Get up to 50% off new season styles, limited time only
            </p>
          </div>
        </div>
        <Divider className=" flex md:hidden " />
        <div className="flex md:hidden my-2">
          <div className="flex items-center gap-3 ">
            <p className=" flex items-center gap-2 font-medium text-[14px] ">
              {" "}
              <span>
                <HiOutlineRocketLaunch size={20} />{" "}
              </span>{" "}
              Free International Delivery
            </p>
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div className="transform transition-transform duration-1000">
      {/* Menu Icon */}
      <p onClick={toggleDrawer(true)} className="cursor-pointer">
        <HiMenuAlt2 size={24} />
      </p>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="left"
        PaperProps={{
          sx: {
            transition: "transform 0.3s ease-in-out",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
