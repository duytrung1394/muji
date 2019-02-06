import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Breadcrumb } from "antd";

const ListToolbarWrapper = styled.div`
  font-size: 12px;
`;

const TotalReviewCount = styled.div`
  margin: 20px 0 10px 0;
  color: rgb(0, 0, 0);
`;

const BreadcrumbArea = styled.div`
  background-color: rgb(242, 242, 242);
  padding: 16px;
`;

const ReviewBreadcrumb = styled(Breadcrumb)`
  && {
    font-size: 11px;
    color: rgb(96, 179, 250);
  }
`;

const BoldSpan = styled.span`
  &&& {
    font-weight: bold;
    color: rgb(88, 88, 88);
  }
`;

const ListToolbar = () => {
  return (
    <ListToolbarWrapper>
      <TotalReviewCount>
        <IntlMessages id="review.all" />
        10
        <IntlMessages id="review.matter" />
        {/* 全10件 */}
      </TotalReviewCount>
      <BreadcrumbArea> 
        <ReviewBreadcrumb>
          <BoldSpan>
            <Breadcrumb.Item>
              <a href="#">
                <IntlMessages id="review.sortByNewestPost" />
              </a>
            </Breadcrumb.Item>
          </BoldSpan>
          <Breadcrumb.Item>
            <a href="#">
              <IntlMessages id="review.numberUseful" />
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="#">
              <IntlMessages id="review.aLotOfStars" />
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="#">
              <IntlMessages id="review.lessNumberOfStars" />
            </a>
          </Breadcrumb.Item>
        </ReviewBreadcrumb>
      </BreadcrumbArea>
    </ListToolbarWrapper>
  );
};
  
export default ListToolbar;