import React from "react";
import sinon from "sinon";
import renderer from "react-test-renderer";
import ServiceTable from "../components/accountServices.js";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";

describe("accountServices", () => {
  it("should construct properly", () => {
    const wrapper = shallow(<ServiceTable />);
    expect(wrapper.exists()).toBeTruthy();
  });
});

it("should change state", () => {
  const wrapper = mount(<ServiceTable />);
  const listItems = [...wrapper.find(".commonCheckbox")];
  const mockFunction = jest.fn();

  for (const item in listItems) {
    // console.log(item);
    // console.log(listItems[item].props.isChecked);
    // console.log("-------------------------------");
    // console.log(listItems[item]);
    expect(listItems[item].props.isChecked).toBe(false); //TEMPORARY
    wrapper.find("#checkedall").simulate("click");
    // console.log(listItems[item].props.isChecked);
    expect(mockFunction).toHaveBeenCalled();
    // expect(listItems[item].props.isChecked).toBe(true);
  }
});

// describe("Test main checkbox component", () => {
//   it("Test click event", () => {
//     const mockCallBack = jest.fn();
//     const wrap = mount(<ServiceTable />);
//     const handleChangeSpy = sinon.spy(wrap.instance(), "handleAllChecked");

//     const checkBox = mount(<input id="checkedall" />);
//     checkBox.simulate("change", { target: { services: "hi" } });
//     expect(handleChangeSpy.calledOnce).toEqual(true);
//   });
// });

// it("responds to state change", (done) => {
//   const event = { target: { services: "hi" } };
//   const wrap = mount(<ServiceTable />);
//   const handleChangeSpy = sinon.spy(wrap.instance(), "handleAllChecked");
//   wrap.update(); // Force re-render
//   wrap.ref("checkedall").simulate("change", event);
//   expect(handleChangeSpy.calledOnce).to.equal(true);
// });
