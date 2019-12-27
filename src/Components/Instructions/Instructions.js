import React from "react";
import data from "./data";

const Instructions = props => {
  return (
    <ul className="text-base Instructions">
      {data.map((instruction, index) => {
        return (
          <li className="pb-3" key={index}>
            <i class="icon-check-circle mr-2"></i>
            {instruction}
          </li>
        );
      })}
    </ul>
  );
};

export default Instructions;
