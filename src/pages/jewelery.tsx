import axios from "axios";
import { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "../context/userContentProvider";
interface Jewelery {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
}
function Jewelery() {
  const [data, setData] = useState<Jewelery[]>([]);
  const { addToCart } = useCart() || {
    addToCart: () => {},
    removeFromCart: () => {},
  };
  const handleAddToCart = (product: Jewelery, discountPrice: string) => {
    console.log("added", product);
    const newProduct = { ...product, price: discountPrice };
    addToCart(newProduct);
  };
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => {
        setData(res.data);
      })

      .catch((error) => {
        console.log("error fetching", error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl">Jewellary</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 lg:grid-cols-3 xxl:grid-cols-4">
        {data.length ? (
          data.map((product) => {
            // Calculate discounted price
            const dPrice = (product.price * 0.5).toFixed(2);

            return (
              <div
                key={product.id}
                className="max-w-sm rounded-lg overflow-hidden mx-auto p-8 bg-white border border-orange-400"
              >
                <div className="relative w-full h-56 bg-white p-2 shadow-md rounded-lg">
                  <img
                    className="object-contain w-full h-full mix-blend-multiply"
                    src={product?.image}
                    alt="Product"
                  />
                </div>
                <div className="py-4">
                  <div className="font-bold text-lg mb-2 text-orange-400 uppercase tracking-wide">
                    {product?.category}
                  </div>

                  <p className="line-clamp-1 text-xl font-semibold">
                    {product?.title}
                  </p>
                </div>
                <div className="flex justify-between items-center pt-4 pb-2">
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-orange-500">
                      ${dPrice}
                    </p>
                    <span className="inline-block bg-orange-100 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 ml-2">
                      50%
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 line-through">
                    ${product?.price}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded-lg flex items-center"
                    onClick={() => handleAddToCart(product, dPrice)}
                  >
                    <CiShoppingCart />
                    <span className="ml-2">Add to Cart </span>
                  </button>
                  <button className="text-orange-400 font-bold py-2 px-4 border border-orange-400 rounded-lg hover:bg-orange-400 hover:text-white">
                    Details
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Jewelery;
