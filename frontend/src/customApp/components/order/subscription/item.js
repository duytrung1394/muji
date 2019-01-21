import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { message, Modal } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import SubscriptionItemMenu from "./itemMenu";
import SubscriptionItemFooter from "./itemFooter";

const confirm = Modal.confirm;

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

class SubscriptionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      popoverVisible: false
    };
  }

  stopConfirmStyle = {
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  };

  stopConfirm = () => {
    confirm({
      title: "停止しますがよろしいですか？",
      style: this.stopConfirmStyle,
      onOk() {
        message.info("停止");
      },
      oncancel() {}
    });
    this.setState({ popoverVisible: false });
  };

  subscriptionItemPopover = (
    <PopoverContentWrapper>
      <PopoverContent>
        <Link to={"#"} onClick={this.stopConfirm}>
          <IntlMessages id={"order.subscription.ellipsisButton.stop"} />
        </Link>
      </PopoverContent>
    </PopoverContentWrapper>
  );

  handleVisibleChange = visible => {
    if (visible) {
      this.setState({ popoverVisible: true });
    }
  };

  render() {
    const { item } = this.props;

    return (
      <SubscriptionItemWrapper>
        <SubscriptionHeader>
          <SubscriptionTitle to={"#"}>{item.item_name}</SubscriptionTitle>
        </SubscriptionHeader>
        {item.order_warning ? (
          <SubscriptionOrderInfo>
            <OrderWorning>
              <IntlMessages
                id={`order.subscription.warning.code${item.order_warning}`}
              />
            </OrderWorning>
          </SubscriptionOrderInfo>
        ) : (
          <SubscriptionOrderInfo>
            <OrderInfo>
              <IntlMessages id="order.subscription.nextTime" />
              <span>：</span>
              <span>{item.order_date}</span>
            </OrderInfo>
            <OrderAddress>
              <Link to={"#"}>{item.order_address}</Link>
            </OrderAddress>
          </SubscriptionOrderInfo>
        )}
        <SubscriptionItemMenu item={item} />
        <SubscriptionItemFooter item={item} />
      </SubscriptionItemWrapper>
    );
  }
}

export default SubscriptionItem;
