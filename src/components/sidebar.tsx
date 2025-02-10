import { useCart } from "../context/userContentProvider";
import { CiShoppingCart } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { IoIosTrash } from "react-icons/io";
import { Button } from "react-aria-components";
import logo2 from "../assets/logo2.jpg";

const navigationItems = [
  { path: "/dashboard", label: "All Products" },
  { path: "/men", label: "Men" },
  { path: "/JEWELERY", label: "Jewelary" },
  { path: "/about", label: "About" },
  { path: "/electronics", label: "Electronics" },
  { path: "/login", label: "Login" },
];

export default function Sidebar() {
  const { cartItems, removeFromCart } = useCart() || {
    cartItems: [],
    removeFromCart: () => {},
  };

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [bounce, setBounce] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };
  // Calculate the total cart value considering quantities
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Calculate total quantity of items in the cart
  const calculateCartQuantity = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };
  const navigate = useNavigate();
  const handlePress = () => {
    console.log("clicked");
    navigate("/login");
  };
  // Trigger bounce effect when cartItems change
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
    <nav className="flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-2">
        {" "}
        {/* This will align the logo and text in a row */}
        <img
          src={logo2}
          alt="Logo"
          className="h-20 object-contain cursor-pointer"
        />
        <span className="logo text-xl font-semibold">Swiftcart</span>{" "}
        {/* Add some styling to the text if needed */}
      </Link>

      <div className="flex space-x-4">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-lg font-bold ${
                isActive ? "text-gray-800" : "text-white"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Button
          onPress={handleCartClick}
          className={`relative cursor-pointer ${
            bounce ? "custom-animation" : ""
          }`}
        >
          <span className="rounded-full bg-orange-500 w-5 h-5 text-white flex items-center justify-center absolute -top-2 -right-2">
            {calculateCartQuantity()}
          </span>

          <CiShoppingCart size={30} color="oklch(0.705 0.213 47.604)" />
        </Button>
        <img
          className="inline-block size-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="profile"
        />
      </div>

      {isCartOpen && (
        <div className="absolute top-16 right-8 bg-white shadow-lg p-4 rounded-md w-64 overflow-y-auto border border-orange-500 mt-2 z-10">
          <h3 className="text-xl font-semibold">Cart</h3>

          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item: any) => (
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
                  <p className="text-sm font-semibold text-orange-500">
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
              <p className="font-semibold text-orange-500">
                ${calculateTotal().toFixed(2)}
              </p>
            </div>
          )}

          <Button
            className="bg-orange-400 text-white font-bold py-2 px-4 border border-orange-400 rounded-lg hover:bg-orange-400 hover:text-white w-full"
            onPress={handlePress}
          >
            Checkout
          </Button>
        </div>
      )}
    </nav>
  );
}
