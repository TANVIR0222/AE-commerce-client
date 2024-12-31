import { BsTwitterX } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";
import { LiaFacebookF } from "react-icons/lia";

const ContactPage = () => {
  return (
    <div className="h-screen">
      <div className="h-24 bg-[#f2efef] ">
        <div className="container flex items-center gap-3  h-24 text-[14px]">
          <h1 className="text-textPrimary font-light">
            {" "}
            Home <span className="text-[#808080]">|</span>{" "}
            <span className="text-[#808080]">Contact us </span>{" "}
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="">
          <div className="my-10">
            <h1 className="text-[28px] uppercase font-medium ">Get in touch</h1>
            <p className="text-[12px] font-normal ">
              Please enter the details of your requesst. A member of our support
              staff will respond as soon as possible.
            </p>
          </div>
          <div className=" grid grid-cols-1  md:flex justify-between  gap-10">
            <div className="w-full lg:w-1/2  space-y-3 gap-3">
              <div className="flex gap-3 text-black">
                <input
                  type="text"
                  placeholder="YOUE NAME"
                  className="w-full p-2 border focus:outline-none border-gray-400 rounded text-textPrimary font-normal "
                />
                <input
                  type="email"
                  placeholder="YOUE EMAIL"
                  className="w-full p-2 border focus:outline-none border-gray-400 rounded text-textPrimary font-normal"
                />
              </div>
              <input
                type="text"
                placeholder="PHONE NUMBER"
                className="w-full p-2 border focus:outline-none border-gray-400 rounded text-textPrimary font-normal"
              />
              <textarea
                type="text"
                placeholder="YOUR MESSAGE"
                className="w-full h-[216px] p-2 border focus:outline-none border-gray-400 rounded text-textPrimary font-normal"
              />
              <button className="bg-primary text-[15px] font-medium text-white py-2.5 px-16 rounded-md hover:bg-black uppercase">
                submit now
              </button>
            </div>

            <div className=" w-full lg:w-1/3">
              <div className="space-y-4">
                {/* Address */}
                <div className="">
                  <div className="flex  gap-4 ">
                    <h3 className="font-bold text-textPrimary text-[14px] ">
                      Address :
                      <span className="font-light text-textPrimary text-[14px] ">
                        123 Suspendis Matti, Visaosang Building VST District, NY
                        Accums, North American
                      </span>
                    </h3>
                  </div>
                </div>

                {/* Email */}
                <div className="">
                  <div className="flex  gap-4 ">
                    <h3 className="font-bold text-textPrimary text-[14px]">
                      Email :
                      <span className="font-light text-textPrimary text-[14px]">
                        tanvirislam3912@gmail.com
                      </span>
                    </h3>
                  </div>
                </div>

                {/* Phone */}
                <div className="">
                  <div className="flex  gap-4 ">
                    <h3 className="font-bold text-textPrimary text-[14px]">
                      Call Us :
                      <span className="font-light text-textPrimary text-[14px]">
                        (012)-345-67890
                      </span>
                    </h3>
                  </div>
                </div>

                {/* Opening Time */}
                <div className="gap-4">
                  <div className="flex  gap-4 ">
                    <h3 className="font-bold text-textPrimary text-[14px]">
                      Opening Time :
                      <span className="font-light text-textPrimary text-[14px]">
                        Our store has re-opened for shopping, exchanges every
                        day from 11am to 7pm.
                      </span>
                    </h3>
                  </div>
                </div>
                {/* socal media  */}
                <div className="flex items-center gap-4">
                  <h4 className=" text-[#3b5998] rounded-md font-light hover:bg-[#3b5998] hover:text-white border-[0.7px] border-[#3b5998] w-fit py-[10px] px-[10px] ">
                    <LiaFacebookF size={20} />
                  </h4>
                  <h4 className=" text-primary rounded-md font-light hover:bg-[#4B0082] hover:text-primary border-[0.7px] border-[#4B0082] w-fit py-[10px] px-[10px] ">
                    <CiInstagram size={20} />
                  </h4>
                  <h4 className=" text-black rounded-md font-light hover:bg-black hover:text-white border-[0.7px] border-black w-fit py-[10px] px-[10px] ">
                    <BsTwitterX size={20} />
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
