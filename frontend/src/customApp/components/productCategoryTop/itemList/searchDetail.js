import React, { Component } from "react";
import styled from "styled-components";
import { Form, Col, Button } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

const SearchDetailForm = styled(Form)`
  text-align: left;
  border-top: 1px solid #ebebeb;
`;

const searchLayout = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12
};

class SearchDetail extends Component {
  handleSearch = event => {};

  render() {
    return (
      <SearchDetailForm onSubmit={this.handleSearch}>
        <Col {...searchLayout}>
          <p>DEBUG</p>
          <p>DEBUG</p>
          <p>DEBUG</p>
          <p>DEBUG</p>
          <p>DEBUG</p>
          <p>DEBUG</p>
          <p>DEBUG</p>
        </Col>
        <Col {...searchLayout}>
          <p>DEBUG</p>
          <p>DEBUG</p>
          <p>DEBUG</p>
          <p>DEBUG</p>
          <p>DEBUG</p>
          <p>DEBUG</p>
          <p>DEBUG</p>
          <Button htmlType="submit">この条件で検索</Button>
        </Col>
      </SearchDetailForm>
    );
  }
}

export default SearchDetail;
