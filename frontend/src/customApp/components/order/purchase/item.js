import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Popconfirm, Popover, Icon, message } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import imgPurchaseHistory1 from "../../../../image/order/purchase_history/img-purchase-history-1.png";
import imgPurchaseHistory2 from "../../../../image/order/purchase_history/img-purchase-history-2.png";
import imgPurchaseHistory3 from "../../../../image/order/purchase_history/img-purchase-history-3.png";
import imgPurchaseHistory4 from "../../../../image/order/purchase_history/img-purchase-history-4.png";

const images = {
  "img-purchase-history-1.png": imgPurchaseHistory1,
  "img-purchase-history-2.png": imgPurchaseHistory2,
  "img-purchase-history-3.png": imgPurchaseHistory3,
  "img-purchase-history-4.png": imgPurchaseHistory4
};

const PurchaseItemWrapper = styled.section`
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

const PurchaseHistoryTitle = styled.h2`
  line-height: 16px;
  margin-top: 15px;
  padding: 0 16px;
  font-size: 13px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.65);
`;

const PurchaseItemInfo = styled.div`
  margin-top: 13px;
  padding: 0 16px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

const ShoppingAddress = styled.div`
  text-align: right;
  width: 30%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  a,
  a:hover,
  a:focus {
    color: rgb(96, 179, 250);
  }
`;

const OrderAddress = styled.p`
  display: inline;
  color: rgb(96, 179, 250);
`;

const PurchaseItemMenu = styled.div`
  position: relative;
  margin-top: 13px;
  min-height: 139px;
  display: flex;
  flex-wrap: nowrap;
  padding: 9px 65px 9px 16px;
  border-top: 1px solid rgb(229, 229, 229);
`;

const PurchaseItemImage = styled.div`
  max-width: 120px;
  width: 40%;

  img {
    width: 100%;

    a {
      display: block;
    }
  }
`;

const PurchaseItemDescribeList = styled.ul`
  margin-left: 15px;
  margin-bottom: 0px;
  width: calc(80% - 15px);
  padding: 0;
  list-style: none;
`;

const PurchaseItemDescribe = styled.li`
  line-height: 20px;

  a,
  a:hover,
  a:focus {
    color: rgb(0, 0, 0, 0.65);
  }
`;

const EllipsisButtonWrapper = styled.div`
  width: 49px;
  position: absolute;
  bottom: 10px;
  right: 16px;
  cursor: pointer;
`;

const EllipsisButton = styled.button`
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

const PurchaseItemButtonWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  padding: 0;
  margin: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
`;

const PurchaseItemButton = styled.li`
  width: 50%;
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

const canselButtonDisabled = {
  link: { color: "rgba(0, 0, 0, 0.4)" },
  icon: { color: "rgba(0, 0, 0, 0.09)" }
};

const intlId = [
  "order.purchaseHistory.ellipsisButton.review",
  "order.purchaseHistory.ellipsisButton.favorite",
  "order.purchaseHistory.ellipsisButton.maintenanceParts"
];

const purchaseItemPopover = (
  <PopoverContentWrapper>
    {intlId.map((id, index) => {
      return (
        <PopoverContent key={index}>
          <Link to={"#"}>
            <IntlMessages id={id} />
          </Link>
        </PopoverContent>
      );
    })}
  </PopoverContentWrapper>
);

const cancelConfirmText = (
  <IntlMessages id="order.purchaseHistory.cancelConfirm" />
);

const Item = ({ purchaseItem }) => {
  const describeList = [
    purchaseItem.order_state,
    purchaseItem.item_num,
    purchaseItem.item_color,
    purchaseItem.item_size,
    purchaseItem.item_price
  ];

  const cancelConfirm = () => {
    message.info("キャンセル");
  };

  const buttonSwitch = type => {
    let buttonText = {
      return: "order.purchaseHistory.returnProduct",
      cancel: "order.purchaseHistory.cancel"
    };

    switch (type) {
      case 1:
        return (
          <Popconfirm
            placement="topLeft"
            title={cancelConfirmText}
            onConfirm={cancelConfirm}
            okText="はい"
            cancelText="いいえ"
          >
            <Link to={"#"}>
              <IntlMessages id={buttonText.cancel} />
              <Icon type="right" />
            </Link>
          </Popconfirm>
        );
      case 2:
        return (
          <p style={canselButtonDisabled.link}>
            <IntlMessages id={buttonText.return} />
            <Icon type="right" style={canselButtonDisabled.icon} />
          </p>
        );
      case 3:
        return (
          <Link to={"#"}>
            <IntlMessages id={buttonText.return} />
            <Icon type="right" />
          </Link>
        );
    }
  };

  return (
    <PurchaseItemWrapper>
      <PurchaseHistoryTitle to={"#"}>
        {purchaseItem.item_name}
      </PurchaseHistoryTitle>
      <PurchaseItemInfo>
        <div>{purchaseItem.order_date}</div>
        <ShoppingAddress>
          {purchaseItem && purchaseItem.order_address ? (
            <OrderAddress>{purchaseItem.order_address}</OrderAddress>
          ) : (
            <Link to={"#"}>{purchaseItem.store_name}</Link>
          )}
        </ShoppingAddress>
      </PurchaseItemInfo>
      <PurchaseItemMenu>
        <PurchaseItemImage>
          <Link to={"#"}>
            <img src={images[purchaseItem.img_src]} alt="" />
          </Link>
        </PurchaseItemImage>
        <PurchaseItemDescribeList>
          {describeList.map((describe, index) => {
            return (
              <PurchaseItemDescribe key={index}>
                <Link to={"#"}>{describe}</Link>
              </PurchaseItemDescribe>
            );
          })}
        </PurchaseItemDescribeList>
        <EllipsisButtonWrapper>
          <Popover
            placement="topRight"
            content={purchaseItemPopover}
            trigger="click"
          >
            <EllipsisButton>
              <Icon type="ellipsis" />
            </EllipsisButton>
          </Popover>
        </EllipsisButtonWrapper>
      </PurchaseItemMenu>
      <PurchaseItemButtonWrapper>
        <PurchaseItemButton>
          {buttonSwitch(purchaseItem.cancel_type)}
        </PurchaseItemButton>
        <PurchaseItemButton>
          <Link to={"#"}>
            <IntlMessages id="order.purchaseHistory.itemDetails" />
            <Icon type="right" />
          </Link>
        </PurchaseItemButton>
      </PurchaseItemButtonWrapper>
    </PurchaseItemWrapper>
  );
};

export default Item;
