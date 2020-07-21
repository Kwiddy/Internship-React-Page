import ReactDOM from "react-dom";

jest.mock("react-dom");

require("./index.js");

test("Renders the application", () => {
  expect(ReactDOM.render).toBeCalled();
});
