import React from "react";
import { NavbarDivider } from "@blueprintjs/core";

import NavigationBar from "../navigation-bar";

import AddButton from "../add-button";
import SearchInput from "../search-input";
import Table from "../table";

const App = () => {
  return (
    <>
      <NavigationBar>
        <SearchInput />
        <NavbarDivider />
        <AddButton />
      </NavigationBar>
      <Table />
    </>
  );
};

export default App;
