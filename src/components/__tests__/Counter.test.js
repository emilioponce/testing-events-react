import React from "react";
import ReactDOM from "react-dom";
import Counter from "../Counter";
import renderer from "react-test-renderer";

const component = <Counter />;

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

  it("If 'like' button is clicked, display value increments in one", () => {
    //TODO
  });

  it("If 'dislike' button is clicked, display value decrements in one", () => {
    //TODO
  });
});
