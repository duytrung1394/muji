import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Form, Input, Select, Icon} from "antd";
import HeaderWrapper from "./header.style";

const AntdHeader = Layout.Header;
const FormItem = Form.Item;
const Option = Select.Option;

const bannerFlag = false;

class Header extends Component {

  render() {
    const { getFieldDecorator } = this.props.form;

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: 'item',
    })(
      <Select style={{ width: 90 }}>
        <Option value="item"><Icon type="search" theme="outlined" /> 商品</Option>
        <Option value="shop"><Icon type="search" theme="outlined" /> 店舗</Option>
      </Select>
    );

    return (
      <HeaderWrapper>
        <AntdHeader>
          <div className="banner">
                 {(bannerFlag == true)?<p>
                   <img src="https://img.muji.net/img/store/common/banner_ryohinweek.png" alt="無印良品週間 メンバー限定10％OFF"/>
                   <b>9/29(土) – 10/8(月)<span> ネットは10/9(火)午前10時まで</span></b>
                 </p>: null}
               </div>
          <bannerFlagMng/>
           <div className="logo-search-icons">
             <Link to="/store">
               <img src="https://img.muji.net/img/common/logo-muji.svg" width="128" height="20" alt="無印良品" id="logo"/>
             </Link>
             <Form className="search">
               <Input addonBefore={prefixSelector}/>
             </Form>
             <ul>
              <li>
                <a class="cart">
                <Icon type="shopping-cart" style={{fontSize: 32}} />
                <p>カート</p>
                </a>
              </li>
              <li class="login">
                <a>
                 <Icon type="user"          style={{fontSize: 32}} />
                 <p>ログイン</p>
                </a>
                <ul　class="login-menu">
                  <li>
                    <a>ログイン</a>
                  </li>
                  <li>
                    <a>新規登録</a>
                  </li>
                </ul>
              </li>
              <li class="support">
                <a>
                 <Icon type="info-circle"   style={{fontSize: 32}} />
                 <p>サポート</p>
                </a>
                <ul class="support-menu">
                  <li>
                    <a>お問い合わせ</a>
                  </li>
                  <li>
                    <a>ご利用ガイド</a>
                  </li>
                  <li>
                    <a>重要なお知らせ</a>
                  </li>
                  <li>
                    <a>サイトからのお知らせ</a>
                  </li>
                </ul>
              </li>
              <li>
              </li>
             </ul>
          </div>
        </AntdHeader>
      </HeaderWrapper>
    );
  }
}

const WrappedRegistrationForm = Form.create()(Header);

export default WrappedRegistrationForm;


