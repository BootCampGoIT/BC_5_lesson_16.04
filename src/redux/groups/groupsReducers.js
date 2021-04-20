import { combineReducers } from "redux";
import {
  ADDGROUP,
  DELETEGROUP,
  RESETERROR,
  SETERROR,
  SETLOADER,
} from "./groupsConstants";

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case ADDGROUP:
      return [...state, action.payload];

    case DELETEGROUP:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

const loaderReducer = (state = false, { type }) => {
  switch (type) {
    case SETLOADER:
      return !state;
      
    default:
      return state;
  }
};
const errorReducer = (state = "", { type, payload }) => {
  switch (type) {
    case SETERROR:
      return payload;

    case RESETERROR:
      return "";
    default:
      return state;
  }
};

const groupsReducer = combineReducers({
  items: itemsReducer,
  isLoading: loaderReducer,
  error: errorReducer,
});

export { groupsReducer };
