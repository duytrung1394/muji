import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon, Rate, Popover } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

const ItemsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledItem = styled.li`
  position: relative;
  border: 1px solid #ccc;
  padding: 0 20px 15px;
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
  position: relative;
  margin-bottom: 10px;
`;

const UserIcon = styled.img`
  height: 40px;
  width: 40px;
`;

const UserName = styled.span`
  font-size: 14px;
  color: #333;
  margin-left: 10px;
  font-weight: bold;
`;

const TagList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0 0 10px;
  padding: 0;
`;

const TagItem = styled.li``;

const TagImg = styled.img`
  width: 120px;
  height: 120px;
`;

const Question = styled.div`
  font-size: 12px;
  margin: 10px 0 0;
`;

const UsefulButton = styled.button`
  border-radius: 15px;
  border: 0.5px solid #333;
  margin-left: 5px;
  padding: 3px 15px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
`;

const UsefulSelectedButton = styled.button`
  border-radius: 15px;
  border: none;
  margin-left: 5px;
  padding: 3px 15px;
  background-color: #aaa;
  color: #fff;
  cursor: pointer;
`;

const ActionIcons = styled.ul`
  position: absolute;
  right: 10px;
  bottom: 10px;
  list-style: none;
  display: flex;
`;

const ActionIcon = styled.li`
  margin-right: 10px;
  font-size: 16px;
  color: #aaa;
  cursor: pointer;
`;

const LinkStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%",
  zIndex: "10"
};

const ReviewDetailItems = ({ entity, user }) => (
  <ItemsList>
    <StyledItem>
      <div>
        <SubData>
          <li>
            <StarWrapper>
              <Star disabled defaultValue={entity.star} />
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
            src={user.user_image}
          />
          <UserName>{user.user_name}</UserName>
        </UserData>
      </div>
      <TagList>
        {entity.tag_imgs && entity.tag_imgs.map((imgCode, index) => {
          return (
            <TagItem key={index}>
              <Link to={``}>
                <TagImg
                  src={`https://img.muji.net/img/item/${imgCode}_180.jpg`}
                  alt="itemImage"
                />
              </Link>
            </TagItem>
          );
        })}
      </TagList>
      <InfoList>
        <li>
          <CommentIcon type="message" />
          <Link to={``}>
            {/* <span>{entity.comments.count}</span> */}
            <IntlMessages id="reviewDetail.totalComment" />
          </Link>
        </li>
        <li>
          <CommentIcon type="like" />
          <Link to={``}>
            <span>{entity.count_helpful}</span>
            <IntlMessages id="reviewDetail.totalUsefull" />
          </Link>
        </li>
      </InfoList>
      <Question>
        <IntlMessages id="reviewDetail.question" />
        {entity.selected_flg ? (
          <UsefulButton>
            <IntlMessages id="reviewDetail.usefulButton" />
          </UsefulButton>
        ) : (
          <UsefulSelectedButton>
            <IntlMessages id="reviewDetail.usefulButton" />
          </UsefulSelectedButton>
        )}
      </Question>
      <ActionIcons>
        <ActionIcon>
          <Icon type="paper-clip" />
        </ActionIcon>
        <ActionIcon>
          <Popover
            placement="bottomRight"
            content={<IntlMessages id="reviewDetail.delete" />}
            trigger="click"
          >
            <Icon type="ellipsis" />
          </Popover>
        </ActionIcon>
      </ActionIcons>
    </StyledItem>
  </ItemsList>
);

export default ReviewDetailItems;
