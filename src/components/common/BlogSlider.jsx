import { IoIosSearch } from "react-icons/io";
import { blogsData } from "../../utils/data";

const BlogSlider = ({blogs}) => {
  return (
    <div>
      <h1 className="text-[17px] font-medium p-4 ">All Blog</h1>
      <hr />
      <div className="my-4 p-3">
        <h1 className="text-[17px] font-light p-2   ">Search</h1>
        <div className="border  w-full   mx-auto flex items-center p-2 rounded">
          <input
            type="text"
            className="w-56 p-1 focus:outline-none  rounded"
            placeholder="Search for a blog"
          />
          <span className="p-3 border-r border-gray-300 hidden md:hideen lg:block "></span>
          <IoIosSearch
            size={25}
            className="text-[#808080] text-[18px] cursor-pointer ml-2 "
          />
        </div>
      </div>
      <h1 className="text-[17px] font-light p-2 ">Recent Post</h1>
      <div className="">
        {blogsData.map((item, index) => (
          <div
            onClick={() => setBlogs(item.title)}
            key={index}
            className={` ${
              blogs === item.title
                ? "flex items-center gap-3 p-2 bg-link  "
                : "flex items-center gap-3 p-2 border-b"
            } border-b`}
          >
            <img
              src={item.images[0].url}
              alt=""
              className="w-12 h-12 rounded"
            />
            <div className="text-white flex flex-col">
              <p
                className={` ${
                  blogs === item.title
                    ? "text-[9px] text-secondary font-normal  "
                    : "text-[9px] text-textPrimary font-normal"
                } `}
              >
                {new Date(item.published_date).toDateString()}
              </p>
              <h1
                className={` ${
                  blogs === item.title
                    ? "text-[14px] text-secondary font-normal  "
                    : "text-[14px] text-textPrimary font-normal"
                } `}
              >
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSlider;
