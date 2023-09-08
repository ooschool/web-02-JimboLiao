import { OrderFailed, OrderSuccessful } from "../../components/Order";

const OrderPage = () => {
  const isFailed = false;
  if (isFailed) {
    return (
      <main>
        <OrderFailed />
      </main>
    );
  } else {
    return (
      <main>
        <OrderSuccessful />
      </main>
    );
  }
};

export default OrderPage;
