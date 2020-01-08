import React from "react";
import renderer from "react-test-renderer";
import TestResults from "./../TestResults";

describe("<TestResults /> ", () => {
  it("should render properly", () => {
    const tree = renderer.create(
      <TestResults
        results={
          '[{"scenario":"Should reverse the digits","status":"Fail"},{"scenario":"Should reverse the negative digits","status":"Pass"},{"scenario":"Should ignore the trailing zero","status":"Fail"}]'
        }
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render properly when results are not present", () => {
    const tree = renderer.create(<TestResults />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
