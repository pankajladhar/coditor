import React from "react";
import CoditorLogo from "../CoditorLogo/CoditorLogo";

const Loader = ({ text }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <CoditorLogo size={200} animate />
      <div className="text-gray-600 font-light text-xl mt-5">{text}</div>
    </div>
  );
};
Loader.defaultProps = {
  text: "Loading Coditor..."
};
export default Loader;
