import React, { Component } from "react";
import styled from "styled-components";
import { injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import { Layout, Form, Input, Icon, Row, Col, List, Popover } from "antd";

const LayoutList = styled(List)`
  background-color: #fff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);

  .dropdown-list-item {
    padding: 0 !important;

    .dropdown-list-item-link {
      display: block;
      width: 100%;
      padding: 12px 24px !important;
      border: none;
      font-size: 12px;
      color: gray;
      white-space: nowrap;

      &:hover {
        border-radius: 2px;
        background-color: gray;
        color: #fff;
      }
    }
  }
`;

class HeaderPopover extends Component {
  state = {
    visible: false
  };

  Content = () => {
    const { list, listType = "link" } = this.props;

    return (
      <LayoutList
        className="dropdown-list"
        bordered
        dataSource={list}
        renderItem={item => (
          <List.Item className="dropdown-list-item">
            {listType === "select" ? (
              <div
                className="dropdown-list-item-link"
                onClick={() => {
                  this.onClickContentItem(item.value);
                }}
              >
                {item.text}
              </div>
            ) : (
              <Link
                className="dropdown-list-item-link"
                onClick={this.onClickContentItem}
                to={item.to}
              >
                {item.text}
              </Link>
            )}
          </List.Item>
        )}
      />
    );
  };

  onClickContentItem = value => {
    this.setState({
      visible: false
    });

    if (this.props.onClick) {
      this.props.onClick(value);
    }
  };

  onVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    const {
      list,
      placement = "bottom",
      trigger = "click",
      overlayStyle = {},
      children
    } = this.props;
    const { visible } = this.state;

    return (
      <Popover
        content={<this.Content />}
        placement={placement}
        trigger={trigger}
        visible={visible}
        onVisibleChange={this.onVisibleChange}
        overlayClassName="header-popover"
        overlayStyle={overlayStyle}
      >
        {children}
      </Popover>
    );
  }
}

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

const userMenus = [
  {
    text: "<ユーザ名>さんのマイページ",
    to: "mypage"
  },
  {
    text: "メッセージ",
    to: "message"
  },
  {
    text: "購入履歴",
    to: "history"
  },
  {
    text: "お気に入り",
    to: "favorite"
  },
  {
    text: "メンバー情報の変更",
    to: "update"
  },
  {
    text: "ログアウト",
    to: "logout"
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

const LayoutHeader = styled(Layout.Header)`
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

const BtnsCol = styled(Col)`
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
      <LayoutHeader>
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
          <BtnsCol>
            <Row type="flex" justify="space-between">
              <Col className="header-btn">
                <a href="">
                  <Icon type="shopping-cart" />
                  <div className="header-btn-text">カート</div>
                </a>
              </Col>
              <Col className="header-btn">
                <HeaderPopover
                  list={isLoggedIn ? userMenus : loginMenus}
                  placement="bottomRight"
                  trigger="hover"
                  overlayStyle={{ padding: 0 }}
                >
                  <Icon type="user" />
                  <div className="header-btn-text">
                    {isLoggedIn ? "<ユーザ名>" : "ログイン"}
                  </div>
                </HeaderPopover>
              </Col>
              <Col className="header-btn">
                <HeaderPopover
                  list={supportMenus}
                  placement="bottomRight"
                  trigger="hover"
                  overlayStyle={{ padding: 0 }}
                >
                  <Icon type="info-circle" />
                  <div className="header-btn-text">サポート</div>
                </HeaderPopover>
              </Col>
            </Row>
          </BtnsCol>
        </Row>
      </LayoutHeader>
    );
  }
}

export default injectIntl(Form.create()(Header), {
  withRef: true
});
