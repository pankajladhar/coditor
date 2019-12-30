import React from "react";

const ChildLayout = ({ content }) => {
  return (
    <div className="home flex h-screen">
      <section className="w-2/6 pt-6 bg-white border-r border-gray-300 flex-shrink-0 border-r border-gray-400">
        {content.leftComponent()}
      </section>
      <section className="border-gray-300 flex-grow">
        {content.rightComponent()}
      </section>
    </div>
  );
};

export default ChildLayout;
