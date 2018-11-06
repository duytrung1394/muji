import React, { Component } from "react";
import { Form, Row, Col } from "antd";
import styled from "styled-components";
import SelectFormItem from "./forms/selectFormItem";
import { SearchButton, ResetButton } from "./forms/button";
import { stockOptions, colorDetailOptions } from "./filterDetailOptions";

const StyledForm = styled(Form)`
  display: grid;
`;

const filterLayout = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12
};

const RightAlign = styled.div`
  text-align: right;
  button {
    margin: 15px;
  }
}
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
      <StyledForm onSubmit={this.handleSearch}>
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
          <Col {...filterLayout} />
        </Row>
        <RightAlign>
          <ResetButton onClick={this.handleReset} />
          <SearchButton onClick={this.handleSearch} />
        </RightAlign>
      </StyledForm>
    );
  }
}

export default FilterDetail;
