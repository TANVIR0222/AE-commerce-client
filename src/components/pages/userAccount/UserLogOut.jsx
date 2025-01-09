import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useLogoutUserMutation } from "../../../app/feature/userApi/userApi";
import { removeUser } from "../../../app/feature/userApi/userSlice";
import { useState } from "react";
import Loading from "../../common/Loading";

const UserLogOut = ({ collapsed, navigate }) => {
  const dispatch = useDispatch();
  const [logoutUser, { isLoading }] = useLogoutUserMutation();
  //   const [loading, setLoading] = useState(false); // State for loading

  const handleLogout = async () => {
    try {
        const res = await logoutUser().unwrap();
        dispatch(removeUser());
        localStorage.removeItem("id");
      } catch (error) {
        console.log(error);
      } finally {
        window.location.href = "/";

    }
      
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-4 py-3 w-full text-left hover:bg-gray-100 border-t border-b texthover"
      >
        <IoIosLogOut size={25} />
        {!collapsed && "Logout"}
      </button>
    </div>
  );
};

export default UserLogOut;
