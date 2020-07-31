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

describe("ButtonTable", () => {
  let newElement = document.createElement("p");
  newElement.id = "actionName";

  const mockFunction = jest.fn();
  const wrapper = shallow(
    <ButtonTable setOpen={mockFunction} setAlertMsg={mockFunction} />
  );

  const useStateSpy = jest.spyOn(React, "useState");
  const setState = jest.fn();
  useStateSpy.mockImplementation((init) => [init, setState]);

  it("updateButton should trigger onClick", () => {
    wrapper.find("#updateButton").simulate("click");
    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledWith("Update");

    // const alertComp = ReactTestUtils.renderIntoDocument(<Alert />);
    // expect(ReactTestUtils.isDOMComponent(<Alert />)).toBe(true);

    // Expect a change of state on button click
    expect(setState).toBeTruthy();

    // const wrapper2 = shallow(<App />);
    // expect(wrapper2.instance().state.open).toBe(true);
  });
  it("cancelButton should trigger onClick", () => {
    wrapper.find("#cancelButton").simulate("click");
    expect(mockFunction).toHaveBeenCalled();
  });
  it("Should render the button table", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Only Update should call updateServices", () => {
    const wrapper = shallow(
      <ButtonTable setOpen={mockFunction} setAlertMsg={mockFunction} />
    );
    const instance = wrapper.instance();
    expect(instance.updateServices("Update")).toBeTruthy;
    expect(instance.updateServices("Cancel")).tobeFalsey;
  });
  window.alert = jest.fn();
});
