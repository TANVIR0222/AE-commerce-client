const ReturnProductsBanner = () => {
  return (
    <div className="container">
      <div className=" grid grid-cols-1 md:flex items-center mt-4 gap-4 md:justify-between">
        {/*  */}

        <div className=" relative">
          {/*  */}
          <div className=" absolute top-[15%] md:top-[15%] lg:top-[17%] left-5 md:left-5 lg:left-10 space-y-1 md:space-y-2 lg:space-y-1">
            <p className="text-[14px] md:text-[16px] lg:text-[18px]  font-light">20 Days Return Products</p>
            <h2 className="text-[19px] md:text-[17px] lg:text-[32px] text-textPrimary font-medium">
              Mobile Shope-Smart
              <br />
              Watch T-55
            </h2>
            <button className="text-sm text-white font-medium bg-primary py-1 md:py-1 lg:py-2.5 px-3 md:px-5 uppercase rounded hover:bg-black transition duration-700">
              shop now
            </button>
          </div>
          <img
            className="my-4 rounded-md  w-full h-[136px] md:h-[136px] md:w-full lg:h-[210px] lg:w-[632px]"
            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-6.jpg"
            alt=""
          />
        </div>
        {/*  */}
        <div className=" relative">
          {/*  */}
          <div className=" absolute top-[15%] md:top-[15%] lg:top-[17%] left-5 md:left-5 lg:left-10 space-y-1 md:space-y-2 lg:space-y-1">
            <p className="text-[14px] md:text-[16px] lg:text-[18px]  font-light">Save Up To 30% Off</p>

            <h1 className="text-[19px] md:text-[17px] lg:text-[32px] text-textPrimary font-medium">
              Decoration Design
              <br /> Lamp Light
            </h1>
            <button className="text-sm text-white font-medium bg-primary py-1 md:py-1 lg:py-2.5 px-3 md:px-5 uppercase rounded hover:bg-black transition duration-700">
              shop now
            </button>
          </div>
          <img
            className="my-4 rounded-md  w-full h-[136px] md:h-[136px] md:w-full lg:h-[210px] lg:w-[632px]"
            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-7.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ReturnProductsBanner;
