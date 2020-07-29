import React from "react";
import { shallow, configure, mount } from "enzyme";
import App from "../App";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import AlertContent from "../components/alertContent.js";

describe("AlertContent", () => {
  const mockFunction = jest.fn();
  const wrapper = shallow(<AlertContent setOpen={mockFunction} />);

  const useStateSpy = jest.spyOn(React, "useState");
  const setState = jest.fn();
  useStateSpy.mockImplementation((init) => [init, setState]);

  it("IconButton close changes open state", () => {
    wrapper.find("#action-alert").simulate("click");
    expect(mockFunction).toHaveBeenCalled();

    expect(setState).toBeTruthy();
  });
});
