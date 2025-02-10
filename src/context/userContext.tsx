import React from "react";

interface CartContext {
  cartItems: any[];
  addToCart: (item: any) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
}

const userContext = React.createContext<CartContext | undefined>(undefined);

export default userContext;
