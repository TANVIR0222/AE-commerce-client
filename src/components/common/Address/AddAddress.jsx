import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import { useAddNewAddressMutation } from "../../../app/feature/addressApi/addressApi";
import { useUser } from "../../Hooks/useUser";

const AddAddress = ({ close }) => {
  //  react hook form
  const { register, handleSubmit, reset } = useForm();
  // get user
  const [user] = useUser()
  //  add new address
  const [addAddress , {isLoading}] = useAddNewAddressMutation();


  //  handle submit new address 
  const onSubmit = async (data) => {
    const { addressline, city, state, pincode, country, mobile } = data;    
    const newAddress = {
      addressline,
      city,
      state,
      pincode,
      country,
      mobile,
      id: user?.data?._id
    };

    
    try {
      const {message} = await addAddress(newAddress).unwrap(); 
      if(message){
        toast.success("Address Added Successfully")
        close();
        reset();
      }
    } catch (error) {
      toast.error(error);
    }
    
  };

  return (
    <div>
      <section className="bg-black fixed top-0 left-0 right-0 bottom-0 z-50 bg-opacity-70 h-screen overflow-auto">
        <div className="bg-white p-4 w-full max-w-lg mt-8 mx-auto rounded">
          {/* add address form */}
          <div className="flex justify-between items-center gap-4">
            <h2 className="font-semibold">Add Address</h2>
            <button onClick={close} className="hover:text-red-500">
              <IoClose size={25} />
            </button>
          </div>
          <form className="mt-4 grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-1">
              <label htmlFor="addressline">Address Line :</label>
              <input
                type="text"
                id="addressline"
                className="border focus:outline-none focus:border-black  p-2 rounded"
                {...register("addressline", { required: true })}
              />
            </div>
            {/*  */}
            <div className="grid gap-1">
              <label htmlFor="city">City :</label>
              <input
                type="text"
                id="city"
                className="border focus:outline-none focus:border-black  p-2 rounded"
                {...register("city", { required: true })}
              />
            </div>
            {/*  */}
            <div className="grid gap-1">
              <label htmlFor="state">State :</label>
              <input
                type="text"
                id="state"
                className="border focus:outline-none focus:border-black  p-2 rounded"
                {...register("state", { required: true })}
              />
            </div>
            {/*  */}
            <div className="grid gap-1">
              <label htmlFor="pincode">Pincode :</label>
              <input
                type="number"
                id="pincode"
                className="border focus:outline-none focus:border-black  p-2 rounded"
                {...register("pincode", { required: true })}
              />
            </div>
            {/*  */}
            <div className="grid gap-1">
              <label htmlFor="country">Country :</label>
              <input
                type="text"
                id="country"
                className="border focus:outline-none focus:border-black  p-2 rounded"
                {...register("country", { required: true })}
              />
            </div>
            {/*   */}
            <div className="grid gap-1">
              <label htmlFor="mobile">Mobile No. :</label>
              <input
                type="number"
                id="mobile"
                className="border focus:outline-none focus:border-black  p-2 rounded"
                {...register("mobile", { required: true })}
              />
            </div>

            <button
              type="submit"
              className="bg-primary w-full rounded  py-2 font-semibold mt-4 text-white hover:bg-textPrimary"
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddAddress;