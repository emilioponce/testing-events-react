import React from "react";
import ReactDOM from "react-dom";
import Display from "../Display";
import renderer from "react-test-renderer";

const component = <Display value="1" />;

describe("Component Display", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("snapshot renders correctly", () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Values below 0 change its color", () => {
    const testRenderer = renderer.create(<Display value="-1" />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({ className: "Negative" })).toBeDefined();
  });
});
