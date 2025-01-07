import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/pages/Home/Home";
import Blog from "../components/pages/Blog/Blog";
import Fashion from "../components/pages/Fashoin/Fashion";
import ContactPage from "../components/pages/contact/ContactPage";
import AboutPage from "../components/pages/contact/AboutPage";
import Login from "../components/pages/userLogin/Login";
import Register from "../components/pages/userLogin/Register";
import ForgotPassword from "../components/pages/userLogin/ForgotPassword";
import OTPverify from "../components/pages/userLogin/OTPverify";
import ResrtPassword from "../components/pages/userLogin/ResrtPassword";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fashion",
          element: <Fashion />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/forgot-Password",
          element: <ForgotPassword />,
        },
        {
          path: "/otp-verify",
          element: <OTPverify />,
        },
        {
          path: "/resrt-password",
          element: <ResrtPassword />,
        },
      ]
    }
  ]);