import React, { Component } from "react";
import styled from "styled-components";
import { Popover } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import FilterDetail from "./filterDetail";

const FilterWrapper = styled.span`
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: 21px;
  color: #60b3fa;
`;

const filterOverlayStyle = {
  width: "100%",
  maxWidth: "1440px",
  padding: "10px",
  opacity: "0.96"
};

class Filter extends Component {
  state = {
    visible: false
  };

  onClick = () => {
    const visible = !this.state.visible;
    this.setState({ visible: visible });
  };

  render() {
    return (
      <Popover
        visible={this.state.visible}
        placement="bottomRight"
        content={<FilterDetail />}
        trigger="click"
        overlayStyle={filterOverlayStyle}
        getPopupContainer={() => document.getElementById("content")}
      >
        <FilterWrapper onClick={this.onClick}>
          {this.state.visible ? (
            <IntlMessages id="productCategoryTop.label.close" />
          ) : (
            <IntlMessages id="productCategoryTop.label.filter" />
          )}
        </FilterWrapper>
      </Popover>
    );
  }
}

export default Filter;
