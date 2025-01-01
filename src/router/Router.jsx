import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/pages/Home/Home";
import Blog from "../components/pages/Blog/Blog";
import Fashion from "../components/pages/Fashoin/Fashion";
import ContactPage from "../components/pages/contact/ContactPage";
import AboutPage from "../components/pages/contact/AboutPage";
import Login from "../components/pages/userLogin/Login";
import Register from "../components/pages/userLogin/Register";

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
        ]
    }
  ]);