import React from "react";
import renderer from "react-test-renderer";
import CoditorLogo from "./../CoditorLogo";

describe("<CoditorLogo /> ", () => {
  it("should render properly", () => {
    const tree = renderer.create(<CoditorLogo />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render properly when name is passed", () => {
    const tree = renderer.create(<CoditorLogo name />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render properly when size and animate property passed", () => {
    const tree = renderer.create(<CoditorLogo size={200} animate/>);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
