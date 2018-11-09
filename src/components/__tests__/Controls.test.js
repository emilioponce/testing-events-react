import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Controls from "../Controls";

/*
TODOS
. If 'like' button is clicked, counter value increments in one
. If 'dislike' button is clicked, counter value decrements in one
*/

const component = <Controls />;

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

  it.skip("If 'like' button is clicked, counter value increments in one", () => {
    const mockLogout = jest.fn();
    const wrapper = shallow(component);
    wrapper
      .find("like")
      .at(0)
      .simulate("click");
    expect(mockLogout).toHaveBeenCalled();
  });
});
