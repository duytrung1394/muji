import React from "react";
import { Link } from "react-router-dom";
import IntlMessages from "../../../components/utility/intlMessages";
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

const FavoriteItemMain = ({ item, itemKey }) => {
  const {
    item_price,
    item_price_present,
    item_discount,
    order_date,
    caption
  } = item;

  return (
    <DescribeList>
      <DescribePriceWrapper>
        {item_price && (
          <Link
            to={"#"}
            style={item_price_present && { textDecoration: "line-through" }}
            draggable={false}
          >
            <IntlMessages id="favorite.price" values={{ price: item_price }} />
          </Link>
        )}
        {item_price_present && <DescribePriceArrow>→</DescribePriceArrow>}
        {item_price_present && (
          <DescribePricePresent>
            <Link to={"#"} draggable={false}>
              <IntlMessages
                id="favorite.price"
                values={{ price: item_price_present }}
              />
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
        <IntlMessages
          id={"favorite.dateSuffix." + itemKey}
          values={{ date: order_date }}
        />
      </Describe>
    </DescribeList>
  );
};

export default FavoriteItemMain;
