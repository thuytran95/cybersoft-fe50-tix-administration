import loginReducer from "./loginReducer";
import { combineReducers } from "redux";
import showAdminReducer from "./showAdminReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  showAdmin: showAdminReducer,
});

export default rootReducer;
