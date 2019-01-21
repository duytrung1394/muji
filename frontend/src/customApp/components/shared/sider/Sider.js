import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "antd";
import {
  SiderWrapper,
  MenuItemGroup,
  MenuItemGroupIcon,
  MenuItem,
  LinkMenuItem
} from "./sider.style";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import sidebarIcons from "./sider_icons/sidebarIcons";
import menuJson from "./sidemenu.json";

const SiderContents = () => {
  return (
    <Menu>
      {menuJson.menus &&
        menuJson.menus.map(menu => {
          switch (menu.type) {
            case "groupMenu":
              return (
                <MenuItemGroup
                  title={
                    <span>
                      {menu.img && (
                        <MenuItemGroupIcon src={sidebarIcons[menu.img]} />
                      )}
                      <span>{menu.title}</span>
                    </span>
                  }
                  key={menu.key}
                >
                  {menu.items &&
                    menu.items.map(item => {
                      return (
                        <MenuItem key={item.key}>
                          {item.externalLink && item.externalLink ? (
                            <a href={item.url}>{item.title}</a>
                          ) : (
                            <NavLink to={item.url}>{item.title}</NavLink>
                          )}
                        </MenuItem>
                      );
                    })}
                </MenuItemGroup>
              );
            case "linkMenu":
              return (
                <LinkMenuItem key={menu.key}>
                  <Link to={menu.url}>
                    <span> {menu.title}</span>
                    <p>{menu.subtitle}</p>
                  </Link>
                </LinkMenuItem>
              );
            default:
              return null;
          }
        })}
    </Menu>
  );
};

const Sider = () => {
  return (
    <SiderWrapper breakpoint="lg" collapsedWidth="0" width="230">
      <SiderContents />
    </SiderWrapper>
  );
};

export default Sider;
