import React, { Component } from "react";
import styled from "styled-components";
import { Breadcrumb, Modal } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import SearchModal from "./searchModal"
import { NavLink } from "react-router-dom";

const SortTab = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px auto 0px;
  padding: 0 50px;

  a {
    display: flex;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
    text-decoration: none;
  }
`;

const SortBreadcrumb = styled(Breadcrumb)`
  padding: 20px 0 20px 16px !important;

  &,
  span {
    display: flex;
  }

  span {
    a,
    a:hover,
    a:focus {
      color: rgb(96, 179, 250);
    }
  }
`;

const Refine = styled.a`
  font-weight: 600;
  color: rgb(96, 179, 250);
`;

const currentPageStyle = {
  color: "rgba(0, 0, 0, 0.65)",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none"
};

const intlId = [
  "order.purchesHistory.sort.category",
  "order.purchesHistory.sort.recent",
  "order.purchesHistory.sort.lowerPrice",
  "order.purchesHistory.sort.ranking"
];

const SortModal = styled(Modal)`
  top:0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

`;

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currentPage: 0
    };
  }

  typeClick = index => {
    this.setState({ currentPage: index });
  };

  showModal = e => {
    this.setState({ modalVisible: true });
  };

  handleOk = e => {
    this.setState({ modalVisible: false });
  };

  handleCancel = e => {
    this.setState({ modalVisible: false });
  };

  render() {
    return (
      <SortTab>
        <SortBreadcrumb>
          {intlId.map((id, index) => {
            return (
              <Breadcrumb.Item key={index}>
                {
                  <NavLink
                    to={"#"}
                    style={
                      this.state.currentPage === index ? currentPageStyle : null
                    }
                    onClick={() => {
                      this.typeClick(index);
                    }}
                  >
                    <IntlMessages id={id} />
                  </NavLink>
                }
              </Breadcrumb.Item>
            );
          })}
        </SortBreadcrumb>
        <Refine onClick={this.showModal}>
          <IntlMessages id="item.search.show" />
        </Refine>
        <SortModal
          visible={this.state.modalVisible}
          footer={null}
          onCancel={this.handleCancel}
          width="400px"
        >
          <SearchModal />
        </SortModal>
      </SortTab>
    );
  }
}

export default Sort;
