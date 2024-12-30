const DiscountBanner = () => {
  return (
    <div className="container">
      <div className=" grid grid-cols-1 md:flex items-center mt-4 gap-4 md:justify-between">
        {/*  */}
        <div className=" relative">
          {/*  */}
          <div className="absolute top-[15%] md:top-[15%] lg:top-[17%] left-5 md:left-5 lg:left-10 space-y-1 md:space-y-2 lg:space-y-1">
            <p className="text-[14px] md:text-[16px] lg:text-[18px]  font-light">
              Save Up To 20% Off
            </p>

            <h1 className="text-[19px] md:text-[17px] lg:text-[32px] text-textPrimary font-medium">
              Santa Lucia Three <br /> Seater Sofa
            </h1>
            <button className="text-sm text-white font-medium bg-primary py-1 md:py-1 lg:py-2.5 px-3 md:px-5 uppercase rounded hover:bg-black transition duration-700">
              shop now
            </button>
          </div>
          <img
            className="my-4 rounded-md w-full md:w-full lg:h-[210px] lg:w-[632px]"
            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-4.jpg"
            alt=""
          />
        </div>
        <div className=" relative">
          {/*  */}
          <div className=" absolute top-[15%] md:top-[15%] lg:top-[17%] left-5 md:left-5 lg:left-10 space-y-1 md:space-y-2 lg:space-y-1">
            <p className="text-[14px] md:text-[16px] lg:text-[18px]  font-light">
              Best Online Discount
            </p>
            <h2 className="text-[19px] md:text-[17px] lg:text-[32px] text-textPrimary font-medium">
              Woman In Red Crew <br /> Neck T-shirt
            </h2>
            <button className="text-sm text-white font-medium bg-primary py-1 md:py-1 lg:py-2.5 px-3 md:px-5 uppercase rounded hover:bg-black transition duration-700">
              shop now
            </button>
          </div>
          <img
            className="my-4 rounded-md  w-full md:w-full lg:h-[210px] lg:w-[632px]"
            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-5.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
