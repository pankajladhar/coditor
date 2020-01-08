import React from "react";
import renderer from "react-test-renderer";
import { ChallengeView } from "./../ChallengeView";

it("should render properly when challenge is loading", () => {
  const tree = renderer.create(<ChallengeView />);
  expect(tree.toJSON()).toMatchSnapshot();
});
