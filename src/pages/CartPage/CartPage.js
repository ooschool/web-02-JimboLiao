import { styled } from "styled-components";
import { StyledContainer } from "../../components/common";
import { useCart } from "../../context/CartContext";
import { CartItem, EmptyCart } from "../../components/cart";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <main>
      <StyledCart>
        <StyledContainer>
          <div className="cart__title">
            <h2>My Shopping Cart</h2>
          </div>
          {cart.length === 0 ? (
            <EmptyCart></EmptyCart>
          ) : (
            cart.map((item, index) => (
              <CartItem key={index} item={item}></CartItem>
            ))
          )}
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
