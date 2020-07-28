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

//npm install @types/jest
configure({ adapter: new Adapter() });

describe("ButtonTable", () => {
  it("should trigger onClick", () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<ButtonTable onClickHandler={mockFunction} />);
    wrapper.find("#updateButton").simulate("click");
    expect(mockFunction).toHaveBeenCalled();
<<<<<<< HEAD
    expect(mockFunction.mock.calls[0][0]).toBe("Update");
    // const alertComp = ReactTestUtils.renderIntoDocument(<Alert />);
    // expect(ReactTestUtils.isDOMComponent(<Alert />)).toBe(true);

    // const wrapper2 = shallow(<App />);
    // expect(wrapper2.instance().state.open).toBe(true);
  });
  it("cancelButton should trigger onClick", () => {
=======
>>>>>>> parent of 5844afd... add comments for further tests
    wrapper.find("#cancelButton").simulate("click");
    expect(mockFunction).toHaveBeenCalled();
  });
});
