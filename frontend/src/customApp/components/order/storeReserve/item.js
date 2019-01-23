import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Popconfirm, Icon, message } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

import imgStoreReserve1 from "../../../../image/order/store_reserve/img-reserve-1.png";
import imgStoreReserve2 from "../../../../image/order/store_reserve/img-reserve-2.png";
import imgStoreReserve3 from "../../../../image/order/store_reserve/img-reserve-3.png";

const images = {
  "img-reserve-1.png": imgStoreReserve1,
  "img-reserve-2.png": imgStoreReserve2,
  "img-reserve-3.png": imgStoreReserve3
};

const StoreReserveItemWrapper = styled.section`
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

const StoreReserveHeader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 16px;
`;

const StoreReserveTitle = styled.h2`
  width: 30%;
  margin: 0;
  line-height: 16px;
  font-size: 13px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.65);
`;

const StoreReserveState = styled.div`
  width: 70%;
  text-align: right;
  font-size: 11px;
`;

const StoreReserveItemMenu = styled.div`
  position: relative;
  margin-top: 16px;
  min-height: 139px;
  display: flex;
  flex-wrap: nowrap;
  padding: 9px 65px 9px 16px;
  border-top: 1px solid rgb(229, 229, 229);
`;

const StoreReserveItemImage = styled.div`
  max-width: 120px;
  width: 40%;

  img {
    width: 100%;

    a {
      display: block;
    }
  }
`;

const StoreReserveItemDescribeList = styled.ul`
  margin-left: 15px;
  margin-bottom: 0px;
  width: calc(80% - 15px);
  padding: 0;
  list-style: none;
`;

const StoreReserveItemDescribe = styled.li`
  line-height: 20px;

  a,
  a:hover,
  a:focus {
    text-decoration: none;
    color: rgb(0, 0, 0, 0.65);
  }
`;

const StoreReserveItemButtonWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
`;

const StoreReserveItemButton = styled.li`
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
    text-decoration: none;
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
  reStoreReserve: "order.storeReserve.reStoreReserve",
  extend: "order.storeReserve.extend",
  delete: "order.storeReserve.delete",
  cancel: "order.storeReserve.cancel"
};

const CancelButton = ({ placement, onConfirm }) => {
  let confirmText = <IntlMessages id="order.storeReserve.cancelConfirm" />;

  return (
    <StoreReserveItemButton>
      <Popconfirm
        placement={placement}
        title={confirmText}
        onConfirm={onConfirm}
        okText="はい"
        cancelText="いいえ"
      >
        <Link to={"#"} draggable={false}>
          <IntlMessages id={buttonText.cancel} />
          <Icon type="right" />
        </Link>
      </Popconfirm>
    </StoreReserveItemButton>
  );
};

const LinkButton = ({ to, textId }) => {
  return (
    <StoreReserveItemButton>
      <Link to={to} draggable={false}>
        <IntlMessages id={textId} />
        <Icon type="right" />
      </Link>
    </StoreReserveItemButton>
  );
};

const cancelConfirm = () => {
  message.info("キャンセル");
};

const StoreReserveItemFooter = ({ type }) => {
  switch (type) {
    case 1:
      return (
        <StoreReserveItemButtonWrapper>
          <CancelButton placement="top" onConfirm={cancelConfirm} />
        </StoreReserveItemButtonWrapper>
      );
    case 2:
      return (
        <StoreReserveItemButtonWrapper>
          <CancelButton placement="topLeft" onConfirm={cancelConfirm} />
          <LinkButton to={"#"} textId={buttonText.extend} />
        </StoreReserveItemButtonWrapper>
      );
    case 3:
      return (
        <StoreReserveItemButtonWrapper>
          <LinkButton to={"#"} textId={buttonText.delete} />
          <LinkButton to={"#"} textId={buttonText.reStoreReserve} />
        </StoreReserveItemButtonWrapper>
      );
  }
};

const StoreReserveItem = ({ item }) => {
  const describeList = [item.item_name, item.item_num, item.item_price];

  return (
    <StoreReserveItemWrapper>
      <StoreReserveHeader>
        <StoreReserveTitle to={"#"}>{item.store_name}</StoreReserveTitle>
        <StoreReserveState>{item.order_state}</StoreReserveState>
      </StoreReserveHeader>
      <StoreReserveItemMenu>
        <StoreReserveItemImage>
          <Link to={"#"} draggable={false}>
            <img src={images[item.img_src]} alt="" />
          </Link>
        </StoreReserveItemImage>
        <StoreReserveItemDescribeList>
          {describeList.map((describe, index) => {
            return (
              <StoreReserveItemDescribe key={index}>
                <Link to={"#"} draggable={false}>
                  {describe}
                </Link>
              </StoreReserveItemDescribe>
            );
          })}
        </StoreReserveItemDescribeList>
      </StoreReserveItemMenu>
      <StoreReserveItemFooter type={item.cancel_type} />
    </StoreReserveItemWrapper>
  );
};

export default StoreReserveItem;
