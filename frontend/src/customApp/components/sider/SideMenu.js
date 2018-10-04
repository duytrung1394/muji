import React, { Component } from "react";
import { Layout, Menu } from "antd";
import SiderWrapper from "./sider.style";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class SideMenu extends Component {
  render() {
    return (
      <SiderWrapper>
        <Sider breakpoint="lg" collapsedWidth="0">
          <Menu>
            <MenuItemGroup title="特集" key="g1">
              <Menu.Item key="10">特集</Menu.Item>
              <Menu.Item key="11">新商品</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="毎日の無印良品" key="g2">
              <Menu.Item key="20">ネット限定 対象商品配送料無料</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="お買い得" key="g3">
              <Menu.Item key="31">期間限定価格</Menu.Item>
              <Menu.Item key="32">まとめ買い</Menu.Item>
              <Menu.Item key="33">切れ端、不揃い、大容量</Menu.Item>
              <Menu.Item key="34">SALE</Menu.Item>
              <Menu.Item key="35">アウトレット</Menu.Item>
            </MenuItemGroup>
          </Menu>
        </Sider>
      </SiderWrapper>
    );
  }
}

export default SideMenu;
