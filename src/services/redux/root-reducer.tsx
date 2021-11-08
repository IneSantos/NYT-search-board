import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import reducer from "./reducer";

const appReducer = combineReducers({ article: reducer });

const rootReducer = (state, action) => {
  if (action.type === "RESET_STORE") {
    storage.removeItem("persist:root");
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
