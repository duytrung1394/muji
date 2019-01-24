import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { message, Modal } from "antd";
import IntlMessages from "../../../components/utility/intlMessages";
import FavoriteItemMenu from "./itemMenu";
import FavoriteItemFooter from "./itemFooter";

const confirm = Modal.confirm;

const FavoriteItemWrapper = styled.section`
  width: calc((100% - 60px) / 3);
  margin: 20px 30px 0 0;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgb(0, 0, 0, 0.65);
  box-sizing: border-box;
  font-size: 12px;

  &:nth-child(3n) {
    margin-right: 0;
  }
`;

const FavoriteHeader = styled.div`
  margin-top: 15px;
  padding: 0 16px;
  font-size: 10px;
`;

const FavoriteHeadline = styled.div`
  color: rgb(163, 163, 163);
`;

const FavoriteTitle = styled.h2`
  width: 100%;
  margin: 0;
  line-height: 16px;
  font-size: 13px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.65);
`;

const PopoverContentWrapper = styled.ul`
  margin: -10px;
  padding: 0;
  border-bottom: 1px solid rgb(153, 153, 153);

  &:last-child {
    border-bottom: none;
  }
`;

const PopoverContent = styled.li`
  list-style-type: none;
  list-style: none;
  text-align: center;
  font-size: 12px;
  border-bottom: 1px solid #999;

  &:last-child {
    border-bottom: none;
  }

  a {
    padding: 16px 5px;
    display: block;

    &,
    &:hover {
      color: rgba(0, 0, 0, 0.65);
    }
  }
`;

class FavoriteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      popoverVisible: false
    };
  }

  stopConfirmStyle = {
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  };

  stopConfirm = () => {
    confirm({
      title: "停止しますがよろしいですか？",
      style: this.stopConfirmStyle,
      onOk() {
        message.info("停止");
      },
      oncancel() {}
    });
    this.setState({ popoverVisible: false });
  };

  FavoriteItemPopover = (
    <PopoverContentWrapper>
      <PopoverContent>
        <Link to={"#"} onClick={this.stopConfirm}>
          <IntlMessages id={"favorite.delete"} />
        </Link>
      </PopoverContent>
    </PopoverContentWrapper>
  );

  handleVisibleChange = visible => {
    if (visible) {
      this.setState({ popoverVisible: true });
    }
  };

  render() {
    const { item } = this.props;

    return (
      <FavoriteItemWrapper>
        <FavoriteHeader>
          <FavoriteHeadline>{item.headline}</FavoriteHeadline>
          <FavoriteTitle to={"#"}>{item.item_name}</FavoriteTitle>
        </FavoriteHeader>
        <FavoriteItemMenu item={item} />
        <FavoriteItemFooter item={item} />
      </FavoriteItemWrapper>
    );
  }
}

export default FavoriteItem;
