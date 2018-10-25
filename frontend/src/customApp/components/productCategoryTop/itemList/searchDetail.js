import React, { Component } from "react";
import styled from "styled-components";
import { Form, Col, Button, Select } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

const SearchDetailForm = styled(Form)`
  text-align: left;
  border-top: 1px solid #ebebeb;
  padding-top: 20px !important;
`;

const searchLayout = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12
};

const SelectFormItem = styled(Form.Item)`
  display: flex !important;
  justify-content: space-between !important;
  border-bottom: 1px solid #bebebe;
  .ant-form-item-label label:after {
    content: "";
  }
  .ant-select-selection {
    border: none;
  }
`;

const SearchButton = styled(Button)`
  border-radius: 50px !important;
  color: white !important;
  background: #383838 !important;
  font-size: 13px !important;
  margin: 20px;
`;

const SubmitWrapper = styled.div`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;

const defaultState = {
  stock: 1,
  colorDetail: 1
};

class SearchDetail extends Component {
  state = {
    ...defaultState
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };
  handleSearch = () => {};
  handleReset = () => {
    this.setState({ ...defaultState });
  };

  render() {
    return (
      <SearchDetailForm onSubmit={this.handleSearch}>
        <Col {...searchLayout}>
          <SelectFormItem
            label={<IntlMessages id="productCategoryTop.attributes.stock" />}
          >
            <Select
              value={this.state.stock}
              onChange={value => this.handleChange("stock", value)}
            >
              <Select.Option value={1}>
                <IntlMessages id="productCategoryTop.attributes.stock.option.1" />
              </Select.Option>
              <Select.Option value={2}>
                <IntlMessages id="productCategoryTop.attributes.stock.option.2" />
              </Select.Option>
            </Select>
          </SelectFormItem>
          <SelectFormItem
            label={
              <IntlMessages id="productCategoryTop.attributes.colorDetail" />
            }
          >
            <Select
              value={this.state.colorDetail}
              onChange={value => this.handleChange("colorDetail", value)}
            >
              <Select.Option value={1}>
                <IntlMessages id="productCategoryTop.attributes.colorDetail.option.1" />
              </Select.Option>
              <Select.Option value={2}>
                <IntlMessages id="productCategoryTop.attributes.colorDetail.option.2" />
              </Select.Option>
            </Select>
          </SelectFormItem>
        </Col>
        <Col {...searchLayout}>
          <SubmitWrapper>
            <a onClick={this.handleReset}>
              <IntlMessages id="productCategoryTop.searchForm.clear" />
            </a>
            <SearchButton htmlType="submit">
              <IntlMessages id="productCategoryTop.searchForm.submit" />
            </SearchButton>
          </SubmitWrapper>
        </Col>
      </SearchDetailForm>
    );
  }
}

export default SearchDetail;
