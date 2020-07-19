import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders header", () => {
  const { getByText } = render(<App />);
  const h1Element = getByText(/Lorem ipsum/i);
  const h2Element = getByText(/Dolor si amet/i);
  expect(h1Element).toBeInTheDocument();
  expect(h2Element).toBeInTheDocument();
});
