import { useEffect, useState } from "react";
import axios from "axios";
import SimpleSlider from "./slider";
import Fourcard from "./fourcard";
import cart from "../assets/cartgirl.jpg";
import SwiftCart from "./swiftcart";
import FreeDeliveryBanner from "./freedelivery";
import Footer from "./footer";

interface ProductData {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

const Dashboard = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("electronics");

  const fetchProductsByCategory = (category: string) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchProductsByCategory(selectedCategory);
  }, []);

  const categories = [
    { id: "electronics", label: "ELECTRONICS" },
    { id: "jewelery", label: "JEWELERY" },
    { id: "men's clothing", label: "MEN'S CLOTHING" },
    { id: "women's clothing", label: "WOMEN'S CLOTHING" },
  ];

  return (
    <>
      <div className="container mx-auto px-4">
        <SimpleSlider />
        <Fourcard />

        <div className="flex gap-8 mt-8">
          {/* Left side - Hero Image */}
          <div className="w-1/3">
            <img
              src={cart}
              alt="Shopping Cart Girl"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Categories and Products */}
          <div className="w-2/3">
            {/* Categories Navigation */}
            <div className="mb-8">
              <div className="flex space-x-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`pb-2 px-4 text-lg font-medium transition-colors ${
                      selectedCategory === category.id
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-500 hover:text-blue-600"
                    }`}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      fetchProductsByCategory(category.id);
                    }}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  <div className="aspect-square mb-4 relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="font-medium text-lg mb-2 truncate">
                    {product.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-bold">${product.price}</p>
                      <p className="text-sm text-gray-500">
                        In Stock: {Math.floor(Math.random() * 500)}
                      </p>
                    </div>
                  </div>
                  <button className="bg-rose-400 hover:bg-rose-500 text-white px-4 py-2 rounded-lg">
                    Add to cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FreeDeliveryBanner />

      <SwiftCart />
      <Footer />
    </>
  );
};

export default Dashboard;
