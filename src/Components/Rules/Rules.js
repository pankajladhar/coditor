import React from "react";

const rulesData = [
  "1. some basic challenge rules and Instructions",
  "2. some basic challenge rules and Instructions",
  "3. some basic challenge rules and Instructions",
  "4. some basic challenge rules and Instructions",
  "5. some basic challenge rules and Instructions",
  "6. some basic challenge rules and Instructions"
];

const Rules = props => {
  return (
    <div className=" flex h-screen flex-col p-12">
      <h3 className="text-4xl mb-5 font-display text-indigo-900 font-extrabold">
        Instructions
      </h3>
      <ul>
        {rulesData.map((rule, index) => {
          return <li key={`rule-${index}`}>{rule}</li>;
        })}
      </ul>
    </div>
  );
};

export default Rules;
