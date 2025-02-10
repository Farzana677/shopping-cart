import { ReactNode, useState, useContext } from "react";
import UserContext from "./userContext";

interface CartContextProviderProps {
  children: ReactNode;
}

const UserContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  // const addToCart = (item: any) => {
  //   setCartItems((prevItems) => [...prevItems, item]);
  // };

  const addToCart = (item: any) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <UserContext.Provider
      value={{ addToCart, removeFromCart, clearCart, cartItems }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useCart = () => useContext(UserContext);

export default UserContextProvider;
