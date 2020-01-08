import React from "react";
import renderer from "react-test-renderer";
import Rules from "./../Rules";

it("should render properly", () => {
  const tree = renderer.create(<Rules />);
  expect(tree.toJSON()).toMatchSnapshot();
});
