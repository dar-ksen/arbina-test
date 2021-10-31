import { combineReducers } from "redux";
import stringsReducer from "./stringsReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  strings: stringsReducer,
  filter: filterReducer,
});

export default rootReducer;
