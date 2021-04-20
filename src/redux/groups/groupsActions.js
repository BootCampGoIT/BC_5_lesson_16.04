import {
  ADDGROUP,
  DELETEGROUP,
  SETLOADER,
  SETERROR,
  RESETERROR,
} from "./groupsConstants";

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

const setLoader = () => {
  return { type: SETLOADER };
};

// ===============error==================

const setError = (error) => {
  return {
    type: SETERROR,
    payload: error,
  };
};
const resetError = () => {
  return {
    type: RESETERROR,
  };
};

export { addGroup, deleteGroup, setLoader, setError, resetError };
