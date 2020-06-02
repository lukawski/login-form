import React from "react";
import { styled, Paper, Typography } from "@material-ui/core";
import LoginForm from "../LoginForm/LoginForm";
import signIn from "../../api/signIn";
import { UserLoginData, onSignInSucces, onSignInError } from "../../types";

const Wrapper = styled(Paper)({
  width: "40%",
  padding: "15px 30px",
});

type SingInProps = {
  onSignInSuccess: onSignInSucces;
  onSignInError: onSignInError;
};

function SignIn({ onSignInSuccess, onSignInError }: SingInProps) {
  const onSubmit = async (credentials: UserLoginData) => {
    const [err, data] = await signIn(credentials);

    if (err !== null) {
      onSignInError(err);
      return;
    }

    onSignInSuccess(data?.username);
  };

  return (
    <Wrapper elevation={5}>
      <Typography align="center" variant="h6">
        Sign in to access your data
      </Typography>
      <LoginForm onSubmit={onSubmit} />
    </Wrapper>
  );
}

export default SignIn;
