import React from "react";
import ChallengeView from "./ChallengeView";
import GuestView from "./GuestView";
import PreTestView from "./PreTestView";

const SidePanel = () => {};
SidePanel.GuestView = GuestView;
SidePanel.ProblemsListView = ChallengeView;
SidePanel.WelcomeView = PreTestView;

export default SidePanel;
