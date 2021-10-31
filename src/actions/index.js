import { ADD_STRING, SET_FILTER } from "./types";

export const addString = (string) => {
  return {
    type: ADD_STRING,
    payload: string,
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};
