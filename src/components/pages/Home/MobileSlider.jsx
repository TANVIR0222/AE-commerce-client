const MobileSlider = () => {
  return (
    <div className="container">
      <div className=" grid grid-cols-1 md:flex items-center mt-4 gap-4 md:justify-between my-16">
        {/*  */}

        <div className=" relative overflow-hidden ">
          {/*  */}
          <img
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110 ease-in-out" // Image zoom on hover
            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-1.jpg"
            alt=""
          />
          <div className=" absolute top-[20%] right-4 space-y-3 md:space-y-1 lg:space-y-3">
            <h2 className="text-[21px] md:text-[15px] lg:text-[21px] text-textPrimary font-medium">
              S22 Samsung <br /> Smartphone
            </h2>
            <p className="text-[20px] text-primary font-normal">$250.00</p>
            <p className="text-[16px] text-textPrimary font-medium uppercase hover:underline">
              shop now
            </p>
          </div>
        </div>
        <div className=" relative overflow-hidden">
          {/*  */}
          
          <img
            className=" w-full h-full object-cover transition-transform duration-1000 hover:scale-110 ease-in-out" // Image zoom on hover
            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-2.jpg"
            alt=""
          />
          <div className=" absolute top-[20%] right-4 space-y-3 md:space-y-1 lg:space-y-3">
            <h2 className="text-[21px] md:text-[15px] lg:text-[21px] text-textPrimary font-medium">
              Armchair Mad <br /> By shopstic
            </h2>
            <p className="text-[20px] text-primary font-normal">$190.00</p>
            <p className="text-[16px] text-textPrimary font-medium uppercase hover:underline">
              shop now
            </p>
          </div>
        </div>
        <div className=" relative overflow-hidden">
          {/*  */}
          <img
            className=" w-full h-full object-cover transition-transform duration-1000 hover:scale-110 ease-in-out" // Image zoom on hover
            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-3.jpg"
            alt=""
          />
          {/*  */}
          <div className=" absolute top-[20%] right-4 space-y-3 md:space-y-1 lg:space-y-3">
            <h2 className="text-[21px] md:text-[15px] lg:text-[21px] text-textPrimary font-medium">
              Noise Wireless <br /> Headphones
            </h2>
            <p className="text-[20px] text-primary font-normal">$129.00</p>
            <p className="text-[16px] text-textPrimary font-medium uppercase hover:underline">
              shop now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSlider;
