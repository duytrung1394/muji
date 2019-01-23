import React from "react";
import styled from "styled-components";
import { Link } from "../../shared/form/link";
import { Icon, Rate } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

const ReviewStyle = styled.li`
  border: 1px solid #ccc;
  padding: 15px 20px;
  margin-top: 10px;
`;

const ReviewContent = styled.div`
  position: relative;
`;

const Data = styled.ul`
  list-style: none;
  padding: 15px 0;
  display: flex;
  align-items: baseline;
`;

const StarWrap = styled.span`
  color: #f60;
  position: relative;
  padding: 0;
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
`;

const StarWrapper = styled(StarWrap)`
  & .ant-rate {
    color: #f60;
  }
`;

const Star = styled(Rate)`
  & .ant-rate-star {
    font-size: 13px;
  }
`;

const SubDate = styled.li`
  margin-left: auto;
  font-size: 12px;
`;

const LinkStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%",
  zIndex: "10"
};

const CommentTitle = styled.span`
  font-size: 16px;
  font-weigth: 600;
  color: #333;
`;

const Comment = styled.p`
  font-size: 14px;
  color: #707070;
  margin-top: 10px;
`;

const UserIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const UserName = styled.span`
  font-size: 14px;
  color: #333;
  margin-left: 10px;
`;

const InfoList = styled.ul`
  position: relative;
  list-style: none;
  padding: 0;
`;

const IconStyle = styled(Icon)`
  color: gray;
  padding-right: 5px;
`;

const InfoLink = styled.a`
  color: 6aaefa;
  &:hover {
    color: 6aaefa;
  }
`;

const ReviewAction = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

const UsefulButton = styled.button`
  border-radius: 12px;
  font-size: 11px;
  font-weight: bold;
  color: #333;
  border-color: #ddd;
  margin-left: 5px;
  outline: none;
  height: 25;
  weight: 100;
`;

const Item = ({ entity }) => (
  <ReviewStyle>
    <ReviewContent>
      <div>
        <Data>
          <li>
            <StarWrapper>
              <Star disabled defaultValue={entity.star} />
            </StarWrapper>
          </li>
          <SubDate>{entity.upload_date}</SubDate>
        </Data>
        <Link to={`store/review/detail/${entity.jancode}`}>
          <CommentTitle>{entity.title}</CommentTitle>
          <Comment>{entity.detail_comment}</Comment>
        </Link>
      </div>
      <Link to={``} style={LinkStyle} />
      <UserIcon
        src="https://www.muji.com/jp/store/review/img/avatar_default.png"
        alt=""
      />
      <UserName>
        <IntlMessages id="customerReview.userName" />
      </UserName>
    </ReviewContent>
    <InfoList>
      <li>
        <IconStyle type="message" />
        <InfoLink to={`store/review/detail/${entity.jancode}`}>
          <span>{entity.evaluations_comment_count}</span>
          <IntlMessages id="customerReview.comment" />
        </InfoLink>
      </li>
      <li>
        <IconStyle type="like" />
        <InfoLink to={`store/review/detail/${entity.jancode}`}>
          <span>{entity.count_helpful}</span>
          <IntlMessages id="customerReview.usefulThink" />
        </InfoLink>
      </li>
    </InfoList>
    <ReviewAction>
      <IntlMessages id="customerReview.usefulReview" />
      <UsefulButton>
        <IntlMessages id="customerReview.useful" />
      </UsefulButton>
    </ReviewAction>
  </ReviewStyle>
);

export default Item;
