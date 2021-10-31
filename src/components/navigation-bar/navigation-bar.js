import React from "react";
import { Alignment, Classes, Navbar, NavbarGroup } from "@blueprintjs/core";

const NavigationBar = ({ children }) => {
  return (
    <Navbar className={Classes.DARK}>
      <NavbarGroup align={Alignment.LEFT}>{children}</NavbarGroup>
    </Navbar>
  );
};

export default NavigationBar;
