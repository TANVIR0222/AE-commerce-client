import { IoIosSearch } from "react-icons/io";
import { blogsData } from "../../../utils/data";
import { IoTimeOutline } from "react-icons/io5";
import { HiLink } from "react-icons/hi2";

const Blog = () => {

  return (
    <div>
      <div className="h-24 bg-[#f2efef]  ">
        <div className="container flex items-center gap-3  h-24 text-[14px]">
          <h1 className="text-textPrimary font-light">
            {" "}
            Home <span className="text-[#808080]">|</span>{" "}
            <span className="text-[#808080]">Blog</span>{" "}
            <span className="text-[#808080]">|</span>{" "}
            <span className="text-[#808080] text-[14px]">
              Apple AirPods Max Over-Ear Wireless Headphone
            </span>{" "}
          </h1>
        </div>
      </div>

      {/* Blogs page content */}
      <div className="container flex my-10 md:my-12 lg:my-16  gap-4">
         {/* Content */}
         <div className="">
            <div className="relative mx-auto rounded-sm">
              <div className="overflow-hidden">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 transition-transform duration-700 "
                  
                >
                  {blogsData?.map((item, index) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 relative h-[380px] bg-secondary  group`} // Added `group` for hover styling
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={item.images[0].url}
                          alt={item.images?.description}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ease-in-out" // Image zoom on hover
                        />
                        {/* Overlay with search icon */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <IoIosSearch
                            size={40}
                            className="text-white border-[1px] border-white rounded-lg p-3 hover:bg-primary hover:border-none "
                          />
                          <HiLink
                            size={40}
                            className="text-white border-[1px] border-white rounded-lg p-3 hover:bg-primary hover:border-none "
                          />
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <h3 className="text-[14px] font-light flex items-center gap-3 text-primary">
                          <IoTimeOutline size={18} />{" "}
                          {new Date(item.published_date).toDateString()}
                        </h3>
                        <h3 className="text-[16px] font-medium text-textPrimary">
                          {item.title.toUpperCase()}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {item.content.introduction}
                        </p>
                        <a
                          href="#"
                          className=" hover:underline uppercase font-medium text-sm mt-2 inline-block underline text-link"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Blog;
