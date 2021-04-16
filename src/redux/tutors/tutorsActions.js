import { ADDTUTOR, DELETETUTOR, SETFILTER } from "./tutorsConstants";
import { v4 as uuidv4 } from "uuid";

const addTutor = (tutor) => {
  return {
    type: ADDTUTOR,
    payload: { id: uuidv4(), ...tutor },
  };
};

const deleteTutor = (id) => {
  return {
    type: DELETETUTOR,
    payload: id,
  };
};

const setFilter = (value) => {
  return {
    type: SETFILTER,
    payload: value,
  };
};

export { addTutor, deleteTutor, setFilter };
