import { styled } from "styled-components";
import { StyledContainer } from "../../components/common";
import { useCart } from "../../context/CartContext";
import { CartItem, CartSummary, EmptyCart } from "../../components/cart";

const CartPage = () => {
  const { cart } = useCart();
  const deliverPrice = 40;
  const subtotal = cart?.reduce(
    (accumulator, current) => (accumulator += current.price * current.amount),
    0
  );
  const grandTotal = subtotal + deliverPrice;
  // empty cart
  if (cart.length === 0)
    return (
      <StyledContainer>
        <EmptyCart></EmptyCart>
      </StyledContainer>
    );
  // display cart items
  else
    return (
      <main>
        <StyledCart>
          <StyledContainer>
            <div className="cart__title">
              <h2>My Shopping Cart</h2>
            </div>
            {cart.map((item, index) => (
              <CartItem key={index} item={item}></CartItem>
            ))}
            <CartSummary
              subtotal={subtotal}
              deliverPrice={deliverPrice}
              grandTotal={grandTotal}
            ></CartSummary>
          </StyledContainer>
        </StyledCart>
      </main>
    );
};

const StyledCart = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;

  .cart__title {
    padding-bottom: 32px;
    font-size: 32px;
    text-align: center;
  }
`;

export default CartPage;
