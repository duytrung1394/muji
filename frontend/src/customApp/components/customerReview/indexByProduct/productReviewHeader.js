import React, { Fragment } from "react";
import { Rate, Icon } from "antd";
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

const data = {
  url: "https://www.muji.net/img/item/4550002560928_180.jpg",
  title: "ウールシルク洗えるVネックセーター",
  rate: 4,
  evaluation: "5つ星のうち4.1",
  review: "13件のレビュー"
};

const ProductReviewHeader = () => {
  return (
    <Fragment>
      <Link to="">
        <ProductWrapper>
          <ProductIcon src={data.url} alt="" />
          <ProductItem>
            <ProductTitle>{data.title}</ProductTitle>
            <li>
              <StarWrapper>
                <Star disabled defaultValue={data.rate} />
              </StarWrapper>
              <span>{data.evaluation}</span>
            </li>
            <li>{data.review}</li>
          </ProductItem>
        </ProductWrapper>
      </Link>
      <RightIcon type="right" />
    </Fragment>
  );
};

export default ProductReviewHeader;
