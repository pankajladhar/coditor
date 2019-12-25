import React from "react";
import renderer from "react-test-renderer";
import Problem from "./../Problem";

describe("<TestResults /> ", () => {
  it("should render properly", () => {
    const tree = renderer.create(
      <Problem
        content={'<div>Problem statement</div>'}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
