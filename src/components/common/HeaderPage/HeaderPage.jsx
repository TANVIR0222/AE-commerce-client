import { Tooltip } from "@mui/material";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import FashionViewPage from "./FashionViewPage";
import BrandPage from "./BrandPage";
import SidebarPage from "./SideBarPage";

const HeaderPage = () => {
  return (
    <div>
      <div className="my-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <SidebarPage />
          <h4 className="text-[14px]  hover:text-primary transition duration-1000 uppercase  font-medium">
            Shop By Categories
          </h4>
          <span className="p-3 border-r border-gray-300"></span>
        </div>

        <div className="flex items-center gap-5 ">
          <p className="text-[14px] text-textPrimary font-medium hover:text-primary transition duration-700">
            Home
          </p>
          <p>
            <Tooltip
              title={
                <span
                  style={{
                    fontWeight: "700",
                    width: "550px",
                    height: "550px",
                    transition: "0.9s",
                    transitionDuration: "0.9s",
                  }}
                >
                  <FashionViewPage />
                </span>
              }
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: "#FFFFFF", // Custom background color
                    color: "#FFFFFF", // Custom text color
                    borderRadius: "8px", // Rounded corners
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Shadow for depth
                  },
                },
                arrow: {
                  sx: {
                    color: "#1E90FF", // Match arrow color with tooltip background
                  },
                },
              }}
            >
              <span className="text-[14px] text-textPrimary font-medium hover:text-primary transition duration-700">
                Fashion
              </span>
            </Tooltip>
          </p>
          <p className="text-[14px] text-textPrimary font-medium hover:text-primary transition duration-700">
            New Arrivals
          </p>

          <Tooltip
            title={
              <span
                style={{
                  fontWeight: "700",
                  width: "550px",
                  height: "550px",
                  transition: "0.9s",
                  transitionDuration: "0.9s",
                }}
              >
                <BrandPage />
              </span>
            }
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: "#FFFFFF", // Custom background color
                  color: "#FFFFFF", // Custom text color
                  borderRadius: "8px", // Rounded corners
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Shadow for depth
                },
              },
              arrow: {
                sx: {
                  color: "#1E90FF", // Match arrow color with tooltip background
                },
              },
            }}
          >
            <span className="text-[14px] text-textPrimary font-medium hover:text-primary transition duration-700">
              All brands
            </span>
          </Tooltip>

          <p className="text-[14px] text-textPrimary font-medium hover:text-primary transition duration-700">
            Contact
          </p>
        </div>

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
  );
};

export default HeaderPage;
