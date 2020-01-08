import React from "react";
import renderer from "react-test-renderer";
import Instructions from "./../Instructions";

describe("<Instructions /> ", () => {
  const props = {
    data: {
      title: "title",
      description: "description"
    }
  };

  it("should render properly", () => {
    const tree = renderer.create(<Instructions {...props} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render properly when notes are present", () => {
    const updatedProps = JSON.parse(JSON.stringify(props));
    updatedProps.data.notes = "some notes";
    const tree = renderer.create(<Instructions {...updatedProps} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render properly when exmaples are present", () => {
    const updatedProps = JSON.parse(JSON.stringify(props));
    updatedProps.data.examples = [
      {
        functionExample: "functionExample",
        expectedOutput: "expectedOutput",
        comment: "comment"
      }
    ];
    const tree = renderer.create(<Instructions {...updatedProps} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
