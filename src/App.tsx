import React, { useState } from "react";
import { styled, Typography } from "@material-ui/core";
import SignIn from "./components/SignIn/SingIn";
import {
  onSignInSucces as onSignInSuccesSignature,
  onSignInError as onSignInErrorSignature,
} from "./types";

const Wrapper = styled("div")({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

function App() {
  const [username, setUsername] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const onSignInSucces: onSignInSuccesSignature = (username) =>
    setUsername(username);
  const onSignInError: onSignInErrorSignature = ({ message }) =>
    setErrorMessage(message);

  return (
    <Wrapper>
      {!(username || errorMessage) && (
        <SignIn
          onSignInSuccess={onSignInSucces}
          onSignInError={onSignInError}
        />
      )}
      {username && <Typography variant="h6">Hello {username}</Typography>}
      {errorMessage && (
        <Typography variant="h6" color="error">
          {errorMessage}
        </Typography>
      )}
    </Wrapper>
  );
}

export default App;
