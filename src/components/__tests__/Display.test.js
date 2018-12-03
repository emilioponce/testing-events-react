import React from "react";
import ReactDOM from "react-dom";
import Display from "../Display";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("Component Display", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Display value="1" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("snapshot renders correctly", () => {
    const tree = renderer.create(<Display value="1" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // VERSION 1: ejemplo con renderer (no hace shallow)
  it("Values below 0 change its color", () => {
    const testRenderer = renderer.create(<Display value="-1" />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({ className: "Negative" })).toBeDefined();
  });
  // VERSION 2: ejemplo con enzyme (hace shallow)
  it("Enzyme: Values below 0 change its color", () => {
    const wrapper = shallow(<Display value="-1" />);
    const valueDiv = wrapper.find(".Negative");
    expect(valueDiv).toBeDefined();
  });

  it("Values above 0 maintain initial color", () => {
    const wrapper = shallow(<Display value="23" />);
    const valueDiv = wrapper.find(".Positive");
    expect(valueDiv).toBeDefined();
  });
});
