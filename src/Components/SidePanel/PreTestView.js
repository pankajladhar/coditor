import React from "react";
import CoditorLogo from "../Common/CoditorLogo/CoditorLogo";
import withFirebase from "../../hooks/withFirebase";
import ProgrammerVector from "../Vectors/Programmer";
import { withRouter } from "react-router-dom";
import withCurrentProblem from "../../hooks/withCurrentProblem";

function PreTestView({ firebase, history, user = {}, challenge }) {
  const { displayName } = user || {};
  const handleStartChallenge = () => {
    history.push(`/coditor/challenge/${challenge[0].id}`);
  };
  return (
    <div className="px-10 flex h-full flex-col">
      <div className="flex justify-between">
        <div className="flex items-center">
          <CoditorLogo className="flex justify-center" size={60} />
          <div className="text-xl text-blue-800 font-headline font-extrabold uppercase tracking-tight">
            Coditor
          </div>
        </div>
        <div className="flex items-center">
          <i className="icon-user text-xl text-gray-500 mr-2 bg-gray-200 p-1 rounded-full"></i>
          {displayName}
          <i
            className="icon-log-out p-1 text-gray-800 text-lg ml-3 cursor-pointer rounded-lg  hover:text-pink-500"
            onClick={() => firebase.auth().signOut()}
          ></i>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center flex-col">
        <ProgrammerVector />
        <div className="font-quote text-3xl flex items-center text-center  mt-10">
          <span className="text-6xl leading-none text-pink-500 h-1">“</span>
          The life of a designer is a life of fight against the ugliness
          <span className="text-6xl leading-none text-pink-500 h-1">”</span>
        </div>
      </div>
      <div className="px-12 py-12 text-center my-1">
        <button
          className="bg-green-500 text-white px-10 py-4 rounded shadow-lg font-medium inline-flex uppercase"
          onClick={handleStartChallenge}
        >
          <i className="text-base icon-zap text-xl mr-2"></i> Start challenge
        </button>
      </div>
    </div>
  );
}

export default withFirebase(withRouter(withCurrentProblem(PreTestView)));
