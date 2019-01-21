import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Popconfirm, Icon, message } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

const ProductItemButtonWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
`;

const ProductItemButton = styled.li`
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
  a:hover {
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

const buttonText = {
  add: "favorite.product.add",
  delete: "favorite.product.delete",
};

const DeleteButton = ({ placement, onConfirm }) => {
  let confirmText = <IntlMessages id="favorite.product.deleteConfirm" />;

  return (
    <ProductItemButton>
      <Popconfirm
        placement={placement}
        title={confirmText}
        onConfirm={onConfirm}
        okText="はい"
        cancelText="いいえ"
      >
        <Link to={"#"}>
          <IntlMessages id={buttonText.delete} />
          <Icon type="right" />
        </Link>
      </Popconfirm>
    </ProductItemButton>
  );
};

const LinkButton = ({ to, textId }) => {
  return (
    <ProductItemButton>
      <Link to={to}>
        <IntlMessages id={textId} />
        <Icon type="right" />
      </Link>
    </ProductItemButton>
  );
};

const cancelConfirm = () => {
  message.info("削除");
};

const ProductItem = ({ item }) => {
  switch (item.favorite_type) {
    case 1:
      return (
        <ProductItemButtonWrapper>
          <DeleteButton placement="topLeft" onConfirm={cancelConfirm} />
          <LinkButton to={"#"} textId={buttonText.add} />
        </ProductItemButtonWrapper>
      );
    case 2:
    case 3:
      return (
        <ProductItemButtonWrapper>
          <DeleteButton placement="top" onConfirm={cancelConfirm} />
        </ProductItemButtonWrapper>
      );
  }
};

export default ProductItem;
