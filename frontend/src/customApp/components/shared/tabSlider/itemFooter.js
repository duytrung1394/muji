import React from "react";
import styled from "styled-components";
import { Icon } from "antd";
import { Link } from "react-router-dom";

const ItemFooterButtonWrapper = styled.li`
  width: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.05);
  text-align: center;
  list-style-type: none;
  list-style: none;

  &:nth-child(2n) {
    border-left: 1px solid #e5e5e5;
  }

  a,
  p {
    display: block;
    padding: 12px 24px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  a,
  a:hover,
  a:focus {
    color: rgba(0, 0, 0, 0.65);
  }

  p {
    margin-bottom: 0;
  }

  i {
    position: absolute;
    height: 14px;
    font-size: 14px;
    font-weight: bold;
    margin: auto;
    top: 0px;
    right: 3%;
    bottom: 0px;
  }
`;

/* 
アクションを子コンポーネントで指定し，その情報をもとにこちらでコンポーネントを生成する
必要に応じてActionコンポーネントは拡張していく
*/

const Action = ({ name, onClick }) => {
  return (
    <ItemFooterButtonWrapper>
      <Link to={"#"} onClick={onClick}>
        {name}
      </Link>
      <Icon type="right" />
    </ItemFooterButtonWrapper>
  );
};

const ItemFooterStyle = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
`;

const ItemFooter = ({ actions = [] }) => {
  return (
    <ItemFooterStyle>
      {actions.map((action, index) => {
        return (
          <Action key={index} name={action.name} onClick={action.onClick} />
        );
      })}
    </ItemFooterStyle>
  );
};

export default ItemFooter;
