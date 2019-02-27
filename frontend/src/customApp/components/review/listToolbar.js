import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const ListToolbarWrapper = styled.div`
  font-size: 12px;
  margin-bottom: 20px;
`;

const TotalReviewCount = styled.div`
  margin: 20px 0 10px 0;
  color: rgb(0, 0, 0);
`;

const ReviewBreadcrumbArea = styled.div`
  background-color: rgb(242, 242, 242);
  padding: 16px;
`;

const ReviewBreadcrumb = styled(Breadcrumb)`
  &&& {
    font-size: 11px;
  }
`;

const BoldSpan = styled.span`
  &&& {
    font-weight: bold;
    color: rgb(88, 88, 88);
  }
`;

const ListToolbar = ({ totalReviewCount }) => {
  return (
    <ListToolbarWrapper>
      <TotalReviewCount>
        <IntlMessages id="review.all" />
        {totalReviewCount}
        <IntlMessages id="review.matter" />
      </TotalReviewCount>
      <ReviewBreadcrumbArea>
        <ReviewBreadcrumb>
          <Breadcrumb.Item>
            <Link to={"#"}>
              <BoldSpan>
                <IntlMessages id="review.sortByNewestPost" />
              </BoldSpan>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={"#"}>
              <IntlMessages id="review.numberUseful" />
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={"#"}>
              <IntlMessages id="review.aLotOfStars" />
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={"#"}>
              <IntlMessages id="review.lessNumberOfStars" />
            </Link>
          </Breadcrumb.Item>
        </ReviewBreadcrumb>
      </ReviewBreadcrumbArea>
    </ListToolbarWrapper>
  );
};

export default ListToolbar;
