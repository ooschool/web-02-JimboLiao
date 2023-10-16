import { styled } from "styled-components";
import { Box, Button, Stack, TextField } from "@mui/material";
import { StyledContainer, StyledLink } from "../../components/common";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const StyledPaymentTitle = styled.div`
  padding: 32px 0px;
  font-size: 54px;
  text-align: center;
`;

const PaymentPage = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleOrder = () => {
    const newCart = cart.map((item) => {
      item.isPaid = true;
      return item;
    });
    setCart(newCart);
  };
  return (
    <main>
      <StyledContainer>
        <StyledPaymentTitle>Delivery</StyledPaymentTitle>
        <Box component="form">
          <Stack
            direction="column"
            alignContent="center"
            spacing={1}
            width="50%"
            margin="0 auto"
          >
            <TextField required id="receiver" label="Receiver" />
            <TextField required id="address" label="Address" />
            <TextField required id="postalCode" label="Postal Code" />
          </Stack>
        </Box>
        <StyledPaymentTitle>Payment</StyledPaymentTitle>
        <Box component="form">
          <Stack
            direction="column"
            alignContent="center"
            spacing={1}
            width="50%"
            margin="0 auto 12px auto"
          >
            <TextField required id="name" label="Name" />
            <TextField required id="cardNumber" label="Card Number" />
            <TextField required id="expiration" label="Expiration" />
            <TextField
              required
              id="securityCode"
              label="Security Code"
              type="password"
            />
          </Stack>
        </Box>
        <Stack
          direction="row"
          justifyContent="flex-end"
          width="50%"
          margin="0 auto 12px auto"
        >
          <Button
            variant="contained"
            component={StyledLink}
            onClick={handleOrder}
            to="/order"
          >
            Continue
          </Button>
        </Stack>
      </StyledContainer>
    </main>
  );
};

export default PaymentPage;
