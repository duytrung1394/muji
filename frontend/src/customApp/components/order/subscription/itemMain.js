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

const ItemMain = ({ item }) => {
  const {
    item_price,
    item_price_present,
    item_discount,
    quantity,
    order_frequency,
    caption
  } = item;

  return (
    <DescribeList>
      <Describe>
        <IntlMessages id="order.subscription.label.frequency" />
        <IntlMessages
          id="order.subscription.frequency"
          values={{
            frequency: order_frequency
          }}
        />
      </Describe>
      <Describe>
        <IntlMessages id="order.subscription.label.num" />
        <IntlMessages
          id="order.subscription.quantity"
          values={{
            num: quantity
          }}
        />
      </Describe>
      <DescribePriceWrapper>
        {item_price && (
          <Link
            to={"#"}
            style={item_price_present && { textDecoration: "line-through" }}
            draggable={false}
          >
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
};

export default ItemMain;
