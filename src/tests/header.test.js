import renderer from "react-test-renderer";
import React from "react";
import Header from "../components/header.js";

describe("Header component", () => {
  it("renders correctly", () => {
    const headText = { mainText: "Your account", subText: "Linked services" };
    const rendered = renderer.create(<Header headText={headText} />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
