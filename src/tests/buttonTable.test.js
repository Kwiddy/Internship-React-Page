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

  const btWrapper = new ButtonTable();

  const useStateSpy = jest.spyOn(React, "useState");
  const setState = jest.fn();
  useStateSpy.mockImplementation((init) => [init, setState]);

  it("updateButton should trigger onClick", () => {
    wrapper.find("#updateButton").simulate("click");
    expect(mockFunction).toHaveBeenCalled();
    // expect(mockFunction.mock.calls[0][0]).toBe("Update");
    expect(mockFunction).toHaveBeenCalledWith("Update");

    // const alertComp = ReactTestUtils.renderIntoDocument(<Alert />);
    // expect(ReactTestUtils.isDOMComponent(<Alert />)).toBe(true);

    // Expect a change of state on button click
    expect(setState).toBeTruthy();

    // expect(btWrapper.updateServices("Update")).toBeTruthy();

    // const wrapper2 = shallow(<App />);
    // expect(wrapper2.instance().state.open).toBe(true);
  });
  it("cancelButton should trigger onClick", () => {
    wrapper.find("#cancelButton").simulate("click");
    expect(mockFunction).toHaveBeenCalled();
    // expect(mockFunction.mock.calls[1][0]).toBe("Cancel");
  });
  it("Should render the button table", () => {
    expect(wrapper).toMatchSnapshot();
  });
  // it("Should call updateServices", () => {
  //   const wrapper = new ButtonTable();
  //   expect(wrapper.updateServices("Update")).toBeTruthy();
  // });
  window.alert = jest.fn();
});

// describe("Spy test", () => {
//   // const component = shallow(<App />);
//   // const compSpy = jest.spyOn(component.instance(), "updateServices");
//   // expect(compSpy).toHaveBeenCalledTimes(1);
//   it("clicks it", () => {
//     let app = shallow(<App />);
//     console.warn(app);
//     const spy = jest.spyOn(app.instance(), "updateServices");

//     // instance.forceUpdate();

//     // const p = app.find('.App-intro')
//     // p.simulate('click')
//     // expect(spy).toHaveBeenCalled()
//   });
// });
