import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";
import { MdAddLocation, MdDateRange } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { useUser } from "../../Hooks/useUser";
import Loading from "../../common/Loading";
import UserLogOut from "./UserLogOut";

const NAVIGATION = [
  {
    id: 0,
    path: "/userLauout/my-account",
    title: "Dashboard",
    icon: <LuLayoutDashboard size={25} />,
  },
  {
    id: 1,
    path: "/userLauout/informations",
    title: "Informations",
    icon: <FaCircleUser size={25} />,
  },
  {
    id: 2,
    path: "/userLauout/address",
    title: "Add First Address",
    icon: <MdAddLocation size={25} />,
  },
  {
    id: 3,
    path: "/userLauout/order-hostory",
    title: "Order history",
    icon: <MdDateRange size={25} />,
  },
  {
    id: 4,
    path: "/userLauout/wishlist",
    title: "My Wishlist",
    icon: <FaHeart size={25} />,
  },
];
const userLauout = () => {
  //  collapsed slider 
  const [collapsed, setCollapsed] = useState();

  //  toggle Sidebar close 
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // navigate to page
  const navigate = useNavigate();
  //  user data
  const [user, isLoading] = useUser();


  // user loaging
  if(isLoading){
    return <Loading />
  }
  



  //  page name 
  const pathname = useLocation().pathname;
  return (
    <div className={`container flex`}>
  {/* Left Sidebar for Menu */}
  <div
    className={`py-4 transition-all duration-700 ease-in-out h-fit ${
      collapsed ? "w-16" : "w-full sm:w-72 md:w-80 lg:w-96"
    } bg-gray-100 text-black flex flex-col min-h-screen`}
  >
    {/* collapsed slider  , sidebar close  , sidebar open */}
    <button
      onClick={toggleSidebar}
      className="p-4 focus:outline-none flex justify-end texthover"
    >
      {collapsed ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
    </button>

    {/* user image Image  */}
    {!collapsed && (
      <div className="mx-auto">
        <img src={user?.data?.avatar} className="w-24 h-24 rounded-full" alt="Profile" />
        <p className="text-[14px] my-4">Joined { new Date(user?.data?.createdAt).toLocaleDateString() } </p>
      </div>
    )}

    {/* Sidebar Menu */}
    <nav className="flex-grow overflow-hidden">
      {NAVIGATION.map((item) => (
        <button
          key={item.id}
          className={`flex items-center gap-2 px-4 py-3 w-full text-left hover:bg-gray-100 border-t border-b ${
            pathname === item.path
              ? `border-l-4 font-light border-l-primary text-primary`
              : ""
          }`}
          onClick={() => navigate(item.path)}
        >
          <span className="text-lg">{item.icon}</span>
          {!collapsed && (
            <span className="text-[16px] font-light">{item.title}</span>
          )}
        </button>
      ))}
       {/*  */}
       <UserLogOut collapsed={collapsed} navigate={navigate} />
    </nav>
  </div>

  {/* Right Content Area */}
  <div
    className={`flex-grow min-h-screen ${
      collapsed ? "w-full" : "w-full sm:w-[calc(100%-72px)] md:w-[calc(100%-80px)] lg:w-[calc(100%-96px)]"
    }`}
  >
    <Outlet />
  </div>
</div>

  );
};

export default userLauout;
