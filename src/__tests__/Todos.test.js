import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { configure, shallow, mount, render } from "enzyme";
import Todos from "../components/Todos";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Todos", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Todos />);
  });

  it("updates the state (state.currentTodo) on input change", () => {
    wrapper
      .find("input")
      .simulate("change", { target: { value: "eat pizza" } });
    expect(wrapper.state("currentTodo")).toEqual("eat pizza");
  });

  it("successfully adds a todo", () => {
    const input = wrapper.find("input").first();
    input.simulate("change", { target: { value: "foo" } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // console.log(wrapper.state());

    expect(wrapper.state("todos")).toHaveLength(1);
  });
});
