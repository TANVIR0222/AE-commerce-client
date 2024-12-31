import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const MAX = 100;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];
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
    const [val, setVal] = useState(MIN);
  console.log(val);

  const handleChange = (_, newValue) => {
    setVal(newValue);
  };
    return (
        <div className="">
              <h1 className="text-[17px] font-medium p-2 ">Filter By</h1>
              <hr />
              <div className="  p-2  my-3 space-y-3 rounded-xl">
                <h5 className="text-[14px] font-medium">Availability</h5>
                <div className="flex flex-col gap-2 text-sm font-light">
                  {["Man", "Women", "Kids"].map((cat) => (
                    <label
                      key={cat}
                      className="flex gap-2 medium-14 text-gray-30"
                    >
                      <input
                        type="checkbox"
                        value={cat}
                        className="w-3"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>
              <div className="  p-2  my-3 space-y-3 rounded-xl">
                <h5 className="text-[14px] font-medium">Size</h5>
                <div className="flex flex-col gap-2 text-sm font-light">
                  {["Small", "Medium", "Large", "XXL", "XXXL"].map((cat) => (
                    <label
                      key={cat}
                      className="flex gap-2 medium-14 text-gray-30"
                    >
                      <input
                        type="checkbox"
                        value={cat}
                        className="w-3"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>
              <div className="  p-2  my-3 space-y-3 rounded-xl">
                <h5 className="text-[14px] font-medium">Color</h5>
                <div className="flex flex-col gap-4 text-sm font-light">
                  {colors.map((color) => (
                    <div key={color.name} className="flex items-center gap-2">
                      <span
                        className="inline-block w-5 h-5 rounded-full"
                        style={{ backgroundColor: color.code }}
                      ></span>
                      <span>{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="  p-2  my-3 space-y-3 rounded-xl">
                <h5 className="text-[14px] font-medium">Color</h5>
                <div className=" gap-4 text-sm font-light">
                  <Box sx={{ color: "black" }}>
                    <Slider
                      marks={marks}
                      step={10}
                      value={val}
                      valueLabelDisplay="auto"
                      min={MIN}
                      max={MAX}
                      onChange={handleChange}
                      sx={{ color: "black" }}
                    />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        variant="body2"
                        onClick={() => setVal(MIN)}
                        sx={{ cursor: "pointer" }}
                      >
                        ${val} min
                      </Typography>
                      <Typography
                        variant="body2"
                        onClick={() => setVal(MAX)}
                        sx={{ cursor: "pointer" }}
                      >
                        ${MAX} max
                      </Typography>
                    </Box>
                  </Box>
                </div>
              </div>
              <div className="h-[650px] hidden md:block">
                <img className="h-[650px]" src="/fashion.jpg" alt="" />
              </div>
            </div>
    );
};

export default FashoinSlider;