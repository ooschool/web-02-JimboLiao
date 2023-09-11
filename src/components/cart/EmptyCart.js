import { styled } from "styled-components";
import { StyledLink } from "../common";
const EmptyCart = () => {
  return (
    <>
      <StyledEmptyCart>Your cart is empty.</StyledEmptyCart>
      <StyledLink $primary to="/products">
        Go to market
      </StyledLink>
    </>
  );
};

const StyledEmptyCart = styled.div`
  font-size: 1.5em;
  text-align: center;
  padding: 2em;
`;

export default EmptyCart;
