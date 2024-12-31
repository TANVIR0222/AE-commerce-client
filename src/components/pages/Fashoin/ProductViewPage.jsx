import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Rating } from "@mui/material";
import { styled } from '@mui/material/styles';
import { CiHeart, CiRepeat } from "react-icons/ci";
import Stack from '@mui/material/Stack';
import { MdOutlineKeyboardArrowUp  , MdOutlineKeyboardArrowDown} from "react-icons/md";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

// 
import { LiaFacebookF } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { LuLockKeyhole } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { PiKeyReturn } from "react-icons/pi";
import OfferDay from "../../common/Fashoin/OfferDay";
import { useState } from "react";
import DescriptionPage from "../../common/Fashoin/DescriptionPage";
import ProductDetails from "../../common/Fashoin/ProductDetails";
import UserComment from "../../common/Fashoin/UserComment";




const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
      ...theme.applyStyles('dark', {
        backgroundColor: '#308fe8',
      }),
    },
}));


const ProductViewPage = () => {

  const [active, setActive] = useState(0);
  

  return (
    <div className="">

      <div className="h-24 bg-[#f2efef] ">
        <div className="container flex items-center gap-3  h-24 text-[14px]">
          <h1 className="text-textPrimary font-light">
            {" "}
            Home <span className="text-[#808080]">|</span>{" "}
            <span className="text-[#808080]">Fashion</span>{" "}
            <span className="text-[#808080]">|</span>{" "}
            <span className="text-[#808080] text-[14px]">
              Apple AirPods Max Over-Ear Wireless Headphone
            </span>{" "}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:flex gap-4 container ">
        <div className="w-full md:w-full lg:w-1/2">
          <Carousel>
            <div>
              <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/29-home_default/hummingbird-printed-t-shirt.jpg" />
            </div>
            <div>
              <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/29-home_default/hummingbird-printed-t-shirt.jpg" />
            </div>
            <div>
              <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/29-home_default/hummingbird-printed-t-shirt.jpg" />
            </div>
          </Carousel>
        </div>
        <div className="w-full md:w-full lg:w-1/2 space-y-4">
          <div className="flex items-center gap-3">
            <Rating
              name="half-rating-read"
              defaultValue={5}
              precision={0.5}
              readOnly
            />{" "}
            <p className="text-[14px] text-textSecondary ">1 Review(s) </p>
          </div>

          <div className=" space-y-3">
            <h1 className="text-[22px] font-medium ">
              Apple AirPods Max Over-Ear Wireless Headphone
            </h1>
            <p className="text-[14px] text-textSecondary w-full md:w-full lg:w-[545px] leading-6">
              We denounce with righteous indignation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of the moment,
              so blinded by desire that they cannot foresee.
              <hr className="my-5" />
            </p>

            <div className=" space-y-2">
            <h4 className="text-[15px] font-medium ">Brand : <span className="text-[15px] text-textSecondary font-light texthover">Gadget ZoneGadget Zone</span> </h4>
            <h4 className="text-[15px] font-medium ">Reference : <span className="text-[15px] text-textSecondary font-light">Product1</span> </h4>
            <h4 className="text-[15px] font-medium ">Condition : <span className="text-[15px] text-textSecondary  font-light">New</span> </h4>
            <h4 className="text-[15px] font-medium ">Available In Stock : <span className="text-[15px] text-green-600 font-light">249 Items</span> </h4>
            <p className="text-textPrimary text-[15px] font-medium" >Hurry up! only <span className="text-primary font-medium" >249</span> items left in stock!˝ </p>
            </div>
            <div className="w-96">
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <BorderLinearProgress variant="determinate" value={60} />
            </Stack>
            </div>
            <div className=" space-y-1">
                <p className="text-[24px] text-primary font-medium"> $45.26 </p>
                <p className="text-[14px] text-textSecondary font-light" >Free Shipping (Est. Delivery Time 2-3 Days)</p>
            </div>

            {/* offer day  */}
            <div className="">
                  <OfferDay />
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center">
                <p className="text-[24px] text-textPrimary font-light border w-fit p-2 px-4" >1</p>
                <div className="">
                <p className="text-[24px] text-textPrimary font-light border w-fit p-0.4 texthover hover:bg-gray-300" ><MdOutlineKeyboardArrowUp /></p>
                <p className="text-[24px] text-textPrimary font-light border w-fit p-0.4 texthover hover:bg-gray-300" > <MdOutlineKeyboardArrowDown/> </p>
                </div>
                </div>
                <button className="bg-primary font-medium text-white py-2.5 px-16 rounded-md hover:bg-black uppercase">add to cart</button>
            </div>
            <div className="flex items-center gap-3 my-16 ">
                <p className="text-[14px] text-textSecondary font-light flex items-center gap-2 texthover"> <CiHeart size={25} /> Add to wishlist</p>
                <p className="text-[14px] text-textSecondary font-light flex items-center gap-2 texthover "> <CiRepeat size={25} /> Add to wishlist</p>
            </div>
            <p className="text-[14px] text-textPrimary font-light bg-green-100 border-[0.7px] border-green-400 w-fit py-[2px] px-[10px] " >In Stock</p>

            {/* socal media  */}
            <div className="flex items-center gap-4">
                <h4 className=" text-[#3b5998] rounded-md font-light hover:bg-[#3b5998] hover:text-white border-[0.7px] border-[#3b5998] w-fit py-[10px] px-[10px] " ><LiaFacebookF size={25} /></h4>
                <h4 className=" text-primary rounded-md font-light hover:bg-[#4B0082] hover:text-white border-[0.7px] border-[#4B0082] w-fit py-[10px] px-[10px] " ><CiInstagram size={25} /></h4>
                <h4 className=" text-black rounded-md font-light hover:bg-black hover:text-white border-[0.7px] border-black w-fit py-[10px] px-[10px] " ><BsTwitterX size={25} /></h4>
            </div>


            {/* Security policy */}
            <div className="flex-col items-center w-full md:w-full lg:w-[450px]  space-y-3">
                <h4 className="text-[14px]  text-textPrimary font-medium bg-[#F7F7F7] h-[72px]  flex items-center gap-3 p-2 "><LuLockKeyhole size={30} className="text-[#F19D76]"/> Security Policy</h4>
                <h4 className="text-[14px]  text-textPrimary font-medium bg-[#F7F7F7] h-[72px]  flex items-center gap-3 p-2"><TbTruckDelivery size={30} className="text-[#F19D76]" /> Delivery policy</h4>
                <h4 className="text-[14px]  text-textPrimary font-medium bg-[#F7F7F7] h-[72px]  flex items-center gap-3 p-2 "> <PiKeyReturn size={30}  className="text-[#F19D76]"/> Return policy</h4>
            </div>

            {/* product descriptions*/}
          </div>
        </div>
      </div>

      <div className="container flex items-center gap-4 " >
        {
          ['Description' ,'Product Details'].map((item , index) => (
            <div key={index+1} className="">
              <button onClick={() => setActive(index)}  className={`${active === index ? 'text-primary text-[18px] font-normal my-5' : 'text-[18px] font-normal text-textSecondary  my-5'}`}>{item}</button>
            </div>
          ))
        }
      </div>
      <div className="container">
      {active === 0 && <DescriptionPage  />}
      {active === 1 && <ProductDetails  />}
      </div>

      {/* user reviews */}
      <div className="container">
        <UserComment />
      </div>
    </div>
  );
};

export default ProductViewPage;