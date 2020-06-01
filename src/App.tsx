import React from "react";
import { styled } from "@material-ui/core";
import LoginForm from "./components/LoginForm/LoginForm";

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
      <LoginForm onSubmit={(data) => console.log(data)} />
    </Wrapper>
  );
}

export default App;
