import { styled } from "styled-components";
import { StyledContainer, StyledLink } from "../../components/common";
import { Box, Button, Stack, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const StyledLoginBlock = styled.div`
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
const StyledFormContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const LoginPage = () => {
  const formBoxStyle = { display: "flex", flexDirection: "column" };
  //@todo onClicks
  const handleLogin = (event) => {
    console.log(event.target);
  };
  const handleForgot = (event) => {
    console.log(event.target);
  };
  const handleGoogleLogin = (event) => {
    console.log(event.target);
  };
  const handleSignUp = (event) => {
    console.log(event.target);
  };

  return (
    <main>
      <StyledContainer>
        <StyledLoginBlock>
          <h2>Login</h2>
          <StyledFormContainer>
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
                  <Button variant="outlined" onClick={handleForgot}>
                    Forgot
                  </Button>
                  <Button variant="contained" onClick={handleLogin}>
                    Login
                  </Button>
                </Stack>
                <Stack spacing={1}>
                  <Button
                    variant="contained"
                    startIcon={<GoogleIcon />}
                    onClick={handleGoogleLogin}
                  >
                    Login with Google
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleSignUp}
                    component={StyledLink}
                    to="/signup"
                  >
                    Sign up
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </StyledFormContainer>
        </StyledLoginBlock>
      </StyledContainer>
    </main>
  );
};

export default LoginPage;
