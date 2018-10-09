import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import SiderWrapper from "./sider.style";

const { Sider } = Layout;
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
            <MenuItemGroup title="衣料品" key="g4">
              <Menu.Item key="41">
                <Link to="/store/cmdty/section/T10000">婦人ウェア</Link>
              </Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="子供・マタニティ" key="g5">
              <Menu.Item key="51">
                <Link to="/store/cmdty/section/T10007">
                  ベピー (80 - 100cm)
                </Link>
              </Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="産地直送" key="g11">
              <Menu.Item key="111">
                <Link to="/store/pc/user/shokoku/">諸国良品</Link>
              </Menu.Item>
            </MenuItemGroup>
          </Menu>
        </Sider>
      </SiderWrapper>
    );
  }
}

export default SideMenu;
