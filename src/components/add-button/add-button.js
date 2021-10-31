import React from "react";
import { Button } from "@blueprintjs/core";
import { useDispatch } from "react-redux";
import { getRandomString } from "../../utils";
import { addString } from "../../actions";

const AddButton = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(addString(getRandomString()));
  };

  return <Button onClick={onClick} icon="add" minimal />;
};

export default AddButton;
