import React, { Component } from "react";
import { Layout } from "antd";
import FooterWrapper from "./footer.style";

const AntdFooter = Layout.Footer;

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <AntdFooter>
          フッター
        </AntdFooter>
      </FooterWrapper>
    );
  }
}

export default Footer;
