import React from "react";
import { Link } from "react-router-dom";
import { List } from "antd";
import styled from "styled-components";

const DropdownList = styled(List)`
  position: absolute !important;
  right: 0px;
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

export const Dropdown = ({ menus }) => {
  return (
    <DropdownList
      className="dropdown-list"
      bordered
      dataSource={menus}
      renderItem={item => (
        <List.Item className="dropdown-list-item">
          <Link to="/store" className="dropdown-list-item-link">
            {item}
          </Link>
        </List.Item>
      )}
    />
  );
};
