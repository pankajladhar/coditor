import React from "react";
import CoditorLogo from "../../Components/Common/CoditorLogo/CoditorLogo";

const Submission = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-center flex-col">
        <CoditorLogo size={200} />
        <div className="text-gray-600 font-light text-xl mt-5">
          Code submitted successfully
        </div>
      </div>
    </div>
  );
};

export default Submission;
