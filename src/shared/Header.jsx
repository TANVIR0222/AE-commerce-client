import BadgePage from "../components/common/HeaderPage/BadgePage";
import HeaderPage from "../components/common/HeaderPage/HeaderPage";
import MiniBannerFlag from "../components/common/HeaderPage/MiniBannerFlag";
import SearchPage from "../components/common/HeaderPage/SearchPage";
import SidebarPage from "../components/common/HeaderPage/SideBarPage";

const Header = () => {
  return (
    <header className="">
      {/* Top mini Header */}
      <div className="top-script">
        <div className="container py-2">
          <div className=" flex items-center justify-between">
            <div className="text-[14px]">
              <p className=" text-textSecondary transition-all hidden md:hidden lg:block">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className=" flex items-center gap-2 mx-auto md:mx-auto lg:mx-1 ">
              <MiniBannerFlag />
            </div>
          </div>
        </div>
      </div>

      {/* Mid mini Header */}
      <div className="tb-script">
        <div className="container">
          {/*  */}
          <div className="flex items-center justify-between my-5">
            <div className="flex items-center gap-2">
              <div className=" flex md:hidden">
                <SidebarPage />
              </div>
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/logo-1691412328.jpg"
                alt=""
                className="w-32 lg:w-[150px] h-[30px]"
              />
            </div>
            {/* search page  */}
            <div className=" hidden md:block lg:block">
              <SearchPage />
            </div>
            {/* auth */}
            <div className="flex items-center">
              <div className=" hidden lg:block">
                <div className="flex items-center gap-1">
                  <p className="text-[14px] text-black font-light hover:text-primary transition duration-1000">
                    Login{" "}
                  </p>
                  /
                  <p className="text-[14px] text-textPrimary font-light hover:text-primary transition duration-1000">
                    Registe
                  </p>
                  <span className="p-3 border-r border-gray-300"></span>
                </div>
              </div>
              {/* user badges */}
              <div className="flex items-center gap-2 ml-3">
                <BadgePage />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HeaderPage */}
      <div className="tb-script">
        <div className="container hidden lg:block">
          {/*  */}
          <HeaderPage />
        </div>
      </div>
      {/* mobile  */}
      <div className="top-script flex md:hidden lg:hidden ">
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
