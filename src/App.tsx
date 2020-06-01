import React from "react";
import { styled } from "@material-ui/core";
import SignIn from "./components/SignIn/SingIn";

const Wrapper = styled("div")({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

function App() {
  return (
    <Wrapper>
      <SignIn />
    </Wrapper>
  );
}

export default App;
