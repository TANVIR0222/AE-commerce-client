import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router";

const colors = [
  { name: "Grey", code: "#808080" },
  { name: "Red", code: "#FF0000" },
  { name: "Black", code: "#000000" },
  { name: "Orange", code: "#FFA500" },
  { name: "Blue", code: "#0000FF" },
  { name: "Green", code: "#008000" },
  { name: "Yellow", code: "#FFFF00" },
];

const FashoinSlider = () => {
  const MIN = 0; // Minimum price
  const MAX = 500; // Maximum price
  const [val, setVal] = useState([MIN]); // Current value of the slider
  console.log(val);

  const [selectedColour, setSelectedColour] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const navigate = useNavigate();

  // const val = 100; // Example price value, replace with your dynamic value

  const handleAvailabilityChange = (category) => {
    setAvailability((prevState) => {
      const newAvailability = prevState.includes(category)
        ? prevState.filter((item) => item !== category)
        : [...prevState, category];

      // Navigate after availability is updated
      navigate("/fashion", {
        state: {
          availability: newAvailability,
          selectedColour,
          selectedSize,
          selectedSubCategory,
          price: val,
        },
      });

      return newAvailability;
    });
  };

  const handleCategoryChange = (category) => {
    setSelectedColour((prevState) => {
      const newColour = prevState.includes(category)
        ? prevState.filter((item) => item !== category)
        : [...prevState, category];

      // Navigate after selectedColour is updated
      navigate("/fashion", {
        state: {
          availability,
          selectedColour: newColour,
          selectedSize,
          selectedSubCategory,
          price: val,
        },
      });

      return newColour;
    });
  };

  const handleSizeChange = (size) => {
    setSelectedSize((prevState) => {
      const newSize = prevState.includes(size)
        ? prevState.filter((item) => item !== size)
        : [...prevState, size];

      // Navigate after selectedSize is updated
      navigate("/fashion", {
        state: {
          availability,
          selectedColour,
          selectedSize: newSize,
          selectedSubCategory,
          price: val,
        },
      });

      return newSize;
    });
  };

  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategory((prevState) => {
      const newSubCategory = prevState.includes(subCategory)
        ? prevState.filter((item) => item !== subCategory)
        : [...prevState, subCategory];

      // Navigate after selectedSubCategory is updated
      navigate("/fashion", {
        state: {
          availability,
          selectedColour,
          selectedSize,
          selectedSubCategory: newSubCategory,
          price: val,
        },
      });

      return newSubCategory;
    });
  };
  const handlePriceChange = (newPrice) => {
    setVal(newPrice); // Update the price value
    navigate("/fashion", {
      state: {
        availability,
        selectedColour,
        selectedSize,
        selectedSubCategory,
        price: newPrice,
      },
    });
  };

  return (
    <div className="">
      <h1 className="text-[17px] font-medium p-2 ">Filter By</h1>
      <hr />
      {/* <button onClick={navigateWithFilters}>Apply Filters</button> */}

      <div className="  p-2  my-3 space-y-3 rounded-xl">
        <h5 className="text-[14px] font-medium">Color</h5>
        <div className=" gap-4 text-sm font-light">
          <Box sx={{ color: "black" }}>
            <Slider
              // marks={marks}
              step={10}
              value={val}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `$${value}`} // Format value with currency
              min={MIN}
              max={MAX}
              onChange={(e, newVal) => handlePriceChange(newVal)} // Handle price change
              sx={{ color: "black" }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="body2"
                onClick={() => handlePriceChange(MIN)} // Use handlePriceChange for navigation
                sx={{
                  cursor: "pointer",
                  color: "black",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                ${val} 
              </Typography>
              <Typography
                variant="body2"
                onClick={() => handlePriceChange(MAX)} // Use handlePriceChange for navigation
                sx={{
                  cursor: "pointer",
                  color: "black",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                ${MAX} max
              </Typography>
            </Box>
          </Box>
        </div>
      </div>
      <div className="  p-2  my-3 space-y-3 rounded-xl">
        <h5 className="text-[14px] font-medium">Availability</h5>
        <div className="flex flex-col gap-2 text-sm font-light">
          {[
            
            "Man",
            "Women",
            "Kids",
            "Accessories",
            "Dress",
            "Jewellery",
            "Cosmetics",
            "Fashion",
          ].map((cat, index) => (
            <label
              key={index + 1}
              className="flex gap-2 medium-14 text-gray-30"
            >
              <input
                type="checkbox"
                value={cat}
                className="w-3"
                onChange={() => handleAvailabilityChange(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>
      <div className="  p-2  my-3 space-y-3 rounded-xl">
        <h5 className="text-[14px] font-medium">Size</h5>
        <div className="flex flex-col gap-2 text-sm font-light">
          {[ "S", "M", "L", "XL", , "XXL"].map((cat, index) => (
            <label
              key={index + 1}
              className="flex gap-2 medium-14 text-gray-30"
            >
              <input
                type="checkbox"
                value={cat}
                className="w-3"
                onChange={() => handleSizeChange(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>
      {/*  */}
      <div className="  p-2  my-3 space-y-3 rounded-xl">
        <h5 className="text-[14px] font-medium">Sub Categories</h5>
        <div className="flex flex-col gap-2 text-sm font-light">
          {[
            
            "Fashion",
            "Dress",
            "Jewellery",
            "Cosmetics",
            ,
            "Accessories",
            "Topwear",
            "Bottomwear",
            "Winterwear",
            "Topwear",
          ].map((cat, index) => (
            <label
              key={index + 1}
              className="flex gap-2 medium-14 text-gray-30"
            >
              <input
                type="checkbox"
                value={cat}
                className="w-3"
                onChange={() => handleSubCategoryChange(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>
      <div className="p-2 my-3 space-y-3 rounded-xl">
        <h5 className="text-[14px] font-medium">Color</h5>
        <div className="flex flex-col gap-4 text-sm font-light">
          {colors.map((color) => (
            <div key={color.name} className="flex items-center gap-2">
              <span
                className="inline-block w-5 h-5 rounded-full"
                style={{ backgroundColor: color.code }}
              ></span>
              <span
                onClick={() => handleCategoryChange(color.name)}
                className="cursor-pointer"
              >
                {color.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FashoinSlider;
