import React from "react";
import {  Menu } from "semantic-ui-react";

const Navbar = () => (
  <Menu fixed="top" inverted>
    <Menu.Item as="a" header>
      Task Manager
    </Menu.Item>
  </Menu>
);

export default Navbar;
