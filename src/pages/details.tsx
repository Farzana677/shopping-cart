import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface ProductsData {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const Details = () => {
  let params = useParams();
  console.log(params);
  const [product, setProduct] = useState<ProductsData | null>(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + params.id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [params.id]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto py-4">
      <img className="w-full" src={product?.image} alt="not found" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product?.category}</div>
        <p className="text-gray-700 text-base">{product?.description} </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product?.rating.rate}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product?.rating.count}
        </span>
      </div>
    </div>
  );
};
