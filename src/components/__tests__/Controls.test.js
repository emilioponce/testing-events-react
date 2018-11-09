import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Controls from "../Controls";

const component = <Controls handleClick={jest.fn()} />;

describe("Component Controls", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly", () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
