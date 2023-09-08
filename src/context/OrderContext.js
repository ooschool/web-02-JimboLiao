import { createContext, useState, useContext } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const { order, setOrder } = useContext(OrderContext);
  if (order === undefined) {
    throw new Error("useOrder must be used within a OrderProvider");
  }
  const deliverPrice = 40;
  const subTotal = order?.reduce(
    (accumulator, current) => (accumulator += current.price * current.amount),
    0
  );
  const grandTotal = subTotal + deliverPrice;
  return { order, setOrder, deliverPrice, subTotal, grandTotal };
};
