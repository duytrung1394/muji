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
  :before {
    margin: 4px 4px;
    display: block;
    content: " ";
    background: url(https://www.muji.net/img/common/icon-refine.svg) 0 0
      no-repeat;
    width: 22px;
    height: 16px;
  }
`;

const filterOverlayStyle = {
  width: "90%",
  maxWidth: "1200px"
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
