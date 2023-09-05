import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const { cart, setCart } = useContext(CartContext);
  if (cart === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  const deliverPrice = 40;
  const subTotal = cart?.reduce(
    (accumulator, current) => (accumulator += current.price * current.amount),
    0
  );
  const grandTotal = subTotal + deliverPrice;

  return { cart, setCart, deliverPrice, subTotal, grandTotal };
};
