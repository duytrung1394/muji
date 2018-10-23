import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "antd";
import {
  SiderWrapper,
  MenuItemGroup,
  GroupMenuIcon,
  MenuItem,
  LinkMenuItem
} from "./sider.style";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

import sidebarIcon2 from "./sider_icons/sidebarIcon2.png";
import sidebarIcon3 from "./sider_icons/sidebarIcon3.png";
import sidebarIcon4 from "./sider_icons/sidebarIcon4.png";
import sidebarIcon5 from "./sider_icons/sidebarIcon5.png";
import sidebarIcon6 from "./sider_icons/sidebarIcon6.png";
import sidebarIcon7 from "./sider_icons/sidebarIcon7.png";
import sidebarIcon8 from "./sider_icons/sidebarIcon8.png";
import sidebarIcon9 from "./sider_icons/sidebarIcon9.png";
import sidebarIcon10 from "./sider_icons/sidebarIcon10.png";
import sidebarIcon11 from "./sider_icons/sidebarIcon11.png";
import sidebarIcon12 from "./sider_icons/sidebarIcon12.png";
import menuJson from "./sidemenu.json";

const menuData = menuJson.menus;

const getSidebarIcon = img => {
  switch (img) {
    case "sidebarIcon2":
      return sidebarIcon2;
    case "sidebarIcon3":
      return sidebarIcon3;
    case "sidebarIcon4":
      return sidebarIcon4;
    case "sidebarIcon5":
      return sidebarIcon5;
    case "sidebarIcon6":
      return sidebarIcon6;
    case "sidebarIcon7":
      return sidebarIcon7;
    case "sidebarIcon8":
      return sidebarIcon8;
    case "sidebarIcon9":
      return sidebarIcon9;
    case "sidebarIcon10":
      return sidebarIcon10;
    case "sidebarIcon11":
      return sidebarIcon11;
    case "sidebarIcon12":
      return sidebarIcon12;
    default:
      return null;
  }
};

const SideMenuContents = ({ menus }) => {
  return (
    <Menu>
      {menus &&
        menus.map(menu => {
          switch (menu.type) {
            case "groupMenu":
              return (
                <MenuItemGroup
                  title={
                    <span>
                      {menu.img && (
                        <GroupMenuIcon src={getSidebarIcon(menu.img)} />
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
                <LinkMenuItem key={menu.key} className="linkMenu">
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

const SideMenu = () => {
  return (
    <SiderWrapper breakpoint="lg" collapsedWidth="0" width="230">
      <SideMenuContents menus={menuData} />
    </SiderWrapper>
  );
};

export default SideMenu;
