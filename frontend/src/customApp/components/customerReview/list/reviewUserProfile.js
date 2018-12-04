import React from "react";
import { Select } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: baseline;
  padding: 10px 15px;
  margin: 0px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
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

const Total = styled.span`
  margin-left: 5px;
`;

const ReviewUserProfile = props => {
  return (
    <div>
      <div>
        <span>
          <img
            src="https://www.muji.com/jp/store/review/img/avatar_default.png"
            alt=""
          />
        </span>
      </div>
      <div className="review__user__name">user_name</div>
      <ul className="review__user__follow">
        <li>
          <span id="anotherFollower" className="num">
            0
          </span>フォロワー
        </li>
        <li>
          <span id="anotherFollow" className="num">
            5
          </span>フォロー中
        </li>
      </ul>
      <div class="m-common__review__total">
        <ul>
          <li className="lsf-icon balloons">
            レビュー数<span id="anotherReviewCount" className="num">
              6
            </span>
          </li>
          <li className="lsf-icon good">
            「役に立った」と評価された数
            <span id="anotherReviewAvail" className="num">
              3
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReviewUserProfile;
