import React, { Component } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Link } from "react-router-dom";
import { Icon, Popover } from "antd";

const CommentTitle = styled.div`
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

const CommentArea = styled.div`
  margin-bottom: 10px;
`;

const StyledTextArea = styled.textarea`
  max-width: 650px;
  width: 90%;
  height: 40px;
  background-color: #f7f7f7;
  over-flow: scroll;
  border: none;
  padding: 10px 0 0 10px;
  resize: none;
  border-radius: 20px;
  .ant-input {
    &:focus {
      border-color: #fff;
    }
  }
`;

const PostComment = styled.div`
  position: relative;
`;

const PostButton = styled.button`
  font-size: 36px;
  position: absolute;
  top: 0;
  right: 5px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  color: #d8d8d8;
`;

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

const Comments = styled.p`
  font-size: 14px;
  color: #333;
  margin-top: 10px;
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

const NothingComment = styled.div`
  padding: 10px 0 20px;
  text-align: center;
  margin-bottom: 30px;
`;

const SeeMore = styled.div`
  text-align: center;
  color: #9e9e9e;
  font-size: 14px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const SeeMoreIcon = styled(Icon)`
  font-size: 12px;
`;

const VaridateMessage = styled.div`
  text-align: center;
  padding: 15px 0;
  font-size: 14px;
  font-weight: 600;
`;

const LinkStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%",
  zIndex: "10"
};

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  seeMore = () => {
    this.props.fetchRequest("");
  };

  render() {
    const { entities } = this.props;
    return (
      <div>
        <CommentTitle>
          <IntlMessages id="reviewDetail.comment" />
        </CommentTitle>
        <CommentArea>
          {entities &&
            entities.map((entity, index) => {
              return (
                <UserData>
                  <Link to={``} style={LinkStyle} />
                  <UserIcon
                    src={entity.user_icon}
                    alt="itemImage"
                    width="60"
                    height="60"
                  />
                  <UserName>{entity.user_name}</UserName>
                  <Link to={`store/review/detail/${entity.jancode}`} />
                  <Comments>{entity.detail_comment}</Comments>
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
            })}
          {/* <NothingComment>
                <IntlMessages id="reviewDetail.nothingComment" />
            </NothingComment> */}
          <SeeMore onClick={this.seeMore}>
            <SeeMoreIcon type="down" />
            <IntlMessages id="reviewDetail.seeMore" />
          </SeeMore>
        </CommentArea>
        <PostComment>
          <StyledTextArea placeholder="コメントする" />
          <PostButton>
            <Icon type="mail" />
          </PostButton>
          <VaridateMessage>
            <IntlMessages id="reviewDetail.varidateMessage" />
          </VaridateMessage>
        </PostComment>
      </div>
    );
  }
}

export default Comment;
