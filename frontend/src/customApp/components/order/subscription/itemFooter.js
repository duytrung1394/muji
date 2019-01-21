import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Popconfirm, Icon, message } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

const SubscriptionItemButtonWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
`;

const SubscriptionItemButton = styled.li`
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
  skip: "order.subscription.skip",
  change: "order.subscription.change",
  delete: "order.subscription.delete",
  resume: "order.subscription.resume"
};

const DeleteButton = ({ placement, onConfirm }) => {
  let confirmText = <IntlMessages id="order.subscription.deleteConfirm" />;

  return (
    <SubscriptionItemButton>
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
    </SubscriptionItemButton>
  );
};

const LinkButton = ({ to, textId }) => {
  return (
    <SubscriptionItemButton>
      <Link to={to}>
        <IntlMessages id={textId} />
        <Icon type="right" />
      </Link>
    </SubscriptionItemButton>
  );
};

const cancelConfirm = () => {
  message.info("削除");
};

const SubscriptionItem = ({ item }) => {
  switch (item.cancel_type) {
    case 1:
      return (
        <SubscriptionItemButtonWrapper>
          <LinkButton to={"#"} textId={buttonText.skip} />
          <LinkButton to={"#"} textId={buttonText.change} />
        </SubscriptionItemButtonWrapper>
      );
    case 2:
      return (
        <SubscriptionItemButtonWrapper>
          <DeleteButton placement="topLeft" onConfirm={cancelConfirm} />
          <LinkButton to={"#"} textId={buttonText.resume} />
        </SubscriptionItemButtonWrapper>
      );
  }
};

export default SubscriptionItem;
