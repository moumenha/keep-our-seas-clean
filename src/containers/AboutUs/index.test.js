import React from "react";
import renderer from "react-test-renderer";
import AboutUs from "./index";

it("renders correctly", () => {
  const tree = renderer.create(<AboutUs />).toJSON();
  expect(tree).toMatchSnapshot();
});
