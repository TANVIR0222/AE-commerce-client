import { useForm } from "react-hook-form";
import { useUser } from "../../Hooks/useUser";
import { useState } from "react";
import Loading from "../../common/Loading";
import { useImageUploadeMutation } from "../../../app/feature/imageApi/imageApi";
import { useUpdateUserInformationMutation } from "../../../app/feature/userApi/userApi";
import BackNavigate from "../../common/BackNavigate";
import toast from "react-hot-toast";

const Informations = () => {
  //  react hook form
  const { register,handleSubmit,formState: { errors },} = useForm();

  // get user data
  const [user, isLoading] = useUser();

  //  user Loding
  if(isLoading){
    return <Loading />
  }

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const [imageUploade, { isLoading: imageLoading }] = useImageUploadeMutation();
  const [updateUserInformation, { isLoading: saveLading }] =
    useUpdateUserInformationMutation();

    const onSubmit = async (data) => {
      // Validate if passwords match
      if (data.password !== data.confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }
    
      try {
        let uploadedImage; // Declare variable outside the block
    
        // Prepare image upload if an image is selected
        if (data.image && data.image[0]) {
          const image = data.image[0];
          const formData = new FormData();
          formData.append("image", image);
    
          // Upload image
          const response = await imageUploade(formData).unwrap();
          uploadedImage = response?.data;
        }
    
        // Construct user data
        const userData = {
          id: user?.data?._id,
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          number: data.mobile,
          image: uploadedImage, // Use uploaded image if available
          password: data.password,
        };
    
        // Update user information
        const {message} = await updateUserInformation(userData).unwrap();        
        toast.success(message);
      } catch (error) {
        console.error(error);
        toast.error('An error occurred while updating information');
      }
    };
    
    
  return isLoading ? (
    <Loading />
  ) : (
    <div className="p-4">
      {/**name, mobile , email, change password */}
      <form className="my-4  gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="p-2   outline-none border focus-within:border-black rounded"
              defaultValue={user?.data?.firstname}
              name="firstname"
              {...register("firstname")}
            />
          </div>
          <div className="grid">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="p-2   outline-none border focus-within:border-black rounded"
              defaultValue={user?.data?.lastname}
              name="lastname"
              {...register("lastname")}
            />
          </div>
          <div className="grid">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              defaultValue={user?.data?.email}
              placeholder="Enter your email"
              className="p-2   outline-none border focus-within:border-black rounded"
              name="email"
              {...register("email")}
            />
          </div>
          <div className="grid">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              id="mobile"
              defaultValue={user?.data?.number}
              placeholder="Enter your mobile"
              className="p-2   outline-none border focus-within:border-black rounded"
              name="mobile"
              {...register("mobile")}
            />
          </div>
          {/* passsword  */}

          {/* Password Field */}
          <div className="">
            <label className="">Password</label>
            <div className="flex  border focus-within:border-black rounded ">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="p-2 w-full focus:outline-none  rounded-l"
                name="password"
                {...register("password")}
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className="bg-primary p-[14px]  -ml-0.5 border uppercase text-white text-[13px] rounded-r hover:bg-textPrimary"
              >
                {" "}
                {showPassword ? "Hide" : "Show"}{" "}
              </p>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="">
            <label className="">Confirm Password</label>
            <div className="flex  border focus-within:border-black rounded">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="p-2 w-full  outline-none rounded-l"
                name="confirmPassword"
                {...register("confirmPassword")}
              />
              <p
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="bg-primary p-[14px]  -ml-0.5 border uppercase text-white text-[13px] rounded-r hover:bg-textPrimary "
              >
                {" "}
                {showConfirmPassword ? "Hide" : "Show"}{" "}
              </p>
            </div>
          </div>

          {/* image  */}
          <div className="grid gap-2">
            <label className="">Image</label>
            <input
              type={imageLoading ? "text" : "file"} // Display a text input temporarily when loading
              placeholder={imageLoading ? "Uploading..." : ""}
              className="p-2 w-full  outline-none border focus:outline-none rounded"
              name="image"
              {...register("image")}
              disabled={imageLoading} // Disable input during loading
            />
          </div>
        </div>
        <button className="primaryBtn my-3">
          {saveLading ? "Loading..." : "Save"}
        </button>
      </form>
      {/*  */}
      <BackNavigate />
    </div>
  );
};

export default Informations;
