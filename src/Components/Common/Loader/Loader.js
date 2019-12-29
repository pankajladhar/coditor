import React from "react";
import CoditorLogo from "../CoditorLogo/CoditorLogo";

const Loader = ({ text, size }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <CoditorLogo size={size} animate />
      <div className="text-gray-600 font-light text-xl mt-5">{text}</div>
    </div>
  );
};
Loader.defaultProps = {
  text: "Loading Coditor...",
  size: 200
};
export default Loader;
