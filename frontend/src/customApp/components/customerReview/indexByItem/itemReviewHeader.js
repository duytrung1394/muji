import React, { Fragment } from "react";
import { Rate, Icon } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const Link = styled.a``;

const ItemWrapper = styled.div`
  display: flex;
`;

const ItemIcon = styled.img`
  width: 60px;
  height: 60px;
  padding-right: 10px;
`;

const ItemItem = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 12px;
  color: #333;
`;

const ItemTitle = styled.li`
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
  evaluation: "4.1",
  review: "13"
};

const ItemReviewHeader = () => {
  return (
    <Fragment>
      <Link to="">
        <ItemWrapper>
          <ItemIcon src={data.url} alt="" />
          <ItemItem>
            <ItemTitle>{data.title}</ItemTitle>
            <li>
              <StarWrapper>
                <Star disabled defaultValue={data.rate} />
              </StarWrapper>
              <IntlMessages id="customerReview.fiveStarsEvaluation" />
              {data.evaluation}
            </li>
            <li>
              {data.review}
              <IntlMessages id="customerReview.ReviewCount" />
            </li>
          </ItemItem>
        </ItemWrapper>
      </Link>
      <RightIcon type="right" />
    </Fragment>
  );
};

export default ItemReviewHeader;
