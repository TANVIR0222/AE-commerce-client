import { Outlet } from "react-router";
import Blog from "./components/pages/Blog/Blog";
import AboutPage from "./components/pages/contact/AboutPage";
import ContactPage from "./components/pages/contact/ContactPage";
import Fashion from "./components/pages/Fashoin/Fashion";
import ProductViewPage from "./components/pages/Fashoin/ProductViewPage";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/userLogin/Login";
import Register from "./components/pages/userLogin/Register";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

export default function App() {
  return (
    <div className="">
      <Header />
      {/* <Home /> */}
      {/* <Fashion /> */}
      {/* <ProductViewPage /> */}
      {/* <Blog /> */}
      {/* <ContactPage /> */}
      {/* <AboutPage /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <Outlet />
      <Footer />
    </div>
  );
}
