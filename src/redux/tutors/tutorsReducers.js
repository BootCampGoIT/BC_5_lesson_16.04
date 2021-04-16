import { ADDTUTOR, DELETETUTOR, SETFILTER } from "./tutorsConstants";
import { combineReducers } from "redux";

const tutorsItems = (state = [], { type, payload }) => {
  switch (type) {
    case ADDTUTOR:
      return [...state, payload];

    case DELETETUTOR:
      return state.filter((item) => item.id !== payload);
    default:
      return state;
  }
};

const tutorsFilter = (state = "", { type, payload }) => {
  switch (type) {
    case SETFILTER:
      return payload;

    default:
      return state;
  }
};

const tutorsReducer = combineReducers({
  items: tutorsItems,
  filter: tutorsFilter,
});

export default tutorsReducer;
