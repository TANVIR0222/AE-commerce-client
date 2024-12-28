// import { Checkbox } from "@mui/material";
import { TbMessageHeart } from "react-icons/tb";

const Footer = () => {
  //   const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <footer className=" text-black py-8 ">
      <div className="container mx-auto footer-script ">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Us */}
          <div className="border-r ">
            <h3 className="text-lg texthover font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p>Classyshop - Mega Super Store</p>
              <p>507-Union Trade Centre</p>
              <p>France</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:sales@yourcompany.com"
                  className="text-primary hover:underline"
                >
                  sales@yourcompany.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+919876543210"
                  className="text-primary hover:underline"
                >
                  (+91) 9876-543-210
                </a>
              </p>
              <p className="mt-4 flex gap-2">
                <TbMessageHeart size={45} className="text-primary font-light" />
                <a
                  href="#"
                  className="hover:underline text-[18px] text-textPrimary font-medium "
                >
                  Online Chat <br /> Get Expert Help
                </a>
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Prices drop
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  New products
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Best sales
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Stores
                </a>
              </li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Legal Notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms and conditions of use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Secure payment
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Login
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-left font-semibold mb-4">
              Subscribe to newsletter{" "}
            </h3>

            <div className="space-y-2">
              <p>
                Subscribe to our latest newsletter to get news about special
                discounts.
              </p>
              <div className="">
                <input
                  type="text"
                  className="w-72 focus:outline-none border border-black rounded p-2"
                />
                <button className="text-sm my-2 text-white font-medium bg-primary py-3 px-3 md:px-5 uppercase rounded hover:bg-black transition duration-300">
                  Subscribe
                </button>
              </div>
              <p className=" ">
                <input
                  id="checkbox"
                  type="checkbox"
                  className="w-4 h-4 rounded focus:outline-none focus:ring mr-2"
                />
                I agree to the terms and conditions and the privacy policy
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center  border-gray-700 pt-4">
          <p>&copy; 2024 Classyshop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
