
const FashionViewPage = () => {
  return (
    <div className=" h-  ">
      <div className="flex items-center gap-5 justify-between mt-5">
        <div className=" space-y-2 bg-white">
          <h6 className="text-[14px] font-medium text-black texthover">
            Apparel
          </h6>
          <p className="fashon_deshing texthover ">
            Smart Tablet
          </p>
          <p className="fashon_deshing texthover">
            leather watch
          </p>
          <p className="fashon_deshing texthover">
            Crepe T-Shirt
          </p>
          <p className="fashon_deshing texthover">
            Rolling Diamond
          </p>
        </div>

        <div className=" space-y-2 bg-white">
          <h6 className="text-[14px] font-medium text-black texthover">
            Outerwear
          </h6>
          <p className="fashon_deshing texthover">
            Wooden Chair
          </p>
          <p className="fashon_deshing texthover">
            Sneakers Shoes
          </p>
          <p className="fashon_deshing texthover">Purse</p>
          <p className="fashon_deshing texthover">box Controller</p>
        </div>

        <div className=" space-y-2">
          <h6 className="text-[14px] font-medium text-black texthover">
            Footwear
          </h6>
          <p className="fashon_deshing texthover">
            Leather Watch
          </p>
          <p className="fashon_deshing texthover">
            Cabinet Table
          </p>
          <p className="fashon_deshing texthover">
            Headphones
          </p>
          <p className="fashon_deshing texthover">
            Sunglasses
          </p>
        </div>
      </div>
      <div className="my-4 relative">
        <img src="/minBanner.jpg" alt="" className="rounded p-4 " />
        <h1 className=" absolute inset-0 flex items-center justify-center text-[14px] text-white font-medium capitalize">
          Flat 20% Discount <br /> on all products
        </h1>
        
      </div>
    </div>
  );
};

export default FashionViewPage;
