import { styled } from "styled-components";
import { StyledContainer } from "../common";
import OrderList from "./OrderList";
import OrderSummary from "./OrderSummary";
import { useCart } from "../../context/CartContext";

const StyledOrderContainer = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;

  .order__title {
    padding-bottom: 32px;
    font-size: 32px;
    text-align: center;
  }
`;

const OrderSuccessful = () => {
  const { orderSubTotal, deliverPrice, orderGrandTotal } = useCart();
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
        subTotal={orderSubTotal}
        deliverPrice={deliverPrice}
        grandTotal={orderGrandTotal}
      />
    </StyledContainer>
  );
};

export default OrderSuccessful;
