import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaMessage } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-[#f9eae1]">
      <div className="container px-5 py-24 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="mb-4">
          <h2 className="font-bold text-gray-900 text-xl mb-3">Contact Us</h2>
          <nav className="list-none mb-10 text-black text-sm font-medium tracking-wide">
            <li className="flex items-center space-x-2 mb-2">
              <FaLocationDot size={22} />
              <a className="hover:cursor-pointer">
                450 CD, Country Latin Literature
              </a>
            </li>
            <li className="flex items-center space-x-2 mb-2">
              <FaPhoneAlt size={22} />
              <a className="hover:cursor-pointer">8am-9pm, Mon-Sat</a>
            </li>
            <li className="flex items-center space-x-2 mb-2">
              <FaMessage size={22} />
              <a className="hover:cursor-pointer">contact-fashionstop.com</a>
            </li>
          </nav>
        </div>
        <div className="mb-4">
          <h2 className="font-bold text-gray-900 text-xl mb-3">
            Policies & Info
          </h2>
          <nav className="list-none mb-10 text-black text-sm font-medium tracking-wide">
            {" "}
            <li className="mb-2">
              <a className="hover:cursor-pointer">Terms Conditions</a>
            </li>
            <li className="mb-2">
              <a className="hover:cursor-pointer">Policy for Sellers</a>
            </li>
            <li className="mb-2">
              <a className="hover:cursor-pointer">Policy for Buyers</a>
            </li>
            <li className="mb-2">
              <a className="hover:cursor-pointer">Shipping & Refund</a>
            </li>
            <li className="mb-2">
              <a className="hover:cursor-pointer">Wholesale Policy</a>
            </li>
          </nav>
        </div>
        <div className="mb-4">
          <h2 className="font-bold text-gray-900 text-xl mb-3">Quick Links</h2>
          <nav className="list-none mb-10 text-black text-sm font-medium tracking-wide">
            <li className="mb-2">
              <a className=" hover:cursor-pointer">Home</a>
            </li>
            <li className="mb-2">
              <a className="hover:cursor-pointer">Products</a>
            </li>
            <li className="mb-2">
              <a className="hover:cursor-pointer">About Us</a>
            </li>
            <li className="mb-2">
              <a className="hover:cursor-pointer">Contact Us</a>
            </li>
            <li className="mb-2">
              <a className="hover:cursor-pointer">Shipping & Refund</a>
            </li>
          </nav>
        </div>
        <div className="mb-4">
          <h2 className="font-bold text-gray-900 text-xl mb-3">Subscribe Us</h2>
          <div className="flex flex-wrap justify-center items-end md:justify-start">
            <div className="relative w-40 sm:w-auto mr-2">
              <label
                htmlFor="footer-field"
                className="leading-7 text-sm text-black"
              >
                Contrary to popular belief of lorem ipsm latin.
              </label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
