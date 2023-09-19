import { styled } from "styled-components";
import { StyledContainer } from "../../components/common";
import { Box, Button, Stack, TextField } from "@mui/material";

const StyledSignupBlock = styled.div`
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
  margin: 0 auto 64px auto;
`;

const SignupPage = () => {
  const formBoxStyle = { display: "flex", flexDirection: "column" };
  //@todo onclick
  const onSignupClick = (event) => {
    console.log(event.target);
  };
  return (
    <main>
      <StyledContainer>
        <StyledSignupBlock>
          <h2>Sign up</h2>
          <StyledFormContainer>
            <Box component="form" sx={formBoxStyle}>
              <TextField
                required
                id="username"
                label="username"
                sx={{ paddingBottom: 1 }}
              />
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
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-start"
              spacing={2}
            >
              <Button variant="contained" onClick={onSignupClick}>
                Sign Up
              </Button>
            </Stack>
          </StyledFormContainer>
        </StyledSignupBlock>
      </StyledContainer>
    </main>
  );
};

export default SignupPage;
