import { ADD_STRING } from "../actions/types";
const initState = ["test", "set", "index", "trial"];

const stringsReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_STRING:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default stringsReducer;
