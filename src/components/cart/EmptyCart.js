import { styled } from "styled-components";
import { StyledLink } from "../common";
import { Button } from "@mui/material";
const EmptyCart = () => {
  return (
    <>
      <StyledEmptyCart>Your cart is empty.</StyledEmptyCart>
      <Button variant="contained" component={StyledLink} to="/products">
        Go to market
      </Button>
    </>
  );
};

const StyledEmptyCart = styled.div`
  font-size: 1.5em;
  text-align: center;
  padding: 2em;
`;

export default EmptyCart;
