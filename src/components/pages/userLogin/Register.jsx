import { TextField } from "@mui/material";
import { useState } from "react";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" container flex items-center justify-center h-screen">
      <div className=" grid grid-cols-1 gap-4  ">
        <h1 className="text-[22px] font-medium ">Log in to your account</h1>
        <div className="w-96  gap-4  ">
          <TextField
            fullWidth
            label="First Name"
            variant="outlined"
            type={ "text"}
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
        </div>
        <div className="w-96  gap-4  ">
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            type={ "text"}

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
        </div>
        {/* email  */}
        <div className="w-96  gap-4  ">
          <TextField
            fullWidth
            label="Your Email"
            variant="outlined"
            type={ "email"}
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
        </div>
        {/* password */}
        <div className="w-96  flex items-center ">
          <div className="w-96">
            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              label="Your Passwor"
              variant="outlined"
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
          </div>
          <div className="">
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="bg-primary p-[18px]  -ml-0.5 border uppercase text-white text-[13px] rounded-r hover:bg-textPrimary "
            >
              {" "}
              {showPassword ? "Hide" : "Show"}{" "}
            </button>
          </div>
        </div>

        {/*  */}
        <div className="flex justify-between">
          <p className="text-[14px] font-light text-textPrimary texthover">
            You have a account? Log in one here
          </p>
        </div>
        {/*  */}
        <button className="bg-primary p-[12px] rounded font-medium w-24 border uppercase text-white text-[13px] rounded-r hover:bg-textPrimary ">
          {" "}
          Register{" "}
        </button>
      </div>
    </div>
  );
};

export default Register;
