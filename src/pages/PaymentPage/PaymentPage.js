import { styled } from "styled-components";
import { Box, Button, Stack, TextField } from "@mui/material";
import { StyledContainer } from "../../components/common";
const PaymentPage = () => {
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
          <Button variant="contained">Continue</Button>
        </Stack>
      </StyledContainer>
    </main>
  );
};

const StyledPaymentTitle = styled.div`
  padding: 32px 0px;
  font-size: 54px;
  text-align: center;
`;

export default PaymentPage;
