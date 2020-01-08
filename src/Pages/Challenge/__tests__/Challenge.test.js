import React from "react";
import renderer from "react-test-renderer";
import Challenge from "./../Challenge";

xit("should render properly", () => {
  const tree = renderer.create(<Challenge />);
  expect(tree.toJSON()).toMatchSnapshot();
});
