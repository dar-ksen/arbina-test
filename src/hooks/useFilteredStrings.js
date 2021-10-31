import { useSelector } from "react-redux";
import { searchStrings } from "../utils";

const useFilteredStrings = () => {
  const { strings, filter } = useSelector((state) => state);
  return searchStrings(strings, filter);
};

export default useFilteredStrings;
