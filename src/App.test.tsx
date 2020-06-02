import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import App from "./App";

let mathCopy = Object.create(global.Math);
beforeAll(() => {
  global.Math.random = () => 0.4;
});

beforeEach(() => {
  fetchMock.resetMocks();
});

test("lets user sign in, then when signed succesfully displays username", async () => {
  fetchMock.mockResponse(JSON.stringify({ username: "Fake Username" }));

  const { getByText, getByTestId, queryByTestId } = render(<App />);

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

  const form = queryByTestId("signInForm");
  expect(form).not.toBeInTheDocument();
});

test("lets user sign in and when error occurs displays error", async () => {
  fetchMock.mockReject();

  const { getByText, getByTestId, queryByTestId } = render(<App />);

  const emailInput = getByTestId("emailInput");
  fireEvent.change(emailInput, { target: { value: "email@email.com" } });

  const passwordInput = getByTestId("passwordInput");
  fireEvent.change(passwordInput, { target: { value: "testpassword" } });

  const signInButton = getByText("Sign In");
  await act(async () => {
    fireEvent.submit(signInButton);
  });

  const userGreetings = getByText(
    "The email/password combination used was not found on the system."
  );
  expect(userGreetings).toBeInTheDocument();

  const form = queryByTestId("signInForm");
  expect(form).not.toBeInTheDocument();
});

afterAll(() => {
  global.Math = mathCopy;
});
