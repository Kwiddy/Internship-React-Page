import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { render } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Button from "@material-ui/core/Button";
import App from "./App";

configure({ adapter: new Adapter() });

test("Renders header", () => {
  const { getByText } = render(<App />);
  const h1Element = getByText(/Lorem ipsum/i);
  const h2Element = getByText(/Dolor si amet/i);
  expect(h1Element).toBeInTheDocument();
  expect(h2Element).toBeInTheDocument();
});

describe("Renders button-table buttons", () => {
  it("should be defined", () => {
    expect(Button).toBeDefined();
  });
  it("should render cancelButton correctly", () => {
    const tree = shallow(<Button id="cancelButton" />);
    expect(tree).toMatchSnapshot();
  });
  it("should render updateButton correctly", () => {
    const tree = shallow(<Button id="updateButton" />);
    expect(tree).toMatchSnapshot();
  });
});
