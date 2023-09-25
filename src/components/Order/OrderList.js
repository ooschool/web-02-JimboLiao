import { useCart } from "../../context/CartContext";
import OrderItem from "./OrderItem";

const OrderList = () => {
  const { cart } = useCart();
  return (
    <div>
      {cart.map((item) => {
        if (item.isPaid) {
          return <OrderItem item={item} key={item.id} />;
        } else return;
      })}
    </div>
  );
};
export default OrderList;
