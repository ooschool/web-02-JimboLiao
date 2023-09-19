import { styled } from "styled-components";

const OrderSummary = ({ subTotal, deliverPrice, grandTotal }) => {
  return (
    <OrderSummaryContainer>
      <div>
        <p>Subtotal : NT$ {subTotal}</p>
        <p>Delivery : NT$ {deliverPrice}</p>
        <p className="grandTotal">Grand Total : NT$ {grandTotal}</p>
      </div>
    </OrderSummaryContainer>
  );
};

const OrderSummaryContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  padding-right: 10px;
  margin-bottom: 16px;
  font-size: 20px;
  color: #3072ff;

  .grandTotal {
    font-size: 24px;
    padding-top: 10px;
  }
`;
export default OrderSummary;
