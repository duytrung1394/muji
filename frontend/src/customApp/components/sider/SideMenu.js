import React, { Component } from "react";
import { Layout } from "antd";
import SiderWrapper from "./sider.style";

const { Sider } = Layout;


class SideMenu extends Component {
  render() {
    return (
      <SiderWrapper>
        <Sider breakpoint="lg" collapsedWidth="0">
          サイドメニュー
        </Sider>
      </SiderWrapper>
    );
  }
}

export default SideMenu;
