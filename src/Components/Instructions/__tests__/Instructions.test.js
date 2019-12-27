import React from "react";
import renderer from "react-test-renderer";
import Instructions from "./../Instructions";

describe("<Instructions /> ", () => {
  it("should render properly", () => {
    const tree = renderer.create(
      <Instructions />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
