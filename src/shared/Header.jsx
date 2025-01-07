import { Link } from "react-router";
import BadgePage from "../components/common/HeaderPage/BadgePage";
import HeaderPage from "../components/common/HeaderPage/HeaderPage";
import MiniBannerFlag from "../components/common/HeaderPage/MiniBannerFlag";
import SearchPage from "../components/common/HeaderPage/SearchPage";
import SidebarPage from "../components/common/HeaderPage/SideBarPage";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFetchSingleUserQuery } from "../app/feature/userApi/userApi";

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const id = useSelector((state) => state?.user?.id)

  const {data : user} = useFetchSingleUserQuery(id)
  

  return (
    <header className="sticky top-0 z-40 bg-white">
      {/* Top mini Header */}
      <div className={`top-script  ${isScrolled? " hidden duration-1000 shadow-md" : "bg-transparent  text-white"}`}>
        <div className="container py-2">
          <div className={`flex items-center justify-between`}>
            <div className="text-[14px]">
              <p className=" text-textSecondary transition-all hidden md:hidden lg:block">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className={` flex items-center gap-2 mx-auto md:mx-auto lg:mx-1 
               `}>
              <MiniBannerFlag />
            </div>
          </div>
        </div>
      </div>

      {/* Mid mini Header */}
      <div className={`tb-script ${isScrolled ? "block lg:hidden shadow-md": "bg-transparent text-white"}`}>
        <div className="container">
          {/*  */}
          <div className={`flex items-center justify-between my-5` }>
            <div className="flex items-center gap-2">
              <div className=" flex lg:hidden">
                <SidebarPage />
              </div>
              <Link to={'/'} >
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/logo-1691412328.jpg"
                  alt=""
                  className="w-32 lg:w-[150px] h-[30px]"
                />
              </Link>
              
            </div>
            {/* search page  */}
            <div className="  hidden md:block lg:block">
              <SearchPage />
            </div>
            {/* auth */}
            <div className="flex items-center">
              <div className=" hidden lg:block">
                <div className="flex items-center gap-1">
                  {
                    user ? (
                      <p className="text-[14px] text-black font-light hover:text-primary transition duration-1000">
                      My Account{" "}
                    </p>
                      ) : (
                        <>
                        <Link to="/login">
                          <p className="text-[14px] text-black font-light hover:text-primary transition duration-1000">
                            Login{" "}
                          </p>
                        </Link>
                          <span className="text-black" >|</span>
                        <Link to={'/register'}>
                            <p className="text-[14px] text-textPrimary font-light hover:text-primary transition duration-1000">
                              Registe
                            </p>
                        </Link>
                        </>
                  )

                  }
                  <span className="p-3 border-r border-gray-300"></span>
                </div>
              </div>
              {/* user badges */}
              <div className={`flex items-center gap-2 ml-3 sticky top-0 z-40  `}>
                <BadgePage user ={user} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HeaderPage */}
      <div className="tb-script">
        <div className={ `container hidden lg:block`}>
          {/*  */}
          <HeaderPage />
        </div>
      </div>
      {/* mobile  */}
      <div className={`top-script flex md:hidden lg:hidden ${isScrolled ? " hidden shadow-md" : "bg-transparent opacity-55 text-white"} `}>
        <div className="my-2 ">
          <SearchPage />
          <hr />
        </div>
      </div>
      {/* <img className=" translate-x-2 hover:scale-125 hover:duration-1000 " src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" alt="" /> */}
    </header>
  );
};

export default Header;
