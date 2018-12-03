import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Controls from "../Controls";

const fn = jest.fn();
const wrapper = shallow(<Controls handleClick={fn} />);
const event = { target: { id: "like" } };

describe("Component Controls", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Controls handleClick={fn} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Controls handleClick={fn} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("button is clicked", () => {
    wrapper.find("ButtonGroup").simulate("click", event);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(event);
  });

  /* Diferenciar entre botones like y dislike tendría sentido 
  si usáramos <buttons> de html y no de ANTD, ya que tendrían un onClick cada uno de ellos */
  it.skip("like button is clicked", () => {
    const dislikeButton = wrapper.find("Button").first();

    // 2 opciones que habría que probar para simular click
    dislikeButton.props().onClick(event);
    dislikeButton.simulate("click", event);

    expect(fn).toHaveBeenCalledWith(event);
  });
});
