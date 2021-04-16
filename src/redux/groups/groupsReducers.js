import { ADDGROUP, DELETEGROUP } from "./groupsConstants";

const groupsReducer = (state = [], action) => {
  switch (action.type) {
    case ADDGROUP:
      return [...state, action.payload];

    case DELETEGROUP:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export { groupsReducer };

