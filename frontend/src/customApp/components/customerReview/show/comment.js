import React, { Fragment } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Link } from "react-router-dom";
import { Icon, Popover } from "antd";

const UserData = styled.div`
  position: relative;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
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

const ActionIcon = styled.div`
  margin-right: 10px;
  font-size: 16px;
  color: #aaa;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 10px;
  z-index: 10;
`;

const Comments = styled.p`
  font-size: 14px;
  color: #333;
  margin-top: 10px;
`;

const LinkStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%",
  zIndex: "10"
};

const Comment = ({ comment }) => {
  return (
    <UserData>
      <Link to={``} style={LinkStyle} />
      <UserIcon
        src={comment.user_image}
        alt="itemImage"
        width="60"
        height="60"
      />
      <UserName>{comment.user_name}</UserName>
      <Link to={`store/review/detail/${comment.jancode}`} />
      <Comments>{comment.comment}</Comments>
      <ActionIcon>
        <Popover
          placement="bottomRight"
          content={<IntlMessages id="reviewDetail.delete" />}
          trigger="click"
        >
          <Icon type="ellipsis" />
        </Popover>
      </ActionIcon>
    </UserData>
  );
};

export default Comment;
