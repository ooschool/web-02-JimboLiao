import { styled } from "styled-components";

const CartSummary = ({ subtotal, deliverPrice, grandTotal }) => {
  return (
    <CartSummaryContainer>
      <div>
        <p>Subtotal : NT$ {subtotal}</p>
        <p>Delivery : NT$ {deliverPrice}</p>
        <p className="grandTotal">Grand Total : NT$ {grandTotal}</p>
      </div>
    </CartSummaryContainer>
  );
};

const CartSummaryContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  padding-right: 10px;
  font-size: 20px;
  color: #3072ff;

  .grandTotal {
    font-size: 24px;
    padding-top: 10px;
  }
`;
export default CartSummary;
