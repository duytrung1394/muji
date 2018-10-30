import React, { Component } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import SearchDetail from "./searchDetail";

const RefineWrapper = styled.span`
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

const SearchDetailModal = styled.div`
  display: ${props => (props.visible ? "block" : "none")};
  position: absolute;
  z-index: 1;
  left: 0;
  width: 100%;
  overflow: auto;
  background-color: rgba(255, 255, 255, 0.96);
  animation: search-detail-animate 0.2s linear;
  @keyframes search-detail-animate {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.96;
    }
  }
`;

class Refine extends Component {
  state = {
    visible: false
  };

  onClick = () => {
    const visible = !this.state.visible;
    this.setState({ visible: visible });
  };

  render() {
    return (
      <div>
        <RefineWrapper onClick={this.onClick}>
          {this.state.visible ? (
            <IntlMessages id="productCategoryTop.label.close" />
          ) : (
            <IntlMessages id="productCategoryTop.label.refine" />
          )}
        </RefineWrapper>
        <SearchDetailModal visible={this.state.visible}>
          <SearchDetail />
        </SearchDetailModal>
      </div>
    );
  }
}

export default Refine;
