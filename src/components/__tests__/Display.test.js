import React from "react";
import ReactDOM from "react-dom";
import Display from "../Display";
import renderer from "react-test-renderer";

/*
TODOS
. If 'dislike' button is clicked, values over 0 change its color to red
*/

const component = <Display />;

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
});
