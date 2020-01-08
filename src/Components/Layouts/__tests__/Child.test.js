import React from "react";
import renderer from "react-test-renderer";
import Child from "./../Child";

it("should render properly", () => {
  const props = {
    content: {
        leftComponent: () => (<span>Left Component</span>),
        rightComponent: () => (<span>Right Component</span>)
    }
  };
  const tree = renderer.create(<Child {...props}/>);
  expect(tree.toJSON()).toMatchSnapshot();
});
