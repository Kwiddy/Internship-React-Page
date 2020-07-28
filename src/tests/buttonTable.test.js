import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { render, wait } from "@testing-library/react";
import { shallow, configure, mount } from "enzyme";
import renderer from "react-test-renderer";
import Button from "@material-ui/core/Button";
import DetTable from "../components/accountDetails.js";
import IconButton from "@material-ui/core/IconButton";
import sinon, { mock } from "sinon";
import App from "../App";
import * as f from "../App";
import ButtonTable from "../components/buttonTable.js";
import ReactTestUtils from "react-dom/test-utils";
import Alert from "@material-ui/lab/Alert";

//npm install @types/jest
configure({ adapter: new Adapter() });

describe("ButtonTable", () => {
  const mockFunction = jest.fn();
  const wrapper = shallow(<ButtonTable onClickHandler={mockFunction} />);
  const actionName = wrapper.find("#actionName");

  //   console.log(wrapper.debug());

  it("updateButton should trigger onClick", () => {
    const button = wrapper.find("#updateButton");
    button.simulate("click");
    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction.mock.calls[0][0]).toBe("Update");
    // const alertComp = ReactTestUtils.renderIntoDocument(<Alert />);
    // expect(ReactTestUtils.isDOMComponent(<Alert />)).toBe(true);

    // const wrapper2 = shallow(<App />);
    // expect(wrapper2.instance().state.open).toBe(true);
  });
  it("cancelButton should trigger onClick", () => {
    wrapper.find("#cancelButton").simulate("click");
    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction.mock.calls[1][0]).toBe("Cancel");
  });
});
