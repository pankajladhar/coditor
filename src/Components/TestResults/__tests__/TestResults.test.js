import React from "react";
import renderer from "react-test-renderer";
import TestResults from "./../TestResults";

describe("<TestResults /> ", () => {
  it("should render properly", () => {
    const tree = renderer.create(
      <TestResults
        results={'{"Test-1":"Fail","Test-2":"Fail","Test-3":"Fail"}'}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
