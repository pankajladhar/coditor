import React from "react";
import data from "./challengesData";
import { withRouter } from "react-router";

const Challenges = ({ history }) => {
  return (
    <div className="Challanges">
      <ul>
        {data.map((challange, index) => {
          return (
            <li key={index}>
              {challange.statement}
              <button
                class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                onClick={() => {
                  history.push(`/challenge/${challange.id}`);
                }}
              >
                {" "}
                Start
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Challenges };
export default withRouter(Challenges);
