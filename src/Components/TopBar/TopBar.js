import React from "react";
import CoditorLogo from "./../CoditorLogo/CoditorLogo";

const TopBar = () => {
  return (
    <div className="Topbar bg-white px-8 py-2">
      <CoditorLogo size={80} name />
      <a
        className="underline cursor-pointer"
        
      >
        Sign-out
      </a>
    </div>
  );
};

export default TopBar;
