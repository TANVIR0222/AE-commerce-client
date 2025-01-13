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
import MyAccount from "../components/pages/userAccount/MyAccount";
import Informations from "../components/pages/userAccount/Informations";
import UserLauout from "../components/pages/userAccount/userLauout";
import Address from "../components/pages/userAccount/Address";
import OrderHistory from "../components/pages/userAccount/OrderHistory";
import Wishlist from "../components/pages/userAccount/Wishlist";
import ProductViewPage from "../components/pages/Fashoin/ProductViewPage";

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
        {
          path: "/ProductViewPage/:id",
          element: <ProductViewPage />,
        },
        
        {
          path: "/userLauout",
          element: < UserLauout />,
          children:[
            {
              path: "my-account",
              element: <MyAccount />,
            },
            {
              path: "informations",
              element: <Informations />,
            },
            {
              path: "address",
              element: <Address />,
            },
            {
              path: "order-hostory",
              element: <OrderHistory />,
            },
            {
              path: "wishlist",
              element: <Wishlist />,
            },
          ]
        },
      ]
    }
  ]);