import React, { Component } from "react";
import styled from "styled-components";
import { Icon, Popover } from "antd";
import Link from "../../slider/link";

const EllipsisButtonWrapper = styled.div`
  width: 49px;
  position: absolute;
  bottom: 10px;
  right: 16px;
  cursor: pointer;
`;

const Ellipsis = styled.button`
  height: 49px;
  width: 49px;
  border-radius: 50%;
  box-shadow: 0 1px 3px 0 rgb(0, 0, 0, 0.65);
  font-size: 30px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.36);
  border: 1px solid rgba(0, 0, 0, 0.36);

  i {
    position: absolute;
    height: 30px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    margin: auto;
    font-size: 30px;
    font-weight: bold;
  }
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
    &:hover,
    &:focus {
      color: rgba(0, 0, 0, 0.65);
      text-decoration: none;
    }
  }
`;

const ActionsList = ({ actions, hidePopover }) => {
  return (
    <PopoverContentWrapper>
      {actions.map((action, index) => {
        return (
          <PopoverContent key={index}>
            <Link
              to={"#"}
              onClick={
                action.onClick &&
                (() => {
                  hidePopover();
                  action.onClick();
                })
              }
            >
              {action.name}
            </Link>
          </PopoverContent>
        );
      })}
    </PopoverContentWrapper>
  );
};

class ActionListButton extends Component {
  state = {
    visible: false
  };
  hidePopover = () => {
    this.setState({ visible: false });
  };
  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  render() {
    const { actions = [] } = this.props;

    if (actions.length === 0) {
      return null;
    }

    return (
      <EllipsisButtonWrapper>
        <Popover
          placement="topRight"
          content={
            <ActionsList actions={actions} hidePopover={this.hidePopover} />
          }
          trigger="click"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
        >
          <Ellipsis>
            <Icon type="ellipsis" />
          </Ellipsis>
        </Popover>
      </EllipsisButtonWrapper>
    );
  }
}

const ItemMainStyle = styled.div`
  position: relative;
  margin-top: 9px;
  min-height: 119px;
  display: flex;
  flex-wrap: nowrap;
  padding: 9px 65px 9px 16px;
  border-top: 1px solid rgb(229, 229, 229);
  flex-grow: 1;
`;

const ItemImage = styled.div`
  max-width: 120px;
  width: 40%;
  height: auto;

  img {
    width: 100%;

    a {
      display: block;
    }
  }
`;

const ItemMain = ({ content, img, imgUrl = "#", actions }) => {
  return (
    <ItemMainStyle>
      <ItemImage>
        <Link to={imgUrl}>
          <img src={img} />
        </Link>
      </ItemImage>
      {content}
      <ActionListButton actions={actions} />
    </ItemMainStyle>
  );
};

export default ItemMain;
