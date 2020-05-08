import React from "react";
import { shallow } from "enzyme";
import "jest-enzyme";
import App from "../App";
it("renders welcome message", () => {
  const wrapper = shallow(<App />);
  const edit = <h1>Welcome To TerAppi</h1>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper).toContainReact(edit);
  // expect(wrapper.contains(edit)).toEqual(true);
});
