import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../../../app/feature/userApi/userApi";
import NavigateLogin from "../../common/NavigateLogin";
const ResrtPassword = () => {
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resetError, setError] = useState("");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   console.log(location.state.email);

  useEffect(() => {
    if (!location?.state?.email) {
      toast.error("Email not found");
      navigate("/forgot-password");
    }
  }, []);

  const [resetPassword , {isLoading}] = useResetPasswordMutation()


  const onSubmit = async (data) => {
    // console.log(data);
    
    if (data.newPassword !== data.confirmpassword) {
      toast.error("Password and confirm password must be same");
      return;
    }
    const newPassword = {
      email: location?.state?.email,
      password: data.newPassword,
    };
    

    try {
      const {message} = await resetPassword(newPassword).unwrap();
      if (message) {
        toast.success("Password reset successfully");
        navigate("/login");
        reset();
      }
    } catch (error) {
      setError(error.data.msg);
    }
  };
  return (
    <section className="w-full container mx-auto px-2">
      <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7">
        <p className="font-semibold text-lg">Enter Your Password </p>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-1">
            <div className="w-96  flex items-center ">
              <div className="w-96">
                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  label="New Password "
                  variant="outlined"
                  name="newPassword"
                  {...register("newPassword", { required: true })}
                  sx={{
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#E51A17",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#E51A17",
                    },
                  }}
                />
                {errors.password && (
                  <span className="text-red-500  text-[14px] font-light">
                    This field is required
                  </span>
                )}
              </div>
              <div className={`${errors.password ? "mb-6" : ""}`}>
                <p
                  onClick={() => setShowPassword(!showPassword)}
                  className="bg-primary p-[18px]  -ml-0.5 border uppercase text-white text-[13px] rounded-r hover:bg-textPrimary "
                >
                  {" "}
                  {showPassword ? "Hide" : "Show"}{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-1">
            <div className="w-96  flex items-center ">
              <div className="w-96">
                <TextField
                  fullWidth
                  type={showConfirmPassword ? "text" : "password"}
                  label="Confirm Password"
                  variant="outlined"
                  name="confirmpassword"
                  {...register("confirmpassword", { required: true })}
                  sx={{
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#E51A17",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#E51A17",
                    },
                  }}
                />
                {errors.password && (
                  <span className="text-red-500  text-[14px] font-light">
                    This field is required
                  </span>
                )}
              </div>
              <div className={`${errors.password ? "mb-6" : ""}`}>
                <p
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="bg-primary p-[18px]  -ml-0.5 border uppercase text-white text-[13px] rounded-r hover:bg-textPrimary "
                >
                  {" "}
                  {showConfirmPassword ? "Hide" : "Show"}{" "}
                </p>
              </div>
            </div>
          </div>
          <p className="text-red-500 italic">{resetError}</p>
          <button
            className={`bg-primary p-[12px] rounded font-medium w-44 border uppercase text-white text-[13px] rounded-r hover:bg-textPrimary`}
          >
            {isLoading ? <p>Loading...</p> : "Change Password"}
          </button>
        </form>

        <NavigateLogin />
      </div>
    </section>
  );
};

export default ResrtPassword;
