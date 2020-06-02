import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  fetchMock.resetMocks();
});

test("let user sign in, then when signed succesfully displays username", async () => {
  fetchMock.mockResponse(JSON.stringify({ username: "Fake Username" }));

  const { getByText, getByTestId } = render(<App />);

  const emailInput = getByTestId("emailInput");
  fireEvent.change(emailInput, { target: { value: "email@email.com" } });

  const passwordInput = getByTestId("passwordInput");
  fireEvent.change(passwordInput, { target: { value: "testpassword" } });

  const signInButton = getByText("Sign In");
  await act(async () => {
    fireEvent.submit(signInButton);
  });

  const userGreetings = getByText("Hello Fake Username");
  expect(userGreetings).toBeInTheDocument();
});
