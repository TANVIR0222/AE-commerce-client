import { TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useForgotPasswordMutation } from "../../../app/feature/userApi/userApi";
import toast from "react-hot-toast";
import NavigateLogin from "../../common/NavigateLogin";

const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
      const [forgotError, setError] = useState("");
      const navigat = useNavigate();
    
      const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
    
      const onSubmit = async (data) => {
        try {
            const {message} = await forgotPassword(data).unwrap();
            
            if(message){
                toast.success(message);
                navigat("/otp-verify" , {state: data});
            }

        } catch (error) {          
          setError(error?.data?.data);
            
        }
        
      };
    return (
        <section className="w-full container mx-auto px-2">
       
      <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7">
        <p className="font-normal text-lg">Forgot Password </p>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-96  gap-4 ">
          <TextField
            fullWidth
            label="Your Email"
            variant="outlined"
            name="email"
            {...register("email", { required: true })} 
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
          {errors.password && <span className="text-red-500  text-[14px] font-light">This field is required</span>}

          </div>
          <p className="text-red-700 italic">{forgotError}</p>

          <button
            className={`primaryBtn `}
          >
            {isLoading ? <p>Loading...</p> : "Send OPT"}
          </button>
        </form>

        <NavigateLogin />
      </div>
    </section>
    );
};

export default ForgotPassword;