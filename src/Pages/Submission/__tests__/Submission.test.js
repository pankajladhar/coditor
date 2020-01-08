import React from "react";
import renderer from "react-test-renderer";
import Submission from "./../Submission";

describe("<Submission /> ", () => {
  it("should render properly", () => {
    const tree = renderer.create(
      <Submission />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
