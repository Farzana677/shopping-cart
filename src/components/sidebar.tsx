import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { CiShoppingCart } from "react-icons/ci";
import { FaHeart, FaBars } from "react-icons/fa";
import { IoIosTrash } from "react-icons/io";
import { Button } from "react-aria-components";
import { useCart } from "../context/userContentProvider";

const navigationItems = [
  { path: "/dashboard", label: "All Products" },
  { path: "/categories", label: "Categories" },
  // { path: "/JEWELERY", label: "Jewelry" },
  { path: "/contact", label: "Contact" },
  // { path: "/electronics", label: "Electronics" },
  { path: "/login", label: "Login" },
];

export default function Sidebar() {
  const { cartItems, removeFromCart } = useCart() || {
    cartItems: [],
    removeFromCart: () => {},
  };
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [bounce, setBounce] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAvatarClick = () => {
    if (isCartOpen) {
      setIsCartOpen(false);
    }

    setIsDropdownOpen((prev) => !prev);
  };

  const handleCartClick = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }

    setIsCartOpen((prev) => !prev);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateCartQuantity = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignOut = () => {
    console.log("User signed out.");
  };
  useEffect(() => {
    if (cartItems.length > 0 || cartItems.length === 0) {
      setBounce(true);
      const timer = setTimeout(() => {
        setBounce(false);
      }, 300); // Match the duration of the bounce animation
      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [cartItems]);
  return (
    <nav className="sm:flex md:flex justify-between items-center p-4 text-white">
      {/* Hamburger Icon (only on small screens) */}
      <div className="md:hidden flex items-center">
        <button onClick={handleMenuToggle}>
          <FaBars size={30} />
        </button>
      </div>

      {/* Center Logo */}
      <Link to="/" className="flex items-center justify-center flex-grow gap-2">
        <span className="logo text-lg font-semibold mr-2">Swiftcart</span>
      </Link>

      {/* Avatar Logo on the Right */}
      <div className="flex items-center gap-4">
        <img
          className="inline-block size-8 rounded-full ring-2 ring-white cursor-pointer"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="profile"
          onClick={handleAvatarClick}
        />
      </div>

      {/* Navigation Links (Responsive) */}
      <div
        className={`flex flex-wrap gap-4 w-full justify-center md:justify-center ${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:flex-wrap md:gap-4`}
      >
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `w-full md:w-auto px-3 py-2 text-lg font-bold text-center ${
                isActive ? "text-white border-b-2 border-white" : "text-white"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Profile and Cart Section */}
      <div className="flex items-center gap-4">
        <Button
          onPress={handleCartClick}
          className={`relative cursor-pointer ${
            bounce ? "custom-animation" : ""
          }`}
        >
          <span className="rounded-full bg-black w-5 h-5 text-white flex items-center justify-center absolute -top-2 -right-2">
            {calculateCartQuantity()}
          </span>
          <CiShoppingCart size={38} />
        </Button>
        <FaHeart size={38} />
      </div>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute top-16 left-26 bg-white shadow-lg p-4 rounded-md w-48 z-10">
          <ul>
            <li className="py-2 border-b">
              <button
                className="w-full text-left text-sm font-semibold text-gray-700"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </li>
            <li className="py-2">
              <button
                className="w-full text-left text-sm font-semibold text-gray-700"
                onClick={handleLoginClick}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Cart Menu */}
      {isCartOpen && (
        <div className="absolute top-16 right-8 bg-white shadow-lg p-4 rounded-md w-64 overflow-y-auto border border-white mt-2 z-10">
          <h3 className="text-xl font-semibold">Cart</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="py-2 border-b">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold line-clamp-1">
                      {item.title}
                    </p>
                    <span className="text-sm text-gray-500">
                      x{item.quantity}
                    </span>
                    <Button onPress={() => removeFromCart(item.id)}>
                      <IoIosTrash size={40} />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500">{item.category}</p>
                  <p className="text-sm font-semibold text-black">
                    ${item.price} x {item.quantity} = $
                    {item.price * item.quantity}
                  </p>
                </li>
              ))}
            </ul>
          )}
          {cartItems.length > 0 && (
            <div className="mt-4 flex justify-between">
              <p className="font-semibold">Total:</p>
              <p className="font-semibold text-black">
                ${calculateTotal().toFixed(2)}
              </p>
            </div>
          )}
          <Button
            className="bg-[#d77a7a;] text-white font-bold py-2 px-4 border  rounded-lg hover:cursor-pointer w-full"
            onPress={handleLoginClick}
          >
            Checkout
          </Button>
        </div>
      )}
    </nav>
  );
}
