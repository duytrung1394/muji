import React, { Component } from "react";
import styled from "styled-components";
import { injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import { Layout, Form, Input, Icon, Row, Col } from "antd";
import HeaderPopover from "./popover";

const loginMenus = [
  {
    text: "ログイン",
    to: "login"
  },
  {
    text: "新規登録",
    to: "create"
  }
];

const supportMenus = [
  {
    text: "お問い合わせ",
    to: "#qa"
  },
  {
    text: "ご利用ガイド",
    to: "#guide"
  },
  {
    text: "重要なお知らせ",
    to: "#important"
  },
  {
    text: "サイトからのお知らせ",
    to: "#media"
  }
];

const targets = [
  {
    text: "商品",
    value: "item"
  },
  {
    text: "店舗",
    value: "shop"
  }
];

// TODO: sidebar-width
const sidebarWidth = 230;

const AntdHeader = styled(Layout.Header)`
  && {
    height: 70px;
    background: #fff;
    padding: 0;
    line-height: normal;
  }

  .antd-header-row {
    height: 100%;

    .header-logo {
      width: ${sidebarWidth}px;
      max-width: ${sidebarWidth}px;
      min-width: ${sidebarWidth}px;
      text-indent: 20px;
    }

    .header-search {
      flex: 1;
      padding: 0 15px;
    }
  }
`;

const HeaderBtnsCol = styled(Col)`
  .header-btn {
    position: relative;
    padding: 0 5px;
    text-align: center;
    font-size: 28px;

    & > a {
      display: block;
      text-align: center;
      padding: 0 5px;
      color: rgba(0, 0, 0, 0.65);
    }

    .header-btn-text {
      font-size: 13px;
    }

    .dropdown-list {
      z-index: 3000;
      display: none;
    }

    &:hover .dropdown-list {
      display: block;
    }
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: "item"
    };
  }

  TargetSelector = () => (
    <HeaderPopover
      list={targets}
      listType="select"
      trigger="click"
      onClick={this.onChangeTarget}
    >
      <Icon type="search" theme="outlined" />
    </HeaderPopover>
  );

  onChangeTarget = value => {
    this.setState({
      target: value
    });
  };

  onPressEnter = event => {
    // TODO: fix
    console.log("value: " + event.target.value);
    console.log("target: " + this.state.target);
  };

  render() {
    const {
      isLoggedIn,
      intl: { formatMessage }
    } = this.props;

    return (
      <AntdHeader>
        <Row
          type="flex"
          align="middle"
          justify="space-between"
          className="antd-header-row"
        >
          <Col className="header-logo">
            <Link to="/store">
              <img
                src="https://img.muji.net/img/common/logo-muji.svg"
                width="128"
                height="20"
                alt="無印良品"
                id="logo"
              />
            </Link>
          </Col>
          <Col className="header-search">
            <Form className="search">
              <Input
                addonBefore={<this.TargetSelector />}
                onPressEnter={event => this.onPressEnter(event)}
                placeholder={formatMessage({
                  id: `header.search.placeholder.${this.state.target}`
                })}
              />
            </Form>
          </Col>
          <HeaderBtnsCol>
            <Row type="flex" justify="space-between">
              <Col className="header-btn">
                <a href="">
                  <Icon type="shopping-cart" />
                  <div className="header-btn-text">カート</div>
                </a>
              </Col>
              <Col className="header-btn">
                <HeaderPopover
                  list={loginMenus}
                  placement="bottomRight"
                  trigger="hover"
                >
                  <Icon type="user" />
                  <div className="header-btn-text">ログイン</div>
                </HeaderPopover>
              </Col>
              <Col className="header-btn">
                <HeaderPopover
                  list={supportMenus}
                  placement="bottomRight"
                  trigger="hover"
                >
                  <Icon type="info-circle" />
                  <div className="header-btn-text">サポート</div>
                </HeaderPopover>
              </Col>
            </Row>
          </HeaderBtnsCol>
        </Row>
      </AntdHeader>
    );
  }
}

export default injectIntl(Form.create()(Header), {
  withRef: true
});
