import React from "react";
import renderer from "react-test-renderer";
import CodeError from "./../CodeError";

describe("<CodeError /> ", () => {
  it("should render properly", () => {
    const tree = renderer.create(
      <CodeError error={'{"Test-1":"Fail","Test-2":"Fail","Test-3":"Fail"}'} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
