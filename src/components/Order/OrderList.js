import { useOrder } from "../../context/OrderContext";
import OrderItem from "./OrderItem";

const OrderList = () => {
  const { order } = useOrder();
  return (
    <div>
      {order.map((item) => (
        <OrderItem item={item} key={item.id} />
      ))}
    </div>
  );
};
export default OrderList;
