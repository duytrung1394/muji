import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

const StyledRow = styled(Row)`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
`;

const StyledCol = styled(Col)``;

const StarWrap = styled.span`
  color: #f60;
  position: relative;
  padding: 0;
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
`;

const ReviewItem = ({ entity }) => (
  <StyledRow type="flex" justify="normal" align="top">
    <StyledCol>
      <Link to={``}>
        <img
          src={`https://img.muji.net/img/item/${entity.jancode}_180.jpg`}
          alt=""
        />
        <span>{entity.product}</span>
      </Link>
      <div>
        <ul>
          <li>
            <StarWrap>
              {(() => {
                const stars = [];
                for (let i = 0; i < entity.star; i++) {
                  stars.push("★");
                }
                return stars;
              })()}
            </StarWrap>
          </li>
          <li>{entity.upload_date}</li>
        </ul>
        <Link to={`store/review/detail/${entity.jancode}`}>
          <span>{entity.title}</span>
          <br />
          {entity.detail_comment}
        </Link>
      </div>
      <Link to={`store/review/detail/${entity.jancode}`}>
        <span>{entity.evaluations_comment_count}</span>件のコメント
        <br />
        <span>
          {entity.evaluations_useful_count}
        </span>人が役に立ったと考えています
      </Link>
    </StyledCol>
  </StyledRow>
);

export default ReviewItem;
