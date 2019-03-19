import React, { Component } from "react";
import { Link } from "react-router-dom";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";

const DescribePriceWrapper = styled.li`
  display: flex;
  flex-wrap: wrap;

  a,
  a:hover,
  a:focus {
    color: rgb(0, 0, 0, 0.65);
    white-space: nowrap;
  }
`;

const DescribeList = styled.ul`
  margin-left: 15px;
  margin-bottom: 0px;
  width: calc(80% - 15px);
  padding: 0;
  list-style: none;
  line-height: 20px;
`;

const Describe = styled.li`
  line-height: 20px;

  a,
  a:hover,
  a:focus {
    color: rgb(0, 0, 0, 0.65);
  }
`;

const DescribePricePresent = styled.span`
  a,
  a:hover,
  a:focus {
    color: rgb(139, 26, 39);
    font-weight: 600;
  }
`;

const DescribePriceArrow = styled.span`
  margin: 0 5px;
`;

const DescribeDiscount = styled.span`
  font-size: 10px;

  a,
  a:hover,
  a:focus {
    color: rgb(0, 0, 0, 0.65);
  }
`;

class ItemMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverVisible: false,
      stopModalVisible: false
    };
  }

  render() {
    const { item } = this.props;

    const {
      order_state,
      item_price,
      item_price_present,
      item_discount,
      item_color,
      item_size,
      quantity,
      caption
    } = item;

    return (
      <DescribeList>
        <Describe>{order_state}</Describe>
        <Describe>
          <Link to={"#"}>
            <IntlMessages id="order.purchaseHistory.label.quantity" />
            <IntlMessages
              id="order.purchaseHistory.quantity"
              values={{
                num: quantity
              }}
            />
          </Link>
        </Describe>
        {item_color && (
          <Describe>
            <Link to={"#"}>
              <IntlMessages id="order.purchaseHistory.label.color" />
              {item_color}
            </Link>
          </Describe>
        )}
        {item_size && (
          <Describe>
            <Link to={"#"}>
              <IntlMessages id="order.purchaseHistory.label.size" />
              {item_size}
            </Link>
          </Describe>
        )}
        <DescribePriceWrapper>
          {item_price_present ? (
            <Link to={"#"} style={{ textDecoration: "line-through" }}>
              <IntlMessages
                id="order.purchaseHistory.price"
                values={{
                  price: item_price
                }}
              />
            </Link>
          ) : (
            <Link to={"#"}>
              <IntlMessages
                id="order.purchaseHistory.price"
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
                  id="order.purchaseHistory.price"
                  values={{
                    price: item_price_present
                  }}
                />
              </Link>
            </DescribePricePresent>
          )}
        </DescribePriceWrapper>
        <Describe>
          <DescribeDiscount>
            <Link to={"#"}>{item_discount}</Link>
          </DescribeDiscount>
        </Describe>
        <Describe>
          <Link to={"#"}>{caption}</Link>
        </Describe>
      </DescribeList>
    );
  }
}

export default ItemMain;
