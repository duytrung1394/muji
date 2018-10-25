import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Form, Input, Select, Icon, Row, Col } from "antd";
import { HeaderWrapper, HeaderBtnsCol } from "./header.style";
import { Dropdown as HoverMenu } from "../dropdown/dropdown";

const AntdHeader = Layout.Header;
const Option = Select.Option;
const bannerFlag = false;

const loginMenus = ["ログイン", "新規登録"];

const supportMenus = [
  "お問い合わせ",
  "ご利用ガイド",
  "重要なお知らせ",
  "サイトからのお知らせ"
];

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
            <HeaderBtnsCol>
              <Row type="flex" justify="space-between">
                <Col className="header-btn">
                  <a href="">
                    <Icon type="shopping-cart" />
                    <div className="header-btn-text">カート</div>
                  </a>
                </Col>
                <Col className="header-btn">
                  <Icon type="user" />
                  <div className="header-btn-text">ログイン</div>
                  <HoverMenu menus={loginMenus} />
                </Col>
                <Col className="header-btn">
                  <Icon type="info-circle" />
                  <div className="header-btn-text">サポート</div>
                  <HoverMenu menus={supportMenus} />
                </Col>
              </Row>
            </HeaderBtnsCol>
          </Row>
        </AntdHeader>
      </HeaderWrapper>
    );
  }
}

const WrappedRegistrationForm = Form.create()(Header);

export default WrappedRegistrationForm;
