import { useState } from "react";
import AddAddress from "../../common/Address/AddAddress";
import EditeAddressDetails from "../../common/Address/EditeAddressDetails";
import BackNavigate from "../../common/BackNavigate";
import { useUser } from "../../Hooks/useUser";
import { useDeleteAddressMutation, useGetAddressSingleUserQuery } from "../../../app/feature/addressApi/addressApi";
import Swal from "sweetalert2";
import { MdDelete, MdEdit } from "react-icons/md";
import Loading from "../../common/Loading";

const Address = () => {
  //  open address dailog
  const [openAddress, setOpenAddress] = useState(false);
  //  open edit address dailog
  const [OpenEdit, setOpenEdit] = useState(false);
  // 
  const [editData, setEditData] = useState({});

  // get user data
  const [user] = useUser();
  // get user all address
  const {data: addresses,isLoading,} = useGetAddressSingleUserQuery(user?.data._id);
  
  // delete address
  const [deleteAddress , {isLoading: addressLoading}] = useDeleteAddressMutation();

  //  delete address
  const handleDisableAddress = async (id) => {
    try {
      //  add toast sms 
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteAddress(id).unwrap();
          Swal.fire({
            title: "Deleted!",
            text: "Your address has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return isLoading ? <Loading /> : (
    <div className="">
      {/* titel  */}
      <div className="bg-white shadow-lg px-2 py-2 flex justify-between gap-4 items-center ">
        <h2 className="font-semibold text-ellipsis line-clamp-1">Address</h2>
        <button
          onClick={() => setOpenAddress(true)}
          className="primaryBtn"
        >
          Add Address
        </button>
      </div>
       
       {/* view address */}
      <div className="bg-white p-2 grid gap-4 max-h-[650px] overflow-y-auto my-3">
        {addresses?.data?.slice(0, 5).map((address, index) => (
          <div
            key={address._id}
            className={`border rounded p-3 flex-col gap-3 bg-white ${
              !address.status && "hidden"
            }`}
          >
            <div className="w-full">
              <p>
                <span className="font-normal text-[14px]">Location :</span>{" "}
                {address.addressline}
              </p>
              <p>
                <span className="font-normal text-[14px]">City :</span> {address.city}
              </p>
              <p>
                <span className="font-normal text-[14px]">State : </span> {address.state}
              </p>
              <p>
                <span className="font-normal text-[14px]">Country : </span>
                {address.country} -{" "}
                <span className="font-normal text-[14px]">Pincode :</span>
                {address.pincode}
              </p>
              <p>
                <span className="font-normal text-[14px]">Number: </span>
                {address.mobile}
              </p>
            </div>
            {/* edite and delete */}
            <div className="flex gap-5 my-3">
              <button
                onClick={() => {
                  setOpenEdit(true);
                  setEditData(address);
                }}
                className="bg-green-200 p-1 rounded hover:text-white hover:bg-green-600"
              >
                <MdEdit />
              </button>
              <button
                onClick={() => handleDisableAddress(address._id)}
                className="bg-red-200 p-1 rounded hover:text-white hover:bg-red-600"
              >
                {/* Add loading spinner or delete icon here */}
                {addressLoading ? '...' : <MdDelete />}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/*  add address modal */}
      {openAddress && <AddAddress close={() => setOpenAddress(false)} />}
      {/*  edit address modal */}
      {OpenEdit && (
        <EditeAddressDetails data={editData} close={() => setOpenEdit(false)} />
      )}
      {/*   */}
      <BackNavigate />
    </div>
  );
};

export default Address;
