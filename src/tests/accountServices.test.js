import React from "react";
import ServiceTable from "../components/accountServices.js";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";

configure({ adapter: new Adapter() });

describe("accountServices", () => {
  it("should construct properly", () => {
    const wrapper = shallow(<ServiceTable />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
