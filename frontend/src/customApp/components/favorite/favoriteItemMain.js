import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components";

export const DescribePriceWrapper = styled.li`
  display: flex;
  flex-wrap: wrap;

  a,
  a:hover,
  a:focus {
    color: rgb(0, 0, 0, 0.65);
    white-space: nowrap;
  }
`;

export const DescribeList = styled.ul`
  margin-left: 15px;
  margin-bottom: 0px;
  width: calc(80% - 15px);
  padding: 0;
  list-style: none;
  line-height: 20px;
`;

export const Describe = styled.li`
  line-height: 20px;

  a,
  a:hover,
  a:focus {
    color: rgb(0, 0, 0, 0.65);
  }
`;

export const DescribePricePresent = styled.span`
  a,
  a:hover,
  a:focus {
    color: rgb(139, 26, 39);
    font-weight: 600;
  }
`;

export const DescribePriceArrow = styled.span`
  margin: 0 5px;
`;

export const DescribeDiscount = styled.span`
  font-size: 10px;

  a,
  a:hover,
  a:focus {
    color: rgb(0, 0, 0, 0.65);
  }
`;

const dateSuffix = type => {
  switch (type) {
    case 1:
      return "favorite.dateSuffix.product";
    case 2:
      return "favorite.dateSuffix.event";
    case 3:
      return "favorite.dateSuffix.article";
  }
};

class FavoriteItemMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      popoverVisible: false
    };
  }

  handleVisibleChange = visible => {
    this.setState({ popoverVisible: visible });
  };

  render() {
    const { item } = this.props;

    const {
      favorite_type,
      item_price,
      item_price_present,
      item_discount,
      order_date,
      caption
    } = item;

    return (
      <DescribeList>
        <DescribePriceWrapper>
          {item_price_present ? (
            <Link
              to={"#"}
              style={{ textDecoration: "line-through" }}
              draggable={false}
            >
              {item_price}
            </Link>
          ) : (
            <Link to={"#"} draggable={false}>
              {item_price}
            </Link>
          )}
          {item_price_present && <DescribePriceArrow>→</DescribePriceArrow>}
          {item_price_present && (
            <DescribePricePresent>
              <Link to={"#"} draggable={false}>
                {item_price_present}
              </Link>
            </DescribePricePresent>
          )}
        </DescribePriceWrapper>
        <Describe>
          <DescribeDiscount>
            <Link to={"#"} draggable={false}>
              {item_discount}
            </Link>
          </DescribeDiscount>
        </Describe>
        <Describe>{caption}</Describe>

        <Describe>
          {order_date}
          <IntlMessages id={dateSuffix(favorite_type)} />
        </Describe>
      </DescribeList>
    );
  }
}

export default FavoriteItemMain;
