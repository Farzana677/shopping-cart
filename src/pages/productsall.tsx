import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "../context/userContentProvider"; // Import the useCart hook
import { Button, Dialog, Heading, Modal } from "react-aria-components";

interface Product {
  title: string;
  category: string;
  id: number;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductsAllProps {
  selectedCategories: string[];
  searchQuery: string; // Add search query prop
}

const ProductsAll: React.FC<ProductsAllProps> = ({
  selectedCategories,
  searchQuery,
}) => {
  const { addToCart } = useCart() || {
    addToCart: () => {},
    removeFromCart: () => {},
  }; // Get the addToCart function from context
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Track which product's details are being displayed
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on selected categories
  const filteredProducts = products.filter((product) => {
    if (selectedCategories.length === 0) return true;

    const categoryMapping: { [key: string]: string } = {
      electronics: "electronics",
      jewelery: "jewelry",
      "men's clothing": "men's clothing",
      "women's clothing": "women's clothing",
    };

    const mappedCategory = categoryMapping[product.category.toLowerCase()];
    return selectedCategories.includes(mappedCategory);
  });

  const searchedProducts = filteredProducts.filter((product) => {
    return product.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading products...</div>
      </div>
    );
  }

  // Handle adding product to the cart
  const handleAddToCart = (product: Product) => {
    const discountedPrice = (product.price * 0.5).toFixed(2);
    const newProduct = { ...product, price: discountedPrice };
    addToCart(newProduct); // Add the product to the cart with discounted price
  };

  if (searchedProducts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600 ">
        No items found
      </div>
    );
  }

  const modalStyles = {
    overlay:
      "fixed inset-0  bg-opacity-50 flex items-center justify-center z-50",
    content: "bg-white p-8 rounded-xl shadow-lg max-w-md w-full mx-4 relative",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {searchedProducts.map((product) => {
          const discountedPrice = (product.price * 0.5).toFixed(2);

          return (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square p-6 bg-white flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain w-full h-full mix-blend-multiply"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <span className="text-sm font-medium text-[#d77a7a] uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {product.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#d77a7a]">
                      ${discountedPrice}
                    </span>
                    <span className="px-2 py-1 text-sm font-semibold text-[#d77a7a] bg-orange-100 rounded-full">
                      50% OFF
                    </span>
                  </div>
                  <span className="text-lg text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#d77a7a] hover:bg-orange-600 text-white font-semibold  px-4 rounded-lg transition-colors duration-200"
                  >
                    <CiShoppingCart className="text-xl" />
                    <span>Add to Cart</span>
                  </button>

                  <Button
                    className="flex-1 flex items-center justify-center gap-2 bg-[#d77a7a] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                    onPress={() => setSelectedProduct(product)}
                  >
                    Details
                  </Button>

                  <Modal
                    className={modalStyles.overlay}
                    isOpen={!!selectedProduct}
                    isDismissable
                    onOpenChange={() => setSelectedProduct(null)}
                  >
                    <div
                      onClick={() => setSelectedProduct(null)}
                      className="absolute inset-0"
                    ></div>
                    <div onClick={(e) => e.stopPropagation()}>
                      <Dialog className={modalStyles.content}>
                        <Heading
                          slot="title"
                          className="text-xl font-bold mb-4"
                        >
                          Details
                        </Heading>
                        {selectedProduct && (
                          <>
                            <div className="aspect-square p-6 bg-white flex items-center justify-center">
                              <img
                                src={selectedProduct.image}
                                alt={selectedProduct.title}
                                className="object-contain w-full h-full mix-blend-multiply"
                              />
                            </div>

                            <p className="font-bold text-xl">
                              {selectedProduct.category}
                            </p>
                            <p className="text-lg font-semibold text-wrap ">
                              {selectedProduct.title}
                            </p>
                            <button
                              onClick={() => handleAddToCart(selectedProduct)}
                              className="flex-1 flex items-center justify-center gap-2 bg-[#d77a7a]  text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 my-2"
                            >
                              <CiShoppingCart className="text-xl" />
                              <span>Add to Cart</span>
                            </button>
                          </>
                        )}
                      </Dialog>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsAll;
