import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "../component";

import { shallow } from "enzyme";
import toJson from 'enzyme-to-json'

it("component does not crash", () => {
  const component = shallow(<MyComponent />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
