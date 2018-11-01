import React, { Component } from "react";
import { Form, Row, Col } from "antd";
import styled from "styled-components";
import SelectFormItem from "./forms/selectFormItem";
import SearchButton from "./forms/searchButton";
import { stockOptions, colorDetailOptions } from "./filterDetailOptions";
import IntlMessages from "../../../../components/utility/intlMessages";

const filterLayout = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12
};

const CenterAlign = styled(Row)`
  text-align: center;
`;

const ResetFormLink = styled.a`
  line-height: 40px;
`;

const defaultState = {
  stock: 1,
  colorDetail: 1
};

class FilterDetail extends Component {
  state = {
    ...defaultState
  };

  handleChange = (keyName, value) => {
    this.setState({ [keyName]: value });
  };
  handleSearch = () => {};
  handleReset = () => {
    this.setState({ ...defaultState });
  };

  render() {
    return (
      <Form onSubmit={this.handleSearch}>
        <Row gutter={16}>
          <Col {...filterLayout}>
            <SelectFormItem
              keyName="stock"
              value={this.state.stock}
              handleChange={this.handleChange}
              options={stockOptions}
            />
            <SelectFormItem
              keyName="colorDetail"
              value={this.state.colorDetail}
              handleChange={this.handleChange}
              options={colorDetailOptions}
            />
          </Col>
          <Col {...filterLayout}>
            <CenterAlign>
              <Col {...filterLayout}>
                <ResetFormLink onClick={this.handleReset}>
                  <IntlMessages id="productCategoryTop.filterForm.clear" />
                </ResetFormLink>
              </Col>
              <Col {...filterLayout}>
                <SearchButton onClick={this.handleSearch} />
              </Col>
            </CenterAlign>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default FilterDetail;
