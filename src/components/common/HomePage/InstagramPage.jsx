import { Swiper, SwiperSlide } from "swiper/react";
import { clientComment, instragram } from "../../../utils/data.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const InstagramPage = () => {
  return (
    <div className=" bg-[#d6cccc] h-[990px] md:h-[420px]  lg:h-[381px] my-10 md:my-24 lg:my-32">
      <div className="container">
        
        <h1 className="text-[28px] font-medium  flex items-center justify-center h-[90px] md:h-[120px] lg:h-[150px] ">
            {" "}
            Follow Us on Instagram
          </h1>
          <div className="lg:flex items-center justify-center gap-4 grid md:grid-cols-4 grid-cols-2">
  {instragram.map((item, index) => (
    <div key={index} className="relative group space-y-4">
      {/* Image Container */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="lg:w-[167px] lg:h-[167px] md:w-[130px] md:h-[130px] rounded shadow-md transition-all duration-300 group-hover:blur-sm"
        />
        {/* Overlay with Instagram Icon */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 transition-opacity ease-in-out duration-1000 group-hover:opacity-100 rounded lg:w-[167px] lg:h-[167px] md:w-[130px] md:h-[130px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 3.75h-9a5.25 5.25 0 00-5.25 5.25v9a5.25 5.25 0 005.25 5.25h9a5.25 5.25 0 005.25-5.25v-9a5.25 5.25 0 00-5.25-5.25zM15 12a3 3 0 11-6 0 3 3 0 016 0zm1.875-4.125h.008v.008h-.008v-.008z"
            />
          </svg>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default InstagramPage;
