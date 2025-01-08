import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router";
import { IoMdHome } from "react-icons/io";

const BackNavigate = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-6 p-4 my-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 texthover  focus:outline-none"
      >
        <AiOutlineArrowLeft size={15} />
        <span className="text- [10px] font-normal ">Back</span>
      </button>
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 texthover focus:outline-none"
      >
        <IoMdHome size={15} />
        <span className="text- [10px] font-normal ">Go To Home</span>
      </button>
    </div>
  );
};

export default BackNavigate;
