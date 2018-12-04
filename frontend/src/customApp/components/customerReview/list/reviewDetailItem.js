import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon, Rate } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

const StyledItem = styled.li`
  border: 1px solid #ccc;
  padding: 0 20px 15px;
  margin: 10px;
`;

const StarWrap = styled.span`
  color: #f60;
  position: relative;
  padding: 0;
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
`;

const SubData = styled.ul`
  list-style: none;
  padding: 15px 0;
  display: flex;
  align-items: baseline;
`;

const SubDataDate = styled.li`
  margin-left: auto;
  font-size: 12px;
`;

const CommentTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const Comment = styled.p`
  font-size: 14px;
  color: #333;
  margin-top: 10px;
`;

const CommentIcon = styled(Icon)`
  color: gray;
  padding-right: 5px;
`;

const StarWrapper = styled(StarWrap)`
  & .ant-rate {
    color: #f60;
  }
`;

const Star = styled(Rate)`
  & .ant-rate-star {
    font-size: 14px;
  }
`;

const InfoList = styled.ul`
  position: relative;
  list-style: none;
  padding: 0;
`;

const UserData = styled.div`
  position:relative;
`;

const UserIcon = styled.img`
  height:40px;
  width:40px;
`

const UserName = styled.span`
  font-size: 14px;
  color: #333;
  margin-left: 10px;
  font-weight: bold;
`;

const Question = styled.li`
  font-size:12px;
  margin:10px 0 0;
`;

const UsefulButton = styled.button`
  border-radius:15px;
  border: 0.5px solid #333;
  margin-left: 5px;
  padding:3px 15px;
  background-color: #fff;
  color: #333;
`;

const UsefulSelectedButton = styled.button`
  border-radius:15px;
  border: none;
  margin-left: 5px;
  padding:3px 15px;
  background-color: #aaa;
  color: #fff;
`;

const LinkStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    zIndex: "10"
  };

const ReviewDetailItem = ({ entity }) => (
  <StyledItem>
    <div>

      <SubData>
        <li>
          <StarWrapper>
            <Star disabled defaultValue={3} />
          </StarWrapper>
        </li>
        <SubDataDate>{entity.upload_date}</SubDataDate>
      </SubData>

      <Link to={`store/review/detail/${entity.jancode}`}>
        <CommentTitle>{entity.title}</CommentTitle>
        <Comment>{entity.detail_comment}</Comment>
      </Link>
      <UserData>
        <Link to={``} style={LinkStyle} />
        <UserIcon
            src={entity.user_icon}
            alt="itemImage"
            width="60"
            height="60"
        />
        <UserName>{entity.user_name}</UserName>
        </UserData>
    </div>

    <InfoList>
      <li>
        <CommentIcon type="message" />
        <Link to={`store/review/detail/${entity.jancode}`}>
          <span>{entity.evaluations_comment_count}</span>件のコメント
        </Link>
      </li>
      <li>
        <CommentIcon type="like" />
        <Link to={`store/review/detail/${entity.jancode}`}>
          <span>{entity.evaluations_useful_count}</span>人が役に立ったと考えています
        </Link>
      </li>
      <Question>
        <IntlMessages id="reviewDetail.question" />
        { entity.selected_flg ?
        <UsefulSelectedButton><IntlMessages id="reviewDetail.usefulButton" /></UsefulSelectedButton>
        :
        <UsefulButton><IntlMessages id="reviewDetail.usefulButton" /></UsefulButton>
        }
      </Question>
    </InfoList>
  </StyledItem>
);

export default ReviewDetailItem;
