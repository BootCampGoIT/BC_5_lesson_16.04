import axios from "axios";
import { addGroup, resetError, setError, setLoader } from "./groupsActions";

const addGroupOperation = (group) => async (dispatch, getState) => {
  getState().groups.error && dispatch(resetError());
  dispatch(setLoader());
  try {
    const response = await axios.post(
      `https://bootcamp5dfgh-default-rtdb.firebaseio.com/groups.json`,
      group
    ); // response.data.name = "-XFGGFGJHJHFJGHKJF"
    dispatch(addGroup({ id: response.data.name, ...group }));
  } catch (error) {
    // console.dir(error.message);
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};

export { addGroupOperation };
