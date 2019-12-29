import { createConnectedStore, withReduxDevtools } from "undux";
import withEffects from "./effects";
import { ConstantsConfig } from "../config";

const { CHALLENGE, IS_APP_LOADED } = ConstantsConfig.STATE_KEYS;

const initialState = {
  [CHALLENGE]: null,
  [IS_APP_LOADED]: false
};

const composeEffects = stores => withReduxDevtools(withEffects(stores));

export default createConnectedStore(initialState, composeEffects);
