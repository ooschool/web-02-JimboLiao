import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import OrderItem from "./OrderItem";

const OrderList = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart.map((item) => {
        if (item.isPaid) {
          return <OrderItem item={item} key={item.id} />;
        } else return <></>;
      })}
    </div>
  );
};
export default OrderList;
