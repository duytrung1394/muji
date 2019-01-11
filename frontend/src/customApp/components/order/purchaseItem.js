import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Row, Col, Popover, Button, Icon} from "antd";

const OrderWrapper = styled.section`
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

const OrderTitle = styled.h2`
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

const OrderInfo = styled.div`
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

  a, a:hover, a:focus {
    color: rgb(96, 179, 250);
  }
`;

const StoreName = styled.p`
  display: inline;
  color: rgb(96, 179, 250);
`;

const OrderMenu = styled.div`
  position: relative;
  margin-top: 13px;
  min-height: 139px;
  display: flex;
  flex-wrap: nowrap;
  padding: 9px 65px 9px 16px;
  border-top: 1px solid rgb(229, 229, 229);
`;

const OrderImage = styled.div`
  max-width: 120px;
  width: 40%;
`;

const OrderDescribeList = styled.ul`
  margin-left: 15px;
  margin-bottom: 0px;
  width: calc(80% - 15px);
  padding: 0;  
  list-style: none;
`;

const OrderDescribe = styled.li`
  line-height: 20px;

  a, a:hover, a:focus {
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

const OrderButtonWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  padding: 0;
  margin: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
`;

const OrderButton = styled.li`
  width: 50%;
  position: relative;
  background: rgba(0, 0, 0, 0.05);
  text-align: center;
  list-style-type: none;
  list-style: none;

  &:nth-child(2n) {
    border-left: 1px solid #e5e5e5;
  }

  a {
    display: block;
    padding: 12px 24px;
    position: relative;
    top: 50%;
    transform: translateY(-50%); 

    &, &:hover{
      color: rgba(0, 0, 0, 0.65);
    }
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

const OrderPopoverWrapper = styled.ul`
  margin: -10px;
  padding: 0;
  border-bottom: 1px solid rgb(153, 153, 153);

  &:last-child {
    border-bottom: none;
  }

`;

const OrderPopoverContent = styled.li`
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

    &, &:hover {
      color: rgba(0, 0, 0, 0.65);
    }
  }
`;

const orderPopover = (
  <OrderPopoverWrapper>
    <OrderPopoverContent><Link to={"#"}>レビューの投稿</Link></OrderPopoverContent>
    <OrderPopoverContent><Link to={"#"}>お気に入り</Link></OrderPopoverContent>
    <OrderPopoverContent><Link to={"#"}>メンテナンスパーツを見る</Link></OrderPopoverContent>
  </OrderPopoverWrapper>
);

const PurchaseItem = ({purchaseItem}) => {
  const describeList = [
    purchaseItem.order_state,
    purchaseItem.item_num,
    purchaseItem.item_color,
    purchaseItem.item_size,
    purchaseItem.item_price,
  ]
  return(
    <OrderWrapper>
      <OrderTitle to={"#"}>
        {purchaseItem.item_name}
      </OrderTitle>
      <OrderInfo>
        <div>{purchaseItem.order_date}</div>
        <ShoppingAddress>
          {
            purchaseItem && purchaseItem.store_name ? (
              <StoreName>{purchaseItem.store_name}</StoreName>
            ) : (
              <Link to={"#"}>{purchaseItem.order_address}</Link>
            )
          }
        </ShoppingAddress>
      </OrderInfo>
      <OrderMenu>
        <OrderImage>
          <Link to={"#"}>
            {/* <img src={purchaseItem.img_src} alt=""/> */}
            <img src={purchaseItem.img_src} alt="" />
          </Link>
        </OrderImage>
        <OrderDescribeList>
          {
            describeList.map((describe, index) => {
              return (
                <OrderDescribe key={index}>
                  <Link to={"#"}>{describe}</Link>
                </OrderDescribe>
              );
            })
          }
        </OrderDescribeList>
        <EllipsisButtonWrapper>
          <Popover
            placement="topRight"
            content={orderPopover}
            trigger="click">
              <EllipsisButton>
                <Icon type="ellipsis"/>
              </EllipsisButton>
          </Popover>
        </EllipsisButtonWrapper>
      </OrderMenu>
      <OrderButtonWrapper>
        <OrderButton>
          <Link to={"#"} style={purchaseItem.cancel_button_disabled ? {color: "rgba(0, 0, 0, 0.4)"} : null}>
            {purchaseItem.cancel_button}
            <Icon type="right" style={purchaseItem.cancel_button_disabled ? {color: "rgba(0, 0, 0, 0.09)"} : null}/>
          </Link>
        </OrderButton>
        <OrderButton>
          <Link to={"#"}>
            購入履歴詳細<Icon type="right" />
          </Link>
        </OrderButton>
      </OrderButtonWrapper>
    </OrderWrapper>
  );
}

export default PurchaseItem;