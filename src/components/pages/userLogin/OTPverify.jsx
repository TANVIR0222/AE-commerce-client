import * as React from "react";
import { Input as BaseInput } from "@mui/base/Input";
import { Box, styled } from "@mui/system";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useVerifyOTPMutation } from "../../../app/feature/userApi/userApi";
import NavigateLogin from "../../common/NavigateLogin";

function OTP({ separator, length, value, onChange }) {
  const inputRefs = React.useRef(new Array(length).fill(null));

  const focusInput = (targetIndex) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.focus();
  };

  const selectInput = (targetIndex) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.select();
  };

  const handleKeyDown = (event, currentIndex) => {
    switch (event.key) {
      case "ArrowUp":
      case "ArrowDown":
      case " ":
        event.preventDefault();
        break;
      case "ArrowLeft":
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        break;
      case "ArrowRight":
        event.preventDefault();
        if (currentIndex < length - 1) {
          focusInput(currentIndex + 1);
          selectInput(currentIndex + 1);
        }
        break;
      case "Delete":
        event.preventDefault();
        onChange((prevOtp) => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });

        break;
      case "Backspace":
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }

        onChange((prevOtp) => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });
        break;

      default:
        break;
    }
  };

  const handleChange = (event, currentIndex) => {
    const currentValue = event.target.value;
    let indexToEnter = 0;

    while (indexToEnter <= currentIndex) {
      if (
        inputRefs.current[indexToEnter].value &&
        indexToEnter < currentIndex
      ) {
        indexToEnter += 1;
      } else {
        break;
      }
    }
    onChange((prev) => {
      const otpArray = prev.split("");
      const lastValue = currentValue[currentValue.length - 1];
      otpArray[indexToEnter] = lastValue;
      return otpArray.join("");
    });
    if (currentValue !== "") {
      if (currentIndex < length - 1) {
        focusInput(currentIndex + 1);
      }
    }
  };

  const handleClick = (event, currentIndex) => {
    selectInput(currentIndex);
  };

  const handlePaste = (event, currentIndex) => {
    event.preventDefault();
    const clipboardData = event.clipboardData;

    // Check if there is text data in the clipboard
    if (clipboardData.types.includes("text/plain")) {
      let pastedText = clipboardData.getData("text/plain");
      pastedText = pastedText.substring(0, length).trim();
      let indexToEnter = 0;

      while (indexToEnter <= currentIndex) {
        if (
          inputRefs.current[indexToEnter].value &&
          indexToEnter < currentIndex
        ) {
          indexToEnter += 1;
        } else {
          break;
        }
      }

      const otpArray = value.split("");

      for (let i = indexToEnter; i < length; i += 1) {
        const lastValue = pastedText[i - indexToEnter] ?? " ";
        otpArray[i] = lastValue;
      }

      onChange(otpArray.join(""));
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      {new Array(length).fill(null).map((_, index) => (
        <React.Fragment key={index}>
          <BaseInput
            slots={{
              input: InputElement,
            }}
            aria-label={`Digit ${index + 1} of OTP`}
            slotProps={{
              input: {
                ref: (ele) => {
                  inputRefs.current[index] = ele;
                },
                onKeyDown: (event) => handleKeyDown(event, index),
                onChange: (event) => handleChange(event, index),
                onClick: (event) => handleClick(event, index),
                onPaste: (event) => handlePaste(event, index),
                value: value[index] ?? "",
              },
            }}
          />
          {index === length - 1 ? null : separator}
        </React.Fragment>
      ))}
    </Box>
  );
}

export default function OTPverify() {
  const { handleSubmit } = useForm();
  const [otp, setOtp] = React.useState("");
  const navigate = useNavigate();

  const locations = useLocation();

  React.useEffect(() => {
    if (!locations?.state?.email) {
      toast.error("Email not found");
      navigate("/forgot-password");
    }
  }, []);

  const [verifyOTP, { isLoading}] = useVerifyOTPMutation();

  const onSubmit = async (data) => {
    const OTP = {
      otp: otp,
      email: locations?.state?.email,
    };



    try {
      const {message} = await verifyOTP(OTP).unwrap();
      
      if (message) {
        toast.success("Otp verify success");
        navigate("/resrt-password", {
          state:{
            email: locations?.state?.email
          }
        });
      }
    } catch (error) {
        toast.error(error?.data?.message);
    
    }
  };


  return (
    <div>
      <div className="flex justify-center items-center w-full mt-16">
        <section className="w-full container mx-auto px-2">
          <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7">
            <p className="font-semibold text-lg">Enter OTP</p>
            <form className="grid gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-1">
                <label htmlFor="otp">Enter Your OTP </label>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <OTP
                    separator={<span>-</span>}
                    value={otp}
                    onChange={setOtp}
                    length={6}
                  />
                  <span>Entered value: {otp}</span>
                </Box>
              </div>
              {/* <p className="text-red-500 italic">{otpError}</p> */}
              <button
                className={`primaryBtn`}
              >
                {isLoading ? <p>Loading...</p> : "OTP Verify"}
              </button>
            </form>

            <NavigateLogin />
          </div>
        </section>
      </div>
    </div>
  );
}

const blue = {
  100: "#E51a17",
  200: "#000000",
  400: "#3399FF",
  500: "#007FFF",
  600: "#000000",
  700: "#0059B2",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const InputElement = styled("input")(
  ({ theme }) => `
  width: 40px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 0;
  border-radius: 8px;
  text-align: center;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0 2px 4px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
  };

  &:hover {
    border-color: ${blue[100]};
  }

  &:focus {
    border-color: ${blue[100]};
  }

  /* firefox */
  &:focus-visible {
    outline: 0;
  }
`
);
