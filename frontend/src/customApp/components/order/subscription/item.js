import React, {Component} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Popconfirm, Icon, message, Popover, Modal, Button } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

import imgSubscription1 from "../../../../image/order/subscription/img-subscription-pro-1.png";

const confirm = Modal.confirm;

const images = {
  "img-subscription-pro-1.png": imgSubscription1,
};

const SubscriptionItemWrapper = styled.section`
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

const SubscriptionHeader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding: 0 16px;
`;

const SubscriptionTitle = styled.h2`
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

const SubscriptionState = styled.div`
  width: 70%;
  text-align: right;
  font-size: 11px;
`;

const SubscriptionItemMenu = styled.div`
  position: relative;
  margin-top: 9px;
  min-height: 119px;
  display: flex;
  flex-wrap: nowrap;
  padding: 9px 65px 9px 16px;
  border-top: 1px solid rgb(229, 229, 229);
`;

const SubscriptionItemImage = styled.div`
  max-width: 120px;
  width: 40%;

  img {
    width: 100%;

    a {
      display: block;
    }
  }
`;

const SubscriptionItemDescribeList = styled.ul`
  margin-left: 15px;
  margin-bottom: 0px;
  width: calc(80% - 15px);
  padding: 0;
  list-style: none;
  line-height: 20px;
`;

const SubscriptionItemDescribe = styled.li`
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

const SubscriptionItemFooter = ({ type }) => {
  switch (type) {
    case 1: // 継続
      return (
        <SubscriptionItemButtonWrapper>
          <LinkButton to={"#"} textId={buttonText.skip} />
          <LinkButton to={"#"} textId={buttonText.change} />
        </SubscriptionItemButtonWrapper>
      );
    case 2: // 停止
      return (
        <SubscriptionItemButtonWrapper>
          <DeleteButton placement="topLeft" onConfirm={cancelConfirm} />
          <LinkButton to={"#"} textId={buttonText.resume} />
        </SubscriptionItemButtonWrapper>
      );
  }
};

const SubscriptionOrderInfo = styled.ul`
  display: flex;
  width: 100%;
  margin-top: 13px;
  margin-bottom: 0;
  padding: 0 16px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const OrderInfo = styled.li`
  width: 73%;
  list-style-type: none;
  list-style; none;
`;

const OrderAddress = styled.li`
  width: 27%;
  tect-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  list-style-type: none;
  list-style: none;

  a,
  a:hover,
  a:focus {
    color: rgb(96, 179, 250);
  }
`;

const OrderWorning = styled.li`
  color: rgb(139, 26, 39);
  list-style-type: none;
  list-style: none;
`;

const DescribePriceWrapper = styled.li`
  span {
    display: inline-block;
    white-space: nowrap;
  }
`;

const DescribePricePresent = styled.span`
  color: rgb(139, 26, 39);
  font-weight: 600;
`;

const DescribeDiscount = styled.li`
  font-size: 10px;
`;

const DiscribePriceArrow = styled.span`
  margin: 0 5px;
`;

class SubscriptionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      popoverVisible: false
    }
  }

  stopConfirmStyle = {
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  }

  stopConfirm = () => {
    confirm({
      title: "停止しますがよろしいですか？",
      style: this.stopConfirmStyle,
      onOk() {
        message.info('停止');
      },
      oncancel() {}
    });
    this.setState({popoverVisible: false});
  }
  
  subscriptionItemPopover = (
    <PopoverContentWrapper>
      <PopoverContent>
        <Link to={"#"} onClick={this.stopConfirm}>
          <IntlMessages id={"order.subscription.ellipsisButton.stop"} />
        </Link>
      </PopoverContent>
    </PopoverContentWrapper>
  );

  handleVisibleChange = (visible) => {
    if (visible) {
      this.setState({popoverVisible: true});
    }
  }
  
  render() {
    const {item} = this.props;
    const describeList = [
      item.order_frequency,
      item.item_num
    ];

    return (
      <SubscriptionItemWrapper>
        <SubscriptionHeader>
          <SubscriptionTitle to={"#"}>{item.item_name}</SubscriptionTitle>
        </SubscriptionHeader>
        {
          item.order_warning ? (
            <SubscriptionOrderInfo>
              <OrderWorning>
                <IntlMessages id={`order.subscription.warning.code${item.order_warning}`} />
              </OrderWorning>
            </SubscriptionOrderInfo>
          ) : (
            <SubscriptionOrderInfo>
              <OrderInfo>
                <IntlMessages id="order.subscription.nextTime" />
                <span>：</span>
                <span>{item.order_date}</span>
              </OrderInfo>
              <OrderAddress><Link to={"#"}>{item.order_address}</Link></OrderAddress>
            </SubscriptionOrderInfo>
          )
        }
        <SubscriptionItemMenu>
          <SubscriptionItemImage>
            <Link to={"#"}>
              <img src={images[item.img_src]} alt="" />
            </Link>
          </SubscriptionItemImage>
          <SubscriptionItemDescribeList>
            {describeList.map((describe, index) => {
              return (
                <SubscriptionItemDescribe key={index}>
                  <Link to={"#"}>{describe}</Link>
                </SubscriptionItemDescribe>
              );
            })}
              {item.item_price_present ? (
                <DescribePriceWrapper>
                  <span style={{textDecoration: "line-through"}}>{item.item_price}</span>
                  <DiscribePriceArrow>→</DiscribePriceArrow>
                  <DescribePricePresent>{item.item_price_present}</DescribePricePresent>
                </DescribePriceWrapper>
              ):(
                <DescribePriceWrapper>
                  <span>{item.item_price}</span>
                </DescribePriceWrapper>
              )}
            <DescribeDiscount>{item.item_discount}</DescribeDiscount>
          </SubscriptionItemDescribeList>
          {item.cancel_type === 1 ? (
            <EllipsisButtonWrapper>
              <Popover
                placement="topRight"
                content={this.subscriptionItemPopover}
                trigger="click"
                visible={this.state.popoverVisible}
                onVisibleChange={this.handleVisibleChange}
              >
                <EllipsisButton>
                  <Icon type="ellipsis" />
                </EllipsisButton>
              </Popover>
            </EllipsisButtonWrapper>
          ) : null}
        </SubscriptionItemMenu>
        <SubscriptionItemFooter type={item.cancel_type} />
      </SubscriptionItemWrapper>
    )
  }
};

export default SubscriptionItem;
