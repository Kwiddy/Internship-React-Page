import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { render, wait } from "@testing-library/react";
import { shallow, configure, mount } from "enzyme";
import renderer from "react-test-renderer";
import Button from "@material-ui/core/Button";
import DetTable from "../components/accountDetails.js";
import IconButton from "@material-ui/core/IconButton";
import sinon from "sinon";
import IconButton from "@material-ui/core/IconButton";
import App from "../App";
import Alert from "@material-ui/lab/Alert";
import * as f from "../App";

configure({ adapter: new Adapter() });

/*
test("Renders header", () => {
  const { getByText } = render(<App />);
  const h1Element = getByText(/Lorem ipsum/i);
  const h2Element = getByText(/Dolor si amet/i);
  expect(h1Element).toBeInTheDocument();
  expect(h2Element).toBeInTheDocument();
});
*/
describe("Renders button-table buttons", () => {
  it("should be defined", () => {
    expect(Button).toBeDefined();
  });
  it("should render cancelButton", () => {
    const mockFunction = jest.fn();
    const tree = shallow(<Button id="cancelButton" />);
    expect(tree).toMatchSnapshot();
  });
  it("should render updateButton correctly", () => {
    const tree = shallow(<Button id="updateButton" />);
    expect(tree).toMatchSnapshot();
  });
});

describe("App", () => {
  it("renders correctly", () => {
    const rendered = renderer.create(<App />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

// describe("Alert", () => {
//   const mockFunction = jest.fn();
//   const wrapper = mount(<Alert onClick={mockFunction} />);
//   it("Close icon should", () => {
//     const button = wrapper.find("#action-alert");
//     button.simulate("click");
//     expect(mockFunction).toHaveBeenCalled();
//   });
// });
