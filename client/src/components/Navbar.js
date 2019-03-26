import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";

const Navbar = () => (
  <Menu inverted>
    <Menu.Item>
      <NavLink exact to="/">
        Home
      </NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink exact to="/apps">
        Blogs
      </NavLink>
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        <NavLink exact to="/apps/new">
          New Blog
        </NavLink>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
