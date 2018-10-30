import React, { Component } from "react";
import { Row, Col, Select } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import {
  searchLayout,
  SearchDetailForm,
  StyledSelectFormItem,
  SubmitWrapper,
  SearchButton
} from "./searchDetail.style";
import { stockOptions, colorDetailOptions } from "./searchDetailOptions";

const SelectFormItem = ({ name, value, handleChange, options }) => (
  <StyledSelectFormItem
    colon={false}
    label={<IntlMessages id={`productCategoryTop.attributes.${name}`} />}
  >
    <Select
      value={value}
      onChange={changeValue => handleChange(name, changeValue)}
    >
      {options.map((option, index) => (
        <Select.Option value={option.value} key={index}>
          <IntlMessages
            id={`productCategoryTop.attributes.${name}.option.${option.id}`}
          />
        </Select.Option>
      ))}
    </Select>
  </StyledSelectFormItem>
);

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
        <Row gutter={16}>
          <Col {...searchLayout}>
            <SelectFormItem
              name="stock"
              value={this.state.stock}
              handleChange={this.handleChange}
              options={stockOptions}
            />
            <SelectFormItem
              name="colorDetail"
              value={this.state.colorDetail}
              handleChange={this.handleChange}
              options={colorDetailOptions}
            />
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
        </Row>
      </SearchDetailForm>
    );
  }
}

export default SearchDetail;
