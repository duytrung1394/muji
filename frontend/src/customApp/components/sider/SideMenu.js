import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Menu } from "antd";
import SiderWrapper from "./sider.style";
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

const { Sider } = Layout;
const MenuItemGroup = Menu.ItemGroup;
const menuData = menuJson.menus;

const getSidebarIcon = src => {
  switch (src) {
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
          const group = menu.groupMenu;
          if (group) {
            return (
              <MenuItemGroup
                title={
                  <span>
                    {group.img && (
                      <img
                        className={group.img.className}
                        src={getSidebarIcon(group.img.src)}
                      />
                    )}
                    <span>{group.title}</span>
                  </span>
                }
                key={group.key}
              >
                {menu.items &&
                  menu.items.map(item => {
                    return (
                      <Menu.Item key={item.key}>
                        {item.externalLink && item.externalLink ? (
                          <a href={item.url}>{item.title}</a>
                        ) : (
                          <NavLink to={item.url}>{item.title}</NavLink>
                        )}
                      </Menu.Item>
                    );
                  })}
              </MenuItemGroup>
            );
          } else if (menu.linkMenu) {
            const linkMenu = menu.linkMenu;
            return (
              <Menu.Item key={linkMenu.key} className={linkMenu.className}>
                <Link to={linkMenu.url}>
                  <span> {linkMenu.title}</span>
                  <p>{linkMenu.subtitle}</p>
                </Link>
              </Menu.Item>
            );
          }
        })}
    </Menu>
  );
};

const SideMenu = () => {
  return (
    <SiderWrapper>
      <Sider breakpoint="lg" collapsedWidth="0" width="230">
        <SideMenuContents menus={menuData} />
      </Sider>
    </SiderWrapper>
  );
};

export default SideMenu;
