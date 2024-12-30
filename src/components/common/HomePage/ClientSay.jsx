// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { clientComment } from "../../../utils/data.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const ClientSay = () => {
  return (
    <div className="my-10 md:my-16">
    <div className="container ">
      <div className="">
        <h1 className="text-[22px] font-medium"> What Our Clients Say</h1>
      </div>
      <div className="my-5 mx-auto flex items-center">
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {clientComment.map((item, index) => (
              <SwiperSlide key={index + 1}>
                <div className="w-[345px] h-[250px] border-[1px] border-textPrimary space-y-4">
                  <div className="flex items-center gap-4  ml-3 p-2">
                    <div className="">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-full shadow-md"
                      />
                    </div>
                    <div>
                      <h1 className="text-[21px] font-medium">{item.name}</h1>
                      <p className="text-[14px] text-gray-600 font-light">
                        {item.user}
                      </p>
                    </div>
                  </div>
                  <p className="text-[14px] text-gray-600 ml-3 leading-5">
                    {item.text}
                  </p>
                </div>

                {/* */}
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
    </div>
  );
};

export default ClientSay;
