import { styled } from "styled-components";
import { StyledContainer } from "../common";
import OrderList from "./OrderList";
import OrderSummary from "./OrderSummary";
import { useOrder } from "../../context/OrderContext";

const OrderSuccessful = () => {
  const { subTotal, deliverPrice, grandTotal } = useOrder();
  return (
    <StyledContainer>
      <StyledOrderContainer>
        <div className="order__title">
          <h2>Thank You!</h2>
          <p>Your order has been successful.</p>
        </div>
      </StyledOrderContainer>
      <OrderList />
      <OrderSummary
        subTotal={subTotal}
        deliverPrice={deliverPrice}
        grandTotal={grandTotal}
      />
    </StyledContainer>
  );
};

const StyledOrderContainer = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;

  .order__title {
    padding-bottom: 32px;
    font-size: 32px;
    text-align: center;
  }
`;
export default OrderSuccessful;
