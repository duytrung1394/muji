import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List as BaseList, Popover } from "antd";
import styled from "styled-components";

const List = styled(BaseList)`
  background-color: #fff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);

  .dropdown-list-item {
    padding: 0 !important;

    .dropdown-list-item-link {
      display: block;
      width: 100%;
      padding: 12px 24px !important;
      border: none;
      font-size: 12px;
      color: gray;
      white-space: nowrap;

      &:hover {
        border-radius: 2px;
        background-color: gray;
        color: #fff;
      }
    }
  }
`;

class HeaderPopover extends Component {
  state = {
    visible: false
  };

  Content = () => {
    const { list, listType = "link" } = this.props;

    return (
      <List
        className="dropdown-list"
        bordered
        dataSource={list}
        renderItem={item => (
          <BaseList.Item className="dropdown-list-item">
            {listType === "select" ? (
              <div
                className="dropdown-list-item-link"
                onClick={() => {
                  this.onClickContentItem(item.value);
                }}
              >
                {item.text}
              </div>
            ) : (
              <Link
                className="dropdown-list-item-link"
                onClick={this.onClickContentItem}
                to={item.to}
              >
                {item.text}
              </Link>
            )}
          </BaseList.Item>
        )}
      />
    );
  };

  onClickContentItem = value => {
    this.setState({
      visible: false
    });

    if (this.props.onClick) {
      this.props.onClick(value);
    }
  };

  onVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    const {
      list,
      placement = "bottom",
      trigger = "click",
      children
    } = this.props;
    const { visible } = this.state;

    return (
      <Popover
        content={<this.Content />}
        placement={placement}
        trigger={trigger}
        visible={visible}
        onVisibleChange={this.onVisibleChange}
      >
        {children}
      </Popover>
    );
  }
}

export default HeaderPopover;
