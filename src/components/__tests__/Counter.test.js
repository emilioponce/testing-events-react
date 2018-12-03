import React from "react";
import ReactDOM from "react-dom";
import Counter from "../Counter";
import { shallow } from "enzyme";

describe("Component Display", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Counter />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("snapshot renders correctly", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });

  it("display value increments in one when 'like' button is clicked", () => {
    const wrapper = shallow(<Counter />);
    const Controls = wrapper.find("Controls");
    const handleClick = Controls.props().handleClick;
    const event = { target: { id: "like" } };

    // simulamos acción con evento -> click en botón like
    handleClick(event);

    // Opción 1 (snapshot)
    // Compruebas que ese cambio de estado implica cambios en contenido de snapshot
    // como hacemos shallow, sólo vemos que <Display value={1} />
    expect(wrapper).toMatchSnapshot();

    // Opción 2 (comprobar prop de componente hijo)
    // problema: y si hay más de un componente hijo de ese tipo? los probamos todos?
    // ventaja: mucho más explícito lo que se prueba
    const Display = wrapper.find("Display");
    expect(Display.props().value).toBe(1);

    //Opción 3 (comprobar estado interno del componente directamente)
    // problema: y si ese estado ya no se utiliza????
    expect(wrapper.state().value).toBe(1);
  });

  it("initial rendered value is = 0", () => {
    const wrapper = shallow(<Counter />);
    const display = wrapper.find("Display");
    const initValue = 0;
    expect(display.props().value).toBe(initValue);
  });
});
