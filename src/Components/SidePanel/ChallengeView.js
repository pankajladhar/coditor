import React, { useState } from "react";
import CoditorLogo from "../Common/CoditorLogo/CoditorLogo";
import withFirebase from "../../hooks/withFirebase";
import { withRouter, NavLink } from "react-router-dom";
import Timer from "../Timer/Timer";
import withCurrentProblem from "../../hooks/withCurrentProblem";
import Loader from "../Common/Loader/Loader";
import { firebaseOps } from "../../utils";

function ChallengeView({ firebase, user, challenge, history }) {
  const { displayName, email } = user || {};
  const [challengeSubmit, setChallengeSubmit] = useState(false);

  const handleCodeSubmit = async () => {
    setChallengeSubmit(true);
    const results = await firebaseOps.submitChallenge(email);

    if (results.message === "Challenge submitted sucessfully !") {
      setChallengeSubmit(false);
      history.push("/coditor/submission");
    }
  };

  if (!challenge) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader size={100} text="Loading problems..." />
      </div>
    );
  }

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
      <div className="my-10 px-10">
        <Timer />
      </div>
      <div>
        {challenge.map((c, i) => {
          return (
            <NavLink
              to={`/coditor/challenge/${c.id}`}
              activeClassName="active"
              key={`NavLink-${i}`}
            >
              <div className="flex items-center my-3 p-3 rounded-lg active:bg-blue-700 active:text-gray-100  hover:bg-gray-200">
                <i
                  className={`icon-number-${i +
                    1} p-3  rounded-full mr-3 text-gray-600 active:text-blue-700 active:bg-blue-100`}
                ></i>
                <div className="flex-1 overflow-hidden">
                  <div className="font-semibold text-base">{c.title}</div>
                  <div className="text-gray-600 ellipsis active:text-gray-100">
                    {c.description}.{" "}
                  </div>
                </div>
                <i className="icon-check-circle p-1 text-xl text-gray-500 active:text-white opacity-50"></i>
              </div>
            </NavLink>
          );
        })}
      </div>
      <div className="px-12 py-12 text-center my-1">
        <button
          className="bg-green-500 text-white px-10 py-4 rounded shadow-lg font-medium inline-flex uppercase"
          onClick={handleCodeSubmit}
        >
          <i class="text-base icon-zap text-xl mr-2"></i>{" "}
          {challengeSubmit ? "Submitting code" : "Submit code"}
        </button>
      </div>
    </div>
  );
}

export default withFirebase(withRouter(withCurrentProblem(ChallengeView)));
