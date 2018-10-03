import React, { Component } from "react";
import { Layout } from "antd";
import HeaderWrapper from "./header.style";

const AntdHeader = Layout.Header;

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <AntdHeader>
          ヘッダー
        </AntdHeader>
      </HeaderWrapper>
    );
  }
}

export default Header;
