import { combineReducers } from "redux";
import leadsReducer from "./leadsReducer";
import errorsReducer from "./errorsReducer";
import messagesReducer from "./messagesReducer";

export default combineReducers({
  leadsReducer: leadsReducer,
  errorsReducer: errorsReducer,
  messagesReducer: messagesReducer
});
