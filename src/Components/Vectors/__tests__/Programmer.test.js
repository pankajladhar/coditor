import React from "react";
import renderer from "react-test-renderer";
import Programmer from "./../Programmer";

it("should render properly", () => {
  const tree = renderer.create(<Programmer />);
  expect(tree.toJSON()).toMatchSnapshot();
});
