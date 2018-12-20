import React, { Fragment } from "react";
import { Select, Rate, Icon } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const Link = styled.a``;

const ProductWrapper = styled.div`
  display: flex;
`;

const ProductIcon = styled.img`
  width: 60px;
  height: 60px;
  padding-right: 10px;
`;

const ProductItem = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 12px;
  color: #333;
`;

const ProductTitle = styled.li`
  font-size: 14px;
  font-weight: bold;
`;

const StarWrap = styled.div`
  color: #f60;
`;

const StarWrapper = styled(StarWrap)`
  display: inline-block;
  & .ant-rate {
    color: #f60;
  }
`;

const Star = styled(Rate)`
  & .ant-rate-star {
    font-size: 1px;
  }
`;

const RightIcon = styled(Icon)`
  color: #ddd;
  position: relative;
  bottom: 45px;
  left: 720px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: baseline;
  padding: 10px 15px;
  margin: 0px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;

const Total = styled.span`
  margin-left: 5px;
`;

const SortList = styled.li`
  margin-left: auto;
`;

const StyledSelect = styled(Select)`
  width: 200px;
  .ant-select-selection {
    border: none;
    background: none transparent;
    &:focus {
      box-shadow: none;
    }
  }
`;

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const ProductReviewHeader = ({ title, profile }) => {
  return (
    <Fragment>
      <Link to="">
        <ProductWrapper>
          <ProductIcon
            src="https://www.muji.net/img/item/4550002560928_180.jpg"
            alt=""
          />
          <ProductItem>
            <ProductTitle>
              <IntlMessages id="customerReview.list.productTitle" />
            </ProductTitle>
            <li>
              <StarWrapper>
                <Star />
              </StarWrapper>
              <span>
                <IntlMessages id="customerReview.list.fiveStarsEvaluation" />
              </span>
            </li>
            <li>
              <IntlMessages id="customerReview.list.numberOfReviews" />
            </li>
          </ProductItem>
        </ProductWrapper>
      </Link>
      <RightIcon type="right" />
      <List style={profile ? { backgroundColor: "#eee" } : { border: "none" }}>
        <li>
          <IntlMessages id="customerReview.name" />
          <Total>6</Total>
        </li>
        <SortList>
          <StyledSelect defaultValue="new" onChange={handleChange}>
            <Option value="new">
              <IntlMessages id="customerReview.newOrder" />
            </Option>
            <Option value="highUtility">
              <IntlMessages id="customerReview.usefulOrder" />
            </Option>
            <Option value="highStar">
              <IntlMessages id="customerReview.starManyOrder" />
            </Option>
            <Option value="lowStar">
              <IntlMessages id="customerReview.newFewOrder" />
            </Option>
          </StyledSelect>
        </SortList>
      </List>
    </Fragment>
  );
};

export default ProductReviewHeader;
