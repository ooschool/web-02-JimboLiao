import { styled } from "styled-components";
import { StyledContainer, StyledLink } from "../../components/common";
import { useCart } from "../../context/CartContext";
import { CartItem, CartSummary, EmptyCart } from "../../components/cart";
import { Button, Stack } from "@mui/material";

const StyledCart = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;

  .cart__title {
    padding-bottom: 32px;
    font-size: 32px;
    text-align: center;
  }
`;

const CartPage = () => {
  const { cart, deliverPrice, subTotal, grandTotal } = useCart();
  //@todo onclick
  const handleCheckOut = (event) => {
    console.log(event.target);
  };
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
            {cart.map((item) => (
              <CartItem key={item.id} item={item}></CartItem>
            ))}
            <CartSummary
              subTotal={subTotal}
              deliverPrice={deliverPrice}
              grandTotal={grandTotal}
            ></CartSummary>
            <Stack direction="row" justifyContent="flex-end">
              <Button
                component={StyledLink}
                to="/payment"
                variant="contained"
                onClick={handleCheckOut}
              >
                Check Out
              </Button>
            </Stack>
          </StyledContainer>
        </StyledCart>
      </main>
    );
};

export default CartPage;
