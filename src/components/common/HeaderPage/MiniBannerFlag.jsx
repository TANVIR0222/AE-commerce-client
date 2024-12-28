import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";


const countries = [
  {
    name: "Bangladesh",
    code: "BD",
    flag: "https://flagcdn.com/w320/bd.png", // Bangladesh flag
  },
  {
    name: "United States",
    code: "US",
    flag: "https://flagcdn.com/w320/us.png",
  },
  {
    name: "Canada",
    code: "CA",
    flag: "https://flagcdn.com/w320/ca.png",
  },
  {
    name: "United Kingdom",
    code: "GB",
    flag: "https://flagcdn.com/w320/gb.png",
  },
  {
    name: "Germany",
    code: "DE",
    flag: "https://flagcdn.com/w320/de.png",
  },
];

const MiniBannerFlag = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const countrieDrop = (
    <div className="">
      {isDropdownOpen && (
        <ul className="w-64 mt-2 border rounded-md shadow-lg">
          {countries.map((country) => (
            <div key={country.code} onClick={() => handleSelect(country)} className="flex items-center justify-between p-2 hover:bg-blue-100 cursor-pointer">
              <img className='w-8 h-8' src={country.flag} alt="" /> 
              <h1 className="text-[14px] text-textPrimary">{country.name}</h1>
            </div>
          ))}
        </ul>
      )}
    </div>
  )

  return (
    <div className="flex items-center justify-between gap-2">
       
        <p className="texthover fashon_deshing cursor-pointer">Help Center</p>
        <span className=" border-textSecondary ">|</span>

        <p className="texthover fashon_deshing cursor-pointer">Order Tracking</p>
        <span className=" border-textSecondary ">|</span>

      <Tooltip 
       title={countrieDrop} 
       componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: "#FFFFFF", // Custom background color
            color: "#FFFFFF", // Custom text color
          },
        },
        
      }}
       >
      <button
        className="w-fit text-left focus:outline-none texthover fashon_deshing cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedCountry ? <div className="flex items-center gap-2 "><img className='w-4 h-4' src={selectedCountry.flag} alt="" /> <h1 className="flex items-center justify-between gap-2">{selectedCountry.name} <IoMdArrowDropdown   className={`transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`} /> </h1> </div> : `Select a country `}
      </button>
      </Tooltip>
      <span className=" border-textSecondary ">|</span>
      <p className="texthover fashon_deshing cursor-pointer">BDT</p>
    </div>
  );
};

export default MiniBannerFlag;
