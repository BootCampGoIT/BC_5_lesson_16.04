import { combineReducers } from "redux";
import { groupsReducer } from "./groups/groupsReducers";
import tutorsReducer from "./tutors/tutorsReducers";

const rootReducer = combineReducers({
  groups: groupsReducer,
  // tutors: tutorsReducer,
});

export default rootReducer;
