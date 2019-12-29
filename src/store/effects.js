import { ConstantsConfig } from "../config";

const { IS_APP_LOADED, CHALLENGE } = ConstantsConfig.STATE_KEYS;

let effects = store => {
  store.on(CHALLENGE).subscribe(challenge => {
    console.log(`challenge data is updated to ${challenge}`);
    store.set(IS_APP_LOADED)(true);
  });
  return store;
};

export default effects;
