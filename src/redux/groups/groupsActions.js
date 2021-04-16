import { ADDGROUP, DELETEGROUP } from "./groupsConstants";

const addGroup = (group) => {
  return {
    type: ADDGROUP,
    payload: group,
  };
};

const deleteGroup = (id) => {
  return {
    type: DELETEGROUP,
    payload: id,
  };
};

export { addGroup, deleteGroup };
