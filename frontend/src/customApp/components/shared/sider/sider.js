import React, { Component } from "react";
import styled from "styled-components";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import sidebarIcons from "./sider_icons/sidebarIcons";
import { menus } from "./sidemenu.json";
import NavLink from "./navLink";

const LayoutGroupMenu = styled(Menu.ItemGroup)`
  margin-bottom: 20px;
  border-top: 1px solid #ccc;

  .ant-menu-item-group-title {
    font-size: 16px;
    color: #333;
    font-weight: 400;
  }
`;

const MenuItemGroupIcon = styled.img`
  width: 8%;
  height: 15px;
  margin-right: 5px;
  padding-bottom: 2px;
`;

const MenuItem = styled(Menu.Item)`
  height: 28px !important;
  color: #333;
  font-weight: 700;
  font-family: Hiragino Kaku Gothic ProN;
`;

class GroupMenu extends Component {
  render() {
    const { menu } = this.props;
    return (
      <LayoutGroupMenu
        title={
          <span>
            {menu.img && <MenuItemGroupIcon src={sidebarIcons[menu.img]} />}
            <span>{menu.title}</span>
          </span>
        }
        {...this.props}
      >
        {menu.items &&
          menu.items.map((item, index) => {
            return (
              <MenuItem key={index}>
                {item.externalLink && item.externalLink ? (
                  <a href={item.url}>{item.title}</a>
                ) : (
                  <NavLink to={item.url}>{item.title}</NavLink>
                )}
              </MenuItem>
            );
          })}
      </LayoutGroupMenu>
    );
  }
}

const LayoutLinkMenu = styled(Menu.Item)`
  height: 80px !important;
  margin: 0 !important;
  font-weight: 700;
  font-family: Hiragino Kaku Gothic ProN;
  border-top: 1px solid #ccc;

  a {
    padding-top: 10px;
    line-height: 28px;

    span {
      font-size: 14px;
    }

    p {
      font-size: 8px;
    }
  }
`;

class LinkMenu extends Component {
  render() {
    const { menu } = this.props;
    return (
      <LayoutLinkMenu {...this.props}>
        <Link to={menu.url}>
          <span> {menu.title}</span>
          <p>{menu.subtitle}</p>
        </Link>
      </LayoutLinkMenu>
    );
  }
}

const LayoutSider = styled(Layout.Sider)`
  overflow-y: auto;
  border-right: solid 1px #f9f9f9;

  .ant-menu-item:hover {
    color: white;
    background-color: grey;

    a:hover {
      color: white;
    }
  }
`;

// TODO: sidebar-width
const sidebarWidth = 230;

const menuTypes = {
  groupMenu: GroupMenu,
  linkMenu: LinkMenu
};

const Sider = () => {
  return (
    <LayoutSider breakpoint="lg" collapsedWidth="0" width={sidebarWidth}>
      <Menu>
        {menus &&
          menus.map((menu, index) => {
            if (menuTypes[menu.type]) {
              return React.createElement(menuTypes[menu.type], {
                key: index,
                menu,
                ...this.props
              });
            } else {
              return null;
            }
          })}
      </Menu>
    </LayoutSider>
  );
};

export default Sider;
