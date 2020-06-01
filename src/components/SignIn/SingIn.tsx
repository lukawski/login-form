import React from "react";
import { styled, Paper, Typography } from "@material-ui/core";
import LoginForm from "../LoginForm/LoginForm";

const Wrapper = styled(Paper)({
  width: "40%",
  padding: "15px 30px",
});

function SignIn() {
  return (
    <Wrapper elevation={5}>
      <Typography align="center" variant="h6">
        Sign in to access your data
      </Typography>
      <LoginForm onSubmit={(data) => console.log(data)} />
    </Wrapper>
  );
}

export default SignIn;
