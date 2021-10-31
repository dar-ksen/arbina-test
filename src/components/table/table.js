import React from "react";
import { Cell, Column, Table2 } from "@blueprintjs/table";

import useFilteredStrings from "../../hooks/useFilteredStrings";

const Table = () => {
  const strings = useFilteredStrings();

  const strCellRenderer = (rowIndex) => (
    <Cell>{`${strings[rowIndex] ? strings[rowIndex] : ""}`}</Cell>
  );

  if (strings.length === 0) {
    return <p>No found</p>;
  }

  return (
    <Table2 numRows={strings.length}>
      <Column name="String" cellRenderer={strCellRenderer} />
    </Table2>
  );
};

export default Table;
