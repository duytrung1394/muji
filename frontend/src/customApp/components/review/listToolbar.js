import React, { Component } from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  font-size: 12px;
  margin-bottom: 20px;
`;

const DataCount = styled.div`
  margin: 20px 0 10px 0;
  color: rgb(0, 0, 0);
`;

const Sort = styled.div`
  background-color: rgb(242, 242, 242);
  padding: 16px;
`;

const SortBreadcrumb = styled(Breadcrumb)`
  &&& {
    font-size: 11px;
  }
`;

const currentPageStyle = {
  color: "rgb(88, 88, 88)",
  fontweight: "bold",
  textDecoration: "none"
};

const intlId = [
  "review.sort.new",
  "review.sort.useful",
  "review.sort.manyStars",
  "review.sort.fewStars"
];

class ListToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
  }

  typeClick = index => {
    this.setState({ currentPage: index });
  };

  render() {
    const { totalReviews } = this.props;
    return (
      <Wrapper>
        <DataCount>{totalReviews}</DataCount>
        <Sort>
          <SortBreadcrumb>
            {intlId.map((id, index) => {
              return (
                <Breadcrumb.Item key={index}>
                  {
                    <NavLink
                      to={"#"}
                      style={
                        this.state.currentPage === index
                          ? currentPageStyle
                          : null
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
        </Sort>
      </Wrapper>
    );
  }
}

export default ListToolbar;
