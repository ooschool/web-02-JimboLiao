import { styled } from "styled-components";
import { StyledContainer } from "../../components/common";
import { Box, Button, Stack, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const LoginPage = () => {
  const formBoxStyle = { display: "flex", flexDirection: "column" };
  //@todo onClicks
  const onLoginClick = (event) => {
    console.log(event.target);
  };
  const onForgotClick = (event) => {
    console.log(event.target);
  };
  const onGoogleLoginClick = (event) => {
    console.log(event.target);
  };
  const onSignupClick = (event) => {
    console.log(event.target);
  };
  return (
    <main>
      <StyledContainer>
        <StyledLoginDialog>
          <h2>Login</h2>
          <StyledFromContainer>
            <Box component="form" sx={formBoxStyle}>
              <TextField
                required
                id="email"
                label="E-mail"
                type="email"
                sx={{ paddingBottom: 1 }}
              />
              <TextField
                required
                id="password"
                label="Password"
                type="password"
                sx={{ paddingBottom: 1 }}
              />
            </Box>
            <Box sx={{ paddingBottom: 8 }}>
              <Stack spacing={2}>
                <Stack
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Button variant="outlined" onClick={onForgotClick}>
                    Forgot
                  </Button>
                  <Button variant="contained" onClick={onLoginClick}>
                    Login
                  </Button>
                </Stack>
                <Stack spacing={1}>
                  <Button
                    variant="contained"
                    startIcon={<GoogleIcon />}
                    onClick={onGoogleLoginClick}
                  >
                    Login with Google
                  </Button>
                  <Button variant="outlined" onClick={onSignupClick}>
                    Sign up
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </StyledFromContainer>
        </StyledLoginDialog>
      </StyledContainer>
    </main>
  );
};

const StyledLoginDialog = styled.div`
  margin: 64px 128px;
  border: solid 2px #3072ff;
  border-radius: 20px;

  h2 {
    padding: 32px 0px;
    font-size: 54px;
    text-align: center;
    color: #3072ff;
  }
`;
const StyledFromContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`;
export default LoginPage;
