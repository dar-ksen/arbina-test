import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../actions";

const SearchInput = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="bp3-input-group">
      <span className="bp3-icon bp3-icon-search"></span>
      <input
        className="bp3-input"
        type="search"
        placeholder="Search input"
        dir="auto"
        onChange={onChange}
        value={filter}
      />
    </div>
  );
};

export default SearchInput;
