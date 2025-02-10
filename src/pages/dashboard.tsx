import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-aria-components";
import { Link } from "react-router";
interface productsData {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
}
function Dashboard() {
  const [products, setProducts] = useState<productsData[]>([]);

  const deleteProduct = (id: any) => {
    console.log("deleting product with id:", id);
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("Deleted product:", json);
        setProducts((prev) => prev.filter((product) => product.id !== id));
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?sort=desc")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
      {products ? (
        products.map((product: any) => (
          <div
            key={product.id}
            className="max-w-sm rounded- overflow-hidden  mx-auto p-8 bg-white border border-orange-400 "
          >
            <div className="relative w-full h-56 bg-white p-2 shadow-md rounded-lg">
              <img
                className="object-contain w-full h-full  mix-blend-multiply"
                src={product?.image}
                alt="Product"
              />
            </div>

            <div className="py-4">
              <div className="font-bold text-lg mb-2 text-orange-400 uppercase tracking-wide">
                {product?.category}
              </div>
              <p className="text-gray-700 text-base">{product?.price}</p>
            </div>
            <div className="pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {product?.price}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                50%
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                $109.95
              </span>
            </div>
            <div className="flex gap-4">
              <button className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-4   rounded-lg">
                Add to Cart
              </button>
              {/* Wrap only the "Details" button with Link */}
              <Link
                to={`/product/${product.id}`}
                className="text-orange-400 font-bold py-2 px-4 border border-orange-400 rounded-lg hover:bg-orange-400 hover:text-white"
              >
                Details
              </Link>
              <Button
                className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-4   rounded-lg"
                onPress={(e) => {
                  deleteProduct(product.id);
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white">Loading product data...</p>
      )}
    </div>
  );
}
export default Dashboard;
