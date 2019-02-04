import React, { Component } from "react";
import { Link } from "react-router-dom";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";
import {
  ItemMain as ItemMainWrapper,
  ItemImage,
  ItemDescribeList,
  ItemDescribe,
  EllipsisButton,
  PopoverContent,
  PopoverContentWrapper,
  DescribePriceWrapper,
  DescribePricePresent,
  DescribePriceArrow,
  DescribeDiscount
} from "../../shared/tabSlider/tabSliderItem";
import { Modal, message } from "antd";

import imgSubscription1 from "../../../../image/order/subscription/img-subscription-pro-1.png";

const images = {
  "img-subscription-pro-1.png": imgSubscription1
};

const DeleteModalButton = styled.p`
  max-width: 300px;
  margin: 20px auto 0;
  text-align: center;

  button {
    border: 1px solid rgb(127, 0, 25);
    border-radius: 20px;
    box-shadow: 0 1px 3px rgba(88, 88, 88, 0.3);
    font-size: 12px;
    width: 100%;
    padding: 10px;
    outline: none;
  }

  button,
  button:hover,
  button:focus {
    color: rgb(127, 0, 25);
    text-decoration: none;
  }
`;

const DeleteConfirmMessage = styled.p`
  text-align: center;
`;

const DeleteModalWrapper = styled(Modal)`
  && {
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .ant-modal-content {
    width: 100%;

    & .ant-modal-body {
      padding: 16px;
    }
  }
`;

const DeleteModal = ({ visible, onOk, onCancel }) => {
  return (
    <DeleteModalWrapper
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={600}
    >
      <DeleteConfirmMessage>
        <IntlMessages id="order.subscription.deleteConfirm" />
      </DeleteConfirmMessage>
      <DeleteModalButton>
        <button to={"#"} onClick={onOk}>
          <IntlMessages id="order.subscription.delete" />
        </button>
      </DeleteModalButton>
    </DeleteModalWrapper>
  );
};



class ItemMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverVisible: false,
      stopModalVisible: false
    };
  }

  handleVisibleChange = visible => {
    this.setState({ popoverVisible: visible });
  };

  modalOpen = () => {
    this.setState({ stopModalVisible: true, popoverVisible: false });
  };

  handleOk = () => {
    message.info("削除");
    this.setState({ stopModalVisible: false });
  };

  handleCancel = () => {
    this.setState({ stopModalVisible: false });
  };

  favoriteItemPopover = () => {
    return(
      <PopoverContentWrapper>
        <PopoverContent>
          <Link to={"#"} draggable={false} onClick={()=>{this.modalOpen()}}>
            <IntlMessages id={"order.subscription.ellipsisButton.stop"} />
          </Link>
        </PopoverContent>
      </PopoverContentWrapper>
    )
  };

  render() {
    const { item } = this.props;

    const {
      id,
      jan_code,
      img_src,
      item_price,
      item_price_present,
      item_discount,
      quantity,
      order_frequency,
      cancel_type,
      caption
    } = item;

    const imgUrl = jan_code ? "/store/cmdty/detail/" + jan_code : id;

    return (
      <ItemMainWrapper>
        <ItemImage src={images[img_src]} to={imgUrl} />
        <ItemDescribeList>
          <ItemDescribe>
            <IntlMessages id="order.subscription.label.frequency" />
            <IntlMessages
              id="order.subscription.frequency"
              values={{
                frequency: order_frequency
              }}
            />
          </ItemDescribe>
          <ItemDescribe>
            <IntlMessages id="order.subscription.label.num" />
            <IntlMessages
              id="order.subscription.quantity"
              values={{
                num: quantity
              }}
            />
          </ItemDescribe>
          <ItemDescribe>
            <DescribePriceWrapper>
              {item_price_present ? (
                <Link to={"#"} style={{ textDecoration: "line-through" }}>
                  <IntlMessages
                    id="order.subscription.price"
                    values={{
                      price: item_price
                    }}
                  />
                </Link>
              ) : (
                <Link to={"#"}>
                  <IntlMessages
                    id="order.subscription.price"
                    values={{
                      price: item_price
                    }}
                  />
                </Link>
              )}
              {item_price_present && <DescribePriceArrow>→</DescribePriceArrow>}
              {item_price_present && (
                <DescribePricePresent>
                  <Link to={"#"}>
                    <IntlMessages
                      id="order.subscription.price"
                      values={{
                        price: item_price_present
                      }}
                    />
                  </Link>
                </DescribePricePresent>
              )}
            </DescribePriceWrapper>
          </ItemDescribe>
          <ItemDescribe>
            <DescribeDiscount>
              <Link to={"#"}>{item_discount}</Link>
            </DescribeDiscount>
          </ItemDescribe>
          <ItemDescribe>
            <Link to={"#"}>{caption}</Link>
          </ItemDescribe>
        </ItemDescribeList>
        {cancel_type === 1 &&
          <EllipsisButton
            placement="topRight"
            content={this.favoriteItemPopover()}
            trigger="click"
            onVisibleChange={this.handleVisibleChange}
            visible={this.state.popoverVisible}
          />
        }
        {cancel_type === 1 && 
          <DeleteModal
            visible = {this.state.stopModalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          />
        }
      </ItemMainWrapper>
    );
  }
}

export default ItemMain;
