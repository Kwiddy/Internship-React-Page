import React from "react";
import DetTable from "./accountDetails.js";
import Adapter from "enzyme-adapter-react-16";
import accountInfo from "./ExampleData/accountInfo.json";
import { shallow, configure, mount } from "enzyme";

configure({ adapter: new Adapter() });

describe("accountDetails", () => {
  it("should construct properly", () => {
    const wrapper = shallow(<DetTable />);
    expect(wrapper.exists()).toBeTruthy();
    //expect(wrapper.props().details).toEqual({ accountInfo }); //might need to be "toBe"?
  });
});
