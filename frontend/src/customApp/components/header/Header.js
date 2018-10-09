import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Form, Input, Select, Icon } from "antd";
import HeaderWrapper from "./header.style";

const AntdHeader = Layout.Header;
const FormItem = Form.Item;
const Option = Select.Option;

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
           <div id="banner">
             <p>
               <img src="https://img.muji.net/img/store/common/banner_ryohinweek.png" alt="無印良品週間 メンバー限定10％OFF"/>
               <b>9/29(土) – 10/8(月)<span> ネットは10/9(火)午前10時まで</span></b>
             </p>
           </div>
           <div id="logo-search-icons">
             <Link to="/store">
               <img src="https://img.muji.net/img/common/logo-muji.svg" width="128" height="20" alt="無印良品" id="logo"/>
             </Link>
             <Form id="search">
               <Input addonBefore={prefixSelector} style={{ width: '50%' }} />
             </Form>
             <span>
               <Icon type="shopping-cart" style={{fontSize: 32}} />
               <span>カート</span>
             </span>
             <span>
               <Icon type="user"          style={{fontSize: 32}} />
               <span>ログイン</span>
             </span>
             <span>
               <Icon type="info-circle"   style={{fontSize: 32}} />
               <span>サポート</span>
             </span>
          </div>
        </AntdHeader>
      </HeaderWrapper>
    );
  }
}

const WrappedRegistrationForm = Form.create()(Header);

export default WrappedRegistrationForm;


