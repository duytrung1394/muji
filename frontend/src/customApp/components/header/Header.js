import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Form, Input, Select, Icon, Row, Col } from "antd";
import HeaderWrapper from "./header.style";

import { List } from "antd";

const loginData = ["ログイン", "新規登録"];

const supportData = [
  "お問い合わせ",
  "ご利用ガイド",
  "重要なお知らせ",
  "サイトからのお知らせ"
];

const AntdHeader = Layout.Header;
const FormItem = Form.Item;
const Option = Select.Option;

const bannerFlag = false;

class Header extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;

    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "item"
    })(
      <Select style={{ width: 90 }}>
        <Option value="item">
          <Icon type="search" theme="outlined" /> 商品
        </Option>
        <Option value="shop">
          <Icon type="search" theme="outlined" /> 店舗
        </Option>
      </Select>
    );

    return (
      <HeaderWrapper>
        {bannerFlag === true ? (
          <div className="banner">
            <p>
              <img
                src="https://img.muji.net/img/store/common/banner_ryohinweek.png"
                alt="無印良品週間 メンバー限定10％OFF"
              />
              <b>
                9/29(土) – 10/8(月)<span> ネットは10/9(火)午前10時まで</span>
              </b>
            </p>
          </div>
        ) : null}
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
                <Input addonBefore={prefixSelector} />
              </Form>
            </Col>
            <Col className="header-btns">
              <Row type="flex" justify="space-between">
                <Col className="header-btn">
                  <a class="header-btn-anchor">
                    <Icon type="shopping-cart" style={{ fontSize: 28 }} />
                    <div>カート</div>
                  </a>
                </Col>
                <Col className="header-login-btn">
                  <Icon type="user" style={{ fontSize: 28 }} />
                  <div>ログイン</div>
                  <List
                    className="header-login-list"
                    bordered
                    dataSource={loginData}
                    renderItem={item => (
                      <List.Item className="list-item">
                        <Link to="/store" className="login-list-value">
                          {item}
                        </Link>
                      </List.Item>
                    )}
                  />
                </Col>
                <Col className="header-support-btn">
                  <Icon type="info-circle" style={{ fontSize: 28 }} />
                  <div>サポート</div>
                  <Row>
                    <List
                      className="header-support-list"
                      bordered
                      dataSource={supportData}
                      renderItem={item => (
                        <List.Item className="list-item">
                          <Link to="/store" className="support-list-value">
                            {item}
                          </Link>
                        </List.Item>
                      )}
                    />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </AntdHeader>
      </HeaderWrapper>
    );
  }
}

const WrappedRegistrationForm = Form.create()(Header);

export default WrappedRegistrationForm;
